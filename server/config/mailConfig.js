const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000, // wait up to 10 seconds to connect
  socketTimeout: 10000,      // wait up to 10 seconds for data
  tls: {
    rejectUnauthorized: false, // helps avoid self-signed cert issues
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
