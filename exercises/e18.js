/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from './e17.js';

export function getGreatestDiscoveryYear(data) {
  const discoveryYears = data.asteroids.map(asteroid => asteroid.discoveryYear);

  const yearCounts = discoveryYears.reduce((acc, year) => {
      acc[year] = (acc[year] || 0) + 1;
      return acc;
  }, {});

  const yearCountArray = Object.entries(yearCounts).map(([year, count]) => ({
      year: Number(year),
      count
  }));

  const mostDiscoveredYear = maxBy(yearCountArray, entry => entry.count);

  return mostDiscoveredYear.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
