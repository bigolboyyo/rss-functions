import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';
import { ClimateTechFeed } from '../../data/interfaces';

export async function fetchAndParseFeeds(feeds: ClimateTechFeed[]) {

  const rawFeeds = await Promise.all(
    feeds.map(async (feed) => {
      const response = await fetch(feed.url);
      const xml = await response.text();
      const json = await parseStringPromise(xml);
      return { ...feed, items: json.rss.channel.item };
    })
  );

  return rawFeeds;
}
