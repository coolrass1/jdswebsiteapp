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
    const { name, email, subject, message } = re
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { isSent: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const dtr = `<h1>my name is ${name}</h1><p>${message}</p>`
    const isSent = await sendMail(email, emailer, subject, dtr)

    return NextResponse.json({ isSent })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { isSent: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}