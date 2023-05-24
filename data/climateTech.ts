interface ClimateTechFeed {
    title: string;
    urls: string[];
    description: string;
  }

  export const climateTechFeeds: ClimateTechFeed[] = [
    {
      "title": "Climate Tech News",
      "urls": ["https://www.carbonbrief.org/feed"],
      "description": "News and analysis on climate science, climate policy and energy policy." 
    },
    {
      "title": "Renewable Energy Updates",
      "urls": ["https://renewablesnow.com/feeds/"],
      "description": "Latest information about renewable energy sources like solar, wind, hydropower, etc.",
    },
    {
      "title": "Sustainable Transport Insights",
      "urls": ["https://www.appropedia.org/Sustainable_transport_news"],
      "description": "News and insights about eco-friendly transportation systems and technologies.",
    },
    {
      "title": "Green Building News",
      "urls": ["https://www.greenbuildingadvisor.com/feed"],
      "description": "Updates about green architecture and construction practices.",
    },
    {
      "title": "Circular Economy Updates",
      "urls": ["https://unece.org/media/Circular%20Economy/news"],
      "description": "Information about sustainable economic systems where waste is minimized and resources are reused.",
    },
    {
      "title": "Climate Policy Analysis",
      "urls": ["https://www.sciencedaily.com/rss/earth_climate.xml"],
      "description": "In-depth analysis and updates about climate policies and regulations worldwide.",
    }
]
  