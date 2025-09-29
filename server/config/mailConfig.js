const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid'); // Add this

// Use SendGrid API instead of Gmail SMTP
const transporter = nodemailer.createTransport(
  sgTransport({
    apiKey: process.env.SENDGRID_API_KEY // Set this in Render Environment Variables
  })
);

// Optional: verify connection (works for API transport too)
transporter.verify((error) => {
  if (error) {
    console.error('Mail transporter error:', error);
  } else {
    console.log('Mail transporter is ready');
  }
});

module.exports = transporter;
