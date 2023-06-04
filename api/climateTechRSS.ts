import { VercelRequest, VercelResponse } from '@vercel/node';
import { RSSConfig } from '../data/RSSConfig';

export default async function (req: VercelRequest, res: VercelResponse) {
  const rss = new RSSConfig();
  await rss.handleRequest(req, res);
}
