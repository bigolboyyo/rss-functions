import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import { climateTechFeeds } from '../../data/climateTechFeeds';

export default async function (req: VercelRequest, res: VercelResponse) {
  const allowedOrigins = ['http://127.0.0.1:8000', 'https://www.climatetechhandbook.com'];
  const origin = req.headers.origin || "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Fetch and parse RSS feeds
  const parsedFeeds = await Promise.all(
    climateTechFeeds.map(async (feed) => {
      const response = await fetch(feed.url);
      const xml = await response.text();
      const json = await parseStringPromise(xml);
      return { ...feed, items: json };
    })
  );

  res.status(200).json(parsedFeeds);
}


// import { VercelRequest, VercelResponse } from '@vercel/node';
// import { fetchAndParseFeeds } from './fetchFeeds';
// import { structureFeeds } from './structureFeeds';
// import { climateTechFeeds } from '../../data/climateTech';

// export default async function (req: VercelRequest, res: VercelResponse) {
//   // Your code for handling requests goes here.
//   // Here's a basic example of what you might do:

//   const rawFeeds = await fetchAndParseFeeds(climateTechFeeds);
//   const structuredFeeds = structureFeeds(rawFeeds);
  
//   res.status(200).json(structuredFeeds);
// }
