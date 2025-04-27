import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'josiahdanielle09gallenero@gmail.com',
        pass: 'lbyx bkvc tgow kood',
    },
});

// Correctly type 'req' and 'res'
app.post('/api/sendEmail', (req: Request, res: Response) => {
    const { name, email, message, subject } = req.body;

    const mailOptions = {
        from: email,
        to: 'josiahdanielle09gallenero@gmail.com',
        subject: subject || `Message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Correctly type 'error' and 'info'
    transporter.sendMail(mailOptions, (error: Error | null, info: unknown) => {
        if (error) {
            return res.status(500).json({ message: 'Failed to send message', error: error.message });
        }
        return res.status(200).json({ message: 'Message sent successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
