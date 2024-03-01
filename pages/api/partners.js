import { mongooseConnect } from '@/lib/database';
import { Doners } from '@/model/doner';

export default async function handler(req, res) {
  await mongooseConnect();
  if (req.method === 'GET') {
    const data = await Doners.find({ usertype: 'partner' });
    res.status(201).json({ doc: data });
  }

  if (req.method === 'POST') {
    const data = await Doners.find({
      usertype: 'partner',
      group: req.body.group,
    });
    res.status(201).json({ doc: data });
  }
}
