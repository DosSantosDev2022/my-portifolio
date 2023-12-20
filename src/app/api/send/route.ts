import { EmailTemplate } from '@/components/emails/EmailTemplate'
import { NextResponse } from 'next/server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} < ${process.env.EMAIL_FROM_EMAIL} >`,
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      text: '',
      react: EmailTemplate({ username: 'Juliano' }),
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
