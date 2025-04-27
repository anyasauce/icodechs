"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Use default import
const nodemailer_1 = __importDefault(require("nodemailer")); // Use default import for nodemailer
const body_parser_1 = __importDefault(require("body-parser")); // Use default import
const cors_1 = __importDefault(require("cors")); // Use default import
const app = (0, express_1.default)();
const port = 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'josiahdanielle09gallenero@gmail.com',
        pass: 'lbyx bkvc tgow kood',
    },
});
// Correctly type 'req' and 'res'
app.post('/api/sendEmail', (req, res) => {
    const { name, email, message, subject } = req.body;
    const mailOptions = {
        from: email,
        to: 'josiahdanielle09gallenero@gmail.com',
        subject: subject || `Message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).json({ message: 'Failed to send message', error: error.message });
        }
        return res.status(200).json({ message: 'Message sent successfully!' });
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
