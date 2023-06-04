export interface RSSFeed {
    version: string;
    channel: Channel;
  }
  
  export interface Channel {
    title: string;
    link: string;
    description: string;
    language: string;
    pubDate: string;
    lastBuildDate: string;
    item: Item[];
  }
  
  export interface ClimateTechFeed {
    title: string;
    url: string;
    description: string;
    items?: Item[];  
  }

  export interface Item {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    guid: string;
    author?: string;
    category?: string;
    comments?: string;
  }
  