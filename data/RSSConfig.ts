import { parseStringPromise } from 'xml2js';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { ClimateTechFeed } from './interfaces';
import { climateTechFeeds } from './climateTechFeeds';

export class RSSConfig {
  private allowedOrigins: string[];

  constructor(allowedOrigins: string[] = ['http://127.0.0.1:8000', 'https://www.climatetechhandbook.com', "*"]) {
    this.allowedOrigins = allowedOrigins;
  }

  // --> Setting Access Control Headers

  public setAccessControlHeaders(req: VercelRequest, res: VercelResponse) {
    const origin = req.headers.origin || "";
    if (this.allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET');
  }

  // --> Fetching and Structuring RSS feed functions

  public async fetchAndParseFeeds(feeds: ClimateTechFeed[]) {
    const rawFeeds = await Promise.all(
      feeds.map(async (feed) => {
        const response = await fetch(feed.url);
        const xml = await response.text();
        const json = await parseStringPromise(xml);
        return { ...feed, items: json.rss.channel[0].item };
      })
    );
    return rawFeeds;
  }

  public async aggregateFeeds() {
    const aggregatedFeeds: any[] = [];

    const rawFeeds = await this.fetchAndParseFeeds(climateTechFeeds)
    rawFeeds.forEach((feed) => {
      if (feed.items) {
        feed.items.forEach((item: any) => {
          aggregatedFeeds.push(item);
        });
      }
    });
  
    return aggregatedFeeds;
  }
  
  


  // --> Setting the response JSON

  public async handleRequest(req: VercelRequest, res: VercelResponse) {
    this.setAccessControlHeaders(req, res);
  
    // const rawFeeds = await this.fetchAndParseFeeds(climateTechFeeds);
    const aggregatedFeeds = await this.aggregateFeeds();
    console.log(aggregatedFeeds)
    res.status(200).json(aggregatedFeeds);
  }
  
}
