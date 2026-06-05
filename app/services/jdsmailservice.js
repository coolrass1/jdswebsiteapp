let nodemailer = require("nodemailer");

export const sendMail = async function (frommail, tomail, subject, message) {
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
    from: frommail,
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
    const result = await transporter.sendMail(mailData);
    console.log('Email sent successfully:', result.messageId);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error.message);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response
    });
    return false;
  }
};
