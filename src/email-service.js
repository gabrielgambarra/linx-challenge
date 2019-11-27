const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/teste', (req, res) => {
    res.send('OK');
})

app.post('/', (req, res) => {

    const { name, email } = req.body;

    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.googlemail.com', // Gmail Host
            port: 465, // Port
            secure: true, // this is true as port is 465
            auth: {
                user: `${process.env.EMAIL}`, //Gmail username
                pass: `${process.env.PASS}` // Gmail password
            }
        });

        let mailOptions = {
            from: '"Gabriel Gambarra" <gambarragabriel@gmail.com>',
            to: `${email}`, // Recepient email address. Multiple emails can send separated by commas
            subject: 'Novidade da Linx!',
            text: `${name}, sabia que a Linx está prestes a ganhar um novo colaborador? #linxContrataoGambarra`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(400).send(error);
            }
            res.status(200).send('Deu bom');
        });
    });
});

app.listen(process.env.PORT || 5000);