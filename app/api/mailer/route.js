import { NextResponse } from 'next/server'
import { sendMail } from '@/app/services/jdsmailservice'


export async function POST(request) {
  try {
    const re = await request.json()
    
    // Validate environment variables
    if (!process.env.JDS_USERMAIL || !process.env.JDS_USERMAILPASSWORD) {
      console.error('Email configuration missing in environment variables');
      return NextResponse.json(
        { isSent: false, error: 'Email configuration not found' },
        { status: 500 }
      )
    }
    
    const emailer = process.env.JDS_USERMAIL
    const { name, email, subject, message, phone, practiceArea } = re
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { isSent: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const dtr = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #001743;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p style="margin: 5px 0;"><strong>Practice Area:</strong> ${practiceArea || 'Not specified'}</p>
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #001743;">Message:</h3>
          <p style="line-height: 1.6;">${message}</p>
        </div>
      </div>
    `
    const result = await sendMail(email, emailer, subject, dtr)

    if (result.success) {
      return NextResponse.json({ isSent: true, messageId: result.messageId })
    } else {
      console.error('Email service returned error:', result);
      return NextResponse.json({ 
        isSent: false, 
        error: result.error || 'Email service error',
        details: result.details 
      })
    }
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { isSent: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}