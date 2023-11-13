// http://192.168.0.227:3000/api/contact
// http://localhost:3000/api/contact
import nodemailer from 'nodemailer';
import validator from 'validator';
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
    host: config.MAILHOST,
    port: config.MAILPORT,
    auth: {
        user: config.MAILUSER,
        pass: config.MAILPASS
    }
});

export default defineEventHandler(async (event, response) => {
    try { 
        const body = await readBody(event);

        console.log(body, response)

        await isValid(body);

        const mail = await transporter.sendMail({
            from: `"${body.firstname} ${body.lastname} via frederikkohler.de - KontaktFormular" <${process.env.NOREPLY}>`,
            to: config.CONTACTMAIL,
            subject: body.subject,
            text: 'Plain Mail',
            html: `
            <p>${body.firstname} ${body.lastname}</p>
            `
        });
       
        console.log(mail); // Überprüfe den gesamten Rückgabewert
        console.log('Message send:', mail.messageId);

        console.log('Message send: %s', mail.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(mail));
         
        return Promise.resolve('Gesendet!');
    } catch (error) {
        if (error.length > 0) {
            sendError(event, createError({ 
                statusCode: 400, 
                statusMessage: error[0].error || 'An unexpected error occurred',
            }));
        }
        
    }
});

async function isValid(body) {
    const errors = [];

    Object.entries(body).forEach(([key, value]) => {
        if (validator.isEmpty(value)) {
            errors.push({
                field: key,
                error: `${key} is empty.`
            });
        } else if (key === 'email' && !validator.isEmail(value)) {
            errors.push({
                field: key,
                error: `${key} is not a valid email address.`
            });
        }
    });
      

    if (errors.length > 0) {
        return Promise.reject(errors);
    } else {
        return Promise.resolve({});
    }
}