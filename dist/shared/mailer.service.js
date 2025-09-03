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
exports.MailerService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let MailerService = class MailerService {
    transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
    }
    async sendActivationEmail(to, activationLink) {
        try {
            await this.transporter.sendMail({
                from: `"MyMovie" <${process.env.MAIL_USER}>`,
                to,
                subject: 'Kích hoạt tài khoản',
                html: `
        <div style="font-family:Arial,sans-serif">
          <h2>Chào mừng bạn đến với MyMovie 🎬</h2>
          <p>Nhấn vào nút bên dưới để kích hoạt tài khoản:</p>
          <p>
            <a href="${activationLink}"
               style="display:inline-block;padding:10px 16px;background:#1976d2;color:#fff;text-decoration:none;border-radius:6px">
               KÍCH HOẠT TÀI KHOẢN
            </a>
          </p>
          <p>Nếu nút không hoạt động, sao chép link sau vào trình duyệt:</p>
          <p>${activationLink}</p>
          <hr/>
          <small>Liên kết sẽ hết hạn sau 24 giờ.</small>
        </div>
      `,
            });
        }
        catch (error) {
            console.error('Error sending email:', error);
        }
    }
    async sendNewPassword(to, newPassword) {
        try {
            await this.transporter.sendMail({
                from: `"MyMovie" <${process.env.MAIL_USER}>`,
                to,
                subject: 'Mật khẩu mới của bạn',
                html: `
          <div style="font-family:Arial,sans-serif">
            <h2>Xin chào 🎬</h2>
            <p>Chúng tôi đã tạo mật khẩu mới cho tài khoản của bạn:</p>
            <p style="font-size:18px;font-weight:bold;color:#d32f2f">${newPassword}</p>
            <p>Vui lòng đăng nhập bằng mật khẩu trên, sau đó đổi lại mật khẩu trong phần cài đặt tài khoản để bảo mật tốt hơn.</p>
            <hr/>
            <small>Đừng quên đổi mật khẩu ngay sau khi đăng nhập.</small>
          </div>
        `,
            });
        }
        catch (error) {
            console.error('Error sending new password email:', error);
        }
    }
};
exports.MailerService = MailerService;
exports.MailerService = MailerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailerService);
//# sourceMappingURL=mailer.service.js.map