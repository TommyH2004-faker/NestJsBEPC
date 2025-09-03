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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const typeorm_1 = require("typeorm");
const genre_entity_1 = require("./genre.entity");
const episode_entity_1 = require("./episode.entity");
const favorite_entity_1 = require("./favorite.entity");
const review_entity_1 = require("./review.entity");
const comment_entity_1 = require("./comment.entity");
let Movie = class Movie {
    id;
    title;
    original_title;
    slug;
    description;
    release_date;
    duration;
    poster_url;
    banner_url;
    trailer_url;
    status;
    type;
    country;
    director;
    cast;
    rating;
    views;
    created_at;
    updated_at;
    genres;
    episodes;
    comments;
    reviews;
    favorites;
};
exports.Movie = Movie;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "original_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Movie.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'year', nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "release_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Movie.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movie.prototype, "poster_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "banner_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "trailer_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'ongoing' }),
    __metadata("design:type", String)
], Movie.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "director", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Movie.prototype, "cast", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 3, scale: 1, nullable: true }),
    __metadata("design:type", Number)
], Movie.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Movie.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Movie.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Movie.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => genre_entity_1.Genre, (genre) => genre.movies, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'movie_genres',
        joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'genre_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Movie.prototype, "genres", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => episode_entity_1.Episode, (episode) => episode.movie),
    __metadata("design:type", Array)
], Movie.prototype, "episodes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.movie),
    __metadata("design:type", Array)
], Movie.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => review_entity_1.Review, (review) => review.movie),
    __metadata("design:type", Array)
], Movie.prototype, "reviews", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.Favorite, (favorite) => favorite.movie),
    __metadata("design:type", Array)
], Movie.prototype, "favorites", void 0);
exports.Movie = Movie = __decorate([
    (0, typeorm_1.Entity)()
], Movie);
//# sourceMappingURL=movie.entity.js.map