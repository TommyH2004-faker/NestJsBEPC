export declare class MailerService {
    private transporter;
    constructor();
    sendActivationEmail(to: string, activationLink: string): Promise<void>;
    sendNewPassword(to: string, newPassword: string): Promise<void>;
}
