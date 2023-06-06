ClimateTech Handbook RSS Feed Aggregator
=======================================

This project is a serverless function deployed on Vercel that aggregates various RSS feeds related to Climate Technology. The feeds are fetched, parsed, and structured into a unified format which can be easily consumed by a client. This provides a single endpoint to fetch the latest updates from multiple Climate Technology sources.

Key Features
------------

- Aggregates multiple Climate Technology RSS feeds into a unified format
- Sets appropriate Access Control headers for Cross-Origin Resource Sharing (CORS)
- Utilizes Vercel's Edge Network for response caching, significantly improving response times for repeat requests

Key Classes and Methods
-----------------------

**RSSConfig Class**

The `RSSConfig` class is the central class in the project.

Constructor
------------
The constructor initializes the class with the allowed origins for CORS.

`setAccessControlHeaders`
-------------------------
This method sets the appropriate Access Control headers based on the request origin.

`fetchAndParseFeeds`
---------------------
This method fetches and parses the feeds from the given URLs. It uses the `xml2js` library to convert the XML feeds into JSON.

`aggregateFeeds`
----------------
This method aggregates the feeds fetched and parsed by `fetchAndParseFeeds`. It consolidates all items from all feeds into a single array.

`buildClimateTechFeed`
----------------------
This method structures the aggregated feeds into a `ClimateTechHandbookRSSFeed` format, which includes meta information about the developer and an array of `Channel` objects.

`handleRequest`
----------------
This is the main method for handling incoming requests. It sets the Access Control headers and then fetches, parses, and aggregates the feeds before returning them in the response.

How To Use
----------

This function is deployed as a serverless function on Vercel. You can make a GET request to the function's URL to get the aggregated feeds. The function will return a JSON response that you can then parse and display in your application.

Caching
-------

This project uses Vercel's Edge Network for caching. This means that after the first request, the RSS feeds will be cached for up to 24 hours (86400 seconds). This will significantly improve the response times for any subsequent requests.

Acknowledgments
---------------

This project is currently in active development. Features may be added or changed, and there may be occasional downtime or bugs. Your patience and understanding is appreciated. Contributions are welcome!
