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
exports.ProductController = exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const core_1 = require("@nestjs/core");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
let ValidationPipe = class ValidationPipe {
    request;
    constructor(request) {
        this.request = request;
    }
    transform(value) {
        const id = this.request?.params?.id;
        const { name } = value;
        if (typeof name === 'string' && name.trim().toUpperCase() === 'SẢN PHẨM') {
            throw new common_1.BadRequestException(`Không được đặt tên sản phẩm là "SẢN PHẨM"${id ? ` (ID: ${id})` : ''}`);
        }
        return value;
    }
};
exports.ValidationPipe = ValidationPipe;
exports.ValidationPipe = ValidationPipe = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST }),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object])
], ValidationPipe);
let ProductController = class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    async findAll(req) {
        console.log(req.user);
        const user = await this.productService.findAll();
        if (!user) {
            throw new common_1.HttpException('Không tìm thấy sản phẩm', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findOne(id) {
        const product = await this.productService.findOne(+id);
        if (!product) {
            throw new common_1.HttpException('Sản phẩm không tìm thấy', common_1.HttpStatus.NOT_FOUND);
        }
        return product;
    }
    create1(productData) {
        return this.productService.create(productData);
    }
    create(productData) {
        return this.productService.create(productData);
    }
    update(id, productData) {
        return this.productService.update(+id, productData);
    }
    delete(id) {
        return this.productService.delete(+id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create1", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, common_1.UsePipes)(ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)(ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "delete", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map