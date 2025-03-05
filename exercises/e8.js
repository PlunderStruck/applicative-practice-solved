import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  
  const planetNames = data.planets.filter(function(planet) {
    if (!planet.moons) return false;

    return planet.moons.filter(function(moon) {
      return moon === moonName;
    }).length > 0;
  }).map(function(planet) {
    return planet.name;
  });

  return planetNames[0];

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
