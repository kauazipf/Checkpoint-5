import { NextApiRequest, NextApiResponse } from 'next';

const images = [
  { id: 1, url: '/images/error.png' },
  { id: 2, url: '/images/venus.png' },
  { id: 3, url: '/images/calculo.png' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(images);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}