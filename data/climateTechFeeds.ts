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
      "title": "Grist",
      "url": "https://grist.org/feed/"
    },
    {
      "title": "Ars Technica",
      "url": "https://arstechnica.com/tag/climate-change/feed/" 
    },
    {
      "title": "Desmog",
      "url": "https://www.desmog.com/feed/"
    },
    {
      "title": "Tech Crunch",
      "url": "https://techcrunch.com/tag/climate-tech/feed/"
    },
    {
      "title": "Green Building Advisor",
      "url": "https://www.greenbuildingadvisor.com/feed"
    },
    {
      "title": "Science Daily: Earth Climate",
      "url": "https://www.sciencedaily.com/rss/earth_climate.xml"
    },
    {
      "title": "Renewables Now",
      "url": "https://renewablesnow.com/news/news_feed/?region=usa%20&%20canada"
    },
]
  