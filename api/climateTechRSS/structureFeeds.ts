import { ClimateTechFeed } from "../../data/interfaces";

export function structureFeeds(rawFeeds: ClimateTechFeed[]) {
  // Your code for structuring feeds goes here.
  // Here's a basic example of what you might do:

  const structuredFeeds = rawFeeds.map((feed) => {
    return {
      // map feed properties to your desired structure
    };
  });

  return structuredFeeds;
}
