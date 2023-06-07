import { parseStringPromise } from 'xml2js';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { ClimateTechFeed, ClimateTechHandbookRSSFeed, Channel, Item, RSSFeed } from './interfaces';
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
    res.setHeader('Cache-Control', 's-maxage=86400');
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

  // This will be the endpoint return
  // take the agFeeds and structure with the RSSFeed interface
  // So the CTHRSSFeed will have an array  of RSSFeed[]
  // each feed will have the version and the channel
  // each channel will have its metadata and list of Item[]

  // I should have a title property in the RSSFeed interface
  // rssFeed.title would be the CTFeed title


  public async buildClimateTechFeed(agFeeds: any[], 
    developer: string = "Wesley Grant", 
    description: string = 
    "Hello and welcome to the Climate Tech Handbook's RSS aggregator. Here we collect RSS feeds from many different sources all centered around the idea of 'climate tech' and offer them in one endpoint. Feel free to use the data in your own projects and thanks for stopping by!", 
    channels: Channel[]){
      
    const feed: ClimateTechHandbookRSSFeed = {
      developer,
      description,
      channels
    }

  }

  // --> Setting the response JSON

  public async handleRequest(req: VercelRequest, res: VercelResponse) {
    this.setAccessControlHeaders(req, res);
    
    const feeds = await this.aggregateFeeds();
    return feeds;
  }
}
