const nodemailer = require('nodemailer');

module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 host: 'smtp.hostinger.com.ar',
 port: 587,
 secure: false,
 auth: {
 user: 'angular@13mai96.com', // Cambialo por tu email
 pass: 'Belen150499' // Cambialo por tu password
 }
 });

 const mailOptions = {
 from: 'Estudio Contable Penzo Semcoff <angular@13mai96.com>',
 to: 'angular@13mai96.com', // Cambia esta parte por el destinatario
 subject: formulario.asunto,
 html: 
 '<p><strong>' + formulario.nombre + '<strong><p>E-mail: ' + formulario.email + '<p>Dice:</br><p>' + formulario.mensaje + '</p>'
 };

 const mailOptions2 = {
    from: 'Estudio Contable Penzo Semcoff <angular@13mai96.com>',
    to: formulario.email, // Cambia esta parte por el destinatario
    subject: formulario.asunto,
    html: 
    '<p><strong>' + formulario.nombre + '<strong><p>Gracias por contactarte. </p>'
    };

transporter.sendMail(mailOptions, function (err, info) {
console.log(formulario.nombre);
 if (err)
 console.log(err)
 else
 console.log(info);
 });
 
transporter.sendMail(mailOptions2, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}