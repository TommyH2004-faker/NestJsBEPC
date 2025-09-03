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
exports.CreateReviewDto = void 0;
const class_validator_1 = require("class-validator");
class CreateReviewDto {
    movieId;
    userId;
    comment;
    rating;
}
exports.CreateReviewDto = CreateReviewDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'movieId must be a positive integer' }),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "movieId", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'userId must be an integer number' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Comment must be a string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'Rating must be a positive integer' }),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "rating", void 0);
//# sourceMappingURL=create_dto.js.map