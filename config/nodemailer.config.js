const nodemailer = require('nodemailer');
const template = require ('./mailtemplate');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NM_USER,
    pass: process.env.NM_PASSWORD
  }
})

module.exports.activationEmail = (email, token) => {
  transporter.sendMail({
    from: `Example name <${process.env.NM_USER}>`,
    to: email,
    subject: "Welcome to our web project!",
    html: template.generateEmail(token)
  })
}

