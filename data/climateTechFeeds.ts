import { ClimateTechFeed } from './interfaces';

  export const climateTechFeeds: ClimateTechFeed[] = [
    {
      "title": "Carbon Brief",
      "url": "https://www.carbonbrief.org/feed",
      // Give the user the ability to add custom data
      "meta": {
        "customProperty1": "Example Value 1",
        "customProperty2": "Example Value 2",
        "customProperty3": "Example Value 3",
        "website": "example.com",
        "tags": ["technology", "climate", "renewable energy"]
      }
    },
    {
      "title": "Renewables Now",
      "url": "https://renewablesnow.com/feeds/",
    },
    {
      "title": "Sustainable Transport Insights",
      "url": "https://www.appropedia.org/Sustainable_transport_news",
    },
    {
      "title": "Green Building News",
      "url": "https://www.greenbuildingadvisor.com/feed",
    },
    {
      "title": "Circular Economy Updates",
      "url": "https://unece.org/media/Circular%20Economy/news",
    },
    {
      "title": "Climate Policy Analysis",
      "url": "https://www.sciencedaily.com/rss/earth_climate.xml",
    }
]
  