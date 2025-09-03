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
exports.CreateProductDto = exports.isUpperCase = void 0;
const class_validator_1 = require("class-validator");
let isUpperCase = class isUpperCase {
    validate(text, validationArguments) {
        console.log(validationArguments);
        return text === text.toUpperCase();
    }
};
exports.isUpperCase = isUpperCase;
exports.isUpperCase = isUpperCase = __decorate([
    (0, class_validator_1.ValidatorConstraint)()
], isUpperCase);
class CreateProductDto {
    name;
    description;
    price;
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50, {
        message: 'Name must be between 1 and 50 characters long.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required.' }),
    (0, class_validator_1.Validate)(isUpperCase, {
        message: 'Name must be in uppercase.',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 200, {
        message: 'Description must be between 1 and 200 characters long.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description is required.' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Price must be a number.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Price is required.' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
//# sourceMappingURL=create-product.dto.js.map