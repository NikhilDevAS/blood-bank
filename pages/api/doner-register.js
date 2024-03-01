import { mongooseConnect } from '@/lib/database';
import { Doners } from '@/model/doner';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await mongooseConnect();

    const data = await Doners.create(req.body);
    if (data) {
      res
        .status(201)
        .json({ status: true, message: 'Thank you for your registeration.' });
    }
  }
}
