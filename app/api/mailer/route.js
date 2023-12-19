import { NextResponse } from 'next/server'
import { sendMail } from '@/app/services/jdsmailservice'


export async function POST(request) {
    //const {title, author, email}=await request.json()
   // console.log(await request.json())
     const re= await request.json()
     
     const emailer= process.env.USERMAIL
     const {name, email, subject, message}=re
     const dtr=`<h1>my name is ${name}<h1/><p>${message}<p/>`
   const isSent=await sendMail(email, emailer,subject,dtr)

    return NextResponse.json({ isSent})
}