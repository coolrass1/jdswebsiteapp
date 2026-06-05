let nodemailer = require("nodemailer");

export const sendMail = async function (frommail, tomail, subject, message) {
  // Validate inputs
  if (!frommail || !tomail || !subject || !message) {
    console.error('Missing required email parameters:', { frommail, tomail, subject: !!subject, message: !!message });
    return { success: false, error: 'Missing required parameters' };
  }
  
  // Validate environment variables
  if (!process.env.JDS_USERMAIL || !process.env.JDS_USERMAILPASSWORD || !process.env.JDS_USERHOST) {
    console.error('Missing email configuration environment variables');
    return { success: false, error: 'Email configuration not set up' };
  }

  // const transporter = nodemailer.createTransport({
  //   port: process.env.PORTSMAIL,
  //   host: process.env.USERHOST,
  //   auth: {
  //     user: process.env.USERMAIL,
  //     pass: process.env.USERMAILPASSWORD,
  //   },
  //   secure: true,
  // });
  const transporter = nodemailer.createTransport({
    port: process.env.JDS_PORTSMAIL || 587,
    host: process.env.JDS_USERHOST,
    auth: {
      user: process.env.JDS_USERMAIL,
      pass: process.env.JDS_USERMAILPASSWORD,
    },
    secure: process.env.JDS_PORTSMAIL === '465', // true for 465, false for other ports
    tls: {
      rejectUnauthorized: true
    }
  });
  
  
  const mailData = {
    from: `"JDS Solicitors Contact Form" <${process.env.JDS_USERMAIL}>`, // Send FROM authenticated account
    replyTo: frommail, // User's email as reply-to
    to: tomail,
    subject: subject,
    html: message,
  };
  // transporter.sendMail(mailData, function (err, info) {
  //   if(err)
  //     console.log("cant send"+err)
  //   else
  //     console.log("succes")
  // })

  try {
    console.log('Attempting to send email from:', frommail, 'to:', tomail);
    const result = await transporter.sendMail(mailData);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error.message);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode
    });
    return { 
      success: false, 
      error: error.message || 'Unknown error',
      code: error.code,
      details: error.response
    };
  }
};
