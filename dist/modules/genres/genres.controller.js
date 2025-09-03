"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenresController = void 0;
const common_1 = require("@nestjs/common");
const genres_service_1 = require("./genres.service");
const movies_service_1 = require("../movies/movies.service");
let GenresController = class GenresController {
    genresService;
    movieService;
    constructor(genresService, movieService) {
        this.genresService = genresService;
        this.movieService = movieService;
    }
    findAll() {
        return this.genresService.findAll();
    }
    async createGenre(data) {
        if (!data.name || !data.slug) {
            throw new common_1.BadRequestException('Name and slug are required.');
        }
        return this.genresService.create(data);
    }
    async deleteGenre(id) {
        return this.genresService.deleteGenre(id);
    }
    async updateGenre(id, updateGenreDto) {
        console.log('Body received in Controller:', updateGenreDto);
        return this.genresService.update(+id, updateGenreDto);
    }
    async findMoviesByGenre(genreId, page = 1, size = 10, sort = 'title') {
        return this.genresService.findMoviesByGenre(genreId, page, size, sort);
    }
    getTotalGenres() {
        return this.genresService.getTotalGenres();
    }
    async get5genreNew() {
        return this.genresService.get5genreNew();
    }
    async getMovieBySlug(slug) {
        const movie = await this.genresService.findMovieByGenreSlug(slug);
        if (!movie) {
            throw new common_1.NotFoundException(`Movie with slug "${slug}" not found`);
        }
        return movie;
    }
    getGenreByIdGenre(id) {
        return this.genresService.getGenreById(id);
    }
};
exports.GenresController = GenresController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "createGenre", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "deleteGenre", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "updateGenre", null);
__decorate([
    (0, common_1.Get)(':id/movies'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('size')),
    __param(3, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "findMoviesByGenre", null);
__decorate([
    (0, common_1.Get)('total'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "getTotalGenres", null);
__decorate([
    (0, common_1.Get)('popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "get5genreNew", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "getMovieBySlug", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GenresController.prototype, "getGenreByIdGenre", null);
exports.GenresController = GenresController = __decorate([
    (0, common_1.Controller)('genres'),
    __metadata("design:paramtypes", [genres_service_1.GenresService, movies_service_1.MoviesService])
], GenresController);
//# sourceMappingURL=genres.controller.js.map