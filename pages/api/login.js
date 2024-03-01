import { mongooseConnect } from '@/lib/database';
import { Doners } from '@/model/doner';

export default async function hander(req, res) {
  await mongooseConnect();
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const data = await Doners.findOne({ email, password, usertype: 'partner' });
    if (data) {
      res.status(201).json(data);
    } else {
      res.status(202).json({ status: false, message: 'Invaild Credentials!' });
    }
  }
}
