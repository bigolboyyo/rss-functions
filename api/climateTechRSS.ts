import { VercelRequest, VercelResponse } from '@vercel/node';
import { RSSConfig } from '../data/RSSConfig';

export default async function (req: VercelRequest, res: VercelResponse) {
  const config = new RSSConfig();
  await config.handleRequest(req, res);
}
