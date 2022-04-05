// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from '../../modules/mailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, subject, content } = req.body;
    await sendMail(email, subject, content);
    res.send('sent');
  } catch (err) {
    console.error(err);
    res.status(500).send('error sending email');
  }
};
