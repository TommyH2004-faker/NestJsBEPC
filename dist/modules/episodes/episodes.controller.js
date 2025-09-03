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
exports.EpisodesController = void 0;
const common_1 = require("@nestjs/common");
const episodes_service_1 = require("./episodes.service");
let EpisodesController = class EpisodesController {
    episodesService;
    constructor(episodesService) {
        this.episodesService = episodesService;
    }
    findByMovie(movieId) {
        return this.episodesService.findByMovie(movieId);
    }
    create(data) {
        return this.episodesService.create(data);
    }
    delete(episode_number, movieId) {
        return this.episodesService.delete(episode_number, movieId);
    }
    async update(episode_number, movieId, data) {
        return this.episodesService.update(+episode_number, +movieId, data);
    }
};
exports.EpisodesController = EpisodesController;
__decorate([
    (0, common_1.Get)(':movieId'),
    __param(0, (0, common_1.Param)('movieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "findByMovie", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':episode_number/:movieId'),
    __param(0, (0, common_1.Param)('episode_number')),
    __param(1, (0, common_1.Param)('movieId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(':episode_number/:movieId'),
    __param(0, (0, common_1.Param)('episode_number')),
    __param(1, (0, common_1.Param)('movieId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], EpisodesController.prototype, "update", null);
exports.EpisodesController = EpisodesController = __decorate([
    (0, common_1.Controller)('episodes'),
    __metadata("design:paramtypes", [episodes_service_1.EpisodesService])
], EpisodesController);
//# sourceMappingURL=episodes.controller.js.map