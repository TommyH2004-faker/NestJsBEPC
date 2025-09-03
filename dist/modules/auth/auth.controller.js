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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const users_service_1 = require("../users/users.service");
const local_auth_guard_1 = require("../../guards/local-auth.guard");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
let AuthController = class AuthController {
    authService;
    userservice;
    constructor(authService, userservice) {
        this.authService = authService;
        this.userservice = userservice;
    }
    register(userData) {
        return this.userservice.create(userData);
    }
    login(req) {
        const user = req.user;
        return this.authService.login({
            id: user.id,
            username: user.username,
            email: user.email,
            enabled: user.enabled,
            roles: Array.isArray(user.roles) ? [user.roles[0]] : [user.roles],
        });
    }
    async refreshToken({ refresh_token }) {
        if (!refresh_token) {
            throw new common_1.BadRequestException('Refresh token is required');
        }
        const user = await this.authService.verityRefreshToken(refresh_token);
        if (!user) {
            throw new common_1.BadRequestException('Invalid refresh token');
        }
        return this.authService.login({
            id: user.id,
            username: user.name,
            email: user.email,
            enabled: user.enabled,
            roles: user.roles ? user.roles.map(role => role.name) : [],
        });
    }
    getProfile(req) {
        return {
            id: req.user?.id,
            username: req.user?.username,
            email: req.user?.email,
            role: Array.isArray(req.user?.roles) ? req.user?.roles[0] : req.user?.roles,
        };
    }
    async existsByEmails(email) {
        const exists = await this.userservice.existsByEmail(email);
        return exists ? 'true' : 'false';
    }
    async existsByUsername(name) {
        const exists = await this.userservice.existsByName(name);
        return exists ? 'true' : 'false';
    }
    async activate(code, res) {
        const user = await this.userservice.activateAccount(code);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: '❌ Mã kích hoạt không hợp lệ hoặc đã hết hạn.'
            });
        }
        return res.status(200).json({
            success: true,
            message: '✅ Kích hoạt tài khoản thành công! Giờ bạn có thể đăng nhập.'
        });
    }
    async forgotPassword(email) {
        const ok = await this.userservice.forgotPassword(email);
        if (!ok)
            throw new common_1.NotFoundException('Email không tồn tại');
        return { success: true, message: 'Mật khẩu mới đã được gửi vào email của bạn' };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/refresh-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('search/existsByEmail'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "existsByEmails", null);
__decorate([
    (0, common_1.Get)('search/existsByUsername'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "existsByUsername", null);
__decorate([
    (0, common_1.Get)('/activate/:code'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "activate", null);
__decorate([
    (0, common_1.Put)('forgot-password'),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map