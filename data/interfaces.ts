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
    items: Item[];
  }
  
  export interface ClimateTechFeed {
    title: string;
    url: string;
    items?: Item[];  
    // meta property for user submitted custom data
    meta?: Record<string, any>;
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
  