const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'info@ziyaacademy.co.in',
    pass: 'pwug xhiq iiqb ceat',
  },
 tls: {
    rejectUnauthorized: false, // helps avoid self-signed acert issues
  },
});

// Verify connection configuration
transporter.verify((error) => {
  if (error) {
    console.error('Mail transporter error:', error);
  } else {
    console.log('Mail transporter is ready');
  }
});

module.exports = transporter;
