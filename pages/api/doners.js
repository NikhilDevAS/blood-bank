import { Doners } from '@/model/doner';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = await Doners.find();
    res.status(201).json({ doc: data });
  }

  if (req.method === 'POST') {
    const data = await Doners.find(req.body);
    res.status(201).json({ doc: data });
  }
}
