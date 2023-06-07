import { VercelRequest, VercelResponse } from '@vercel/node';
import { RSSConfig } from '../data/RSSConfig';

export default async function (req: VercelRequest, res: VercelResponse) {
  const rss = new RSSConfig();
  rss.setAccessControlHeaders(req, res);

  res.setHeader('Cache-Control', 's-maxage=86400'); // Cache response for 24 hours on the Edge

  const freshData = await rss.handleRequest(req, res);

  res.status(200).json(freshData);
}
