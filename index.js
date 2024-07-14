// Code your solution here
// Function 1: findMatching
function findMatching(drivers, query) {
    return drivers.filter(driver => 
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  // Function 3: matchName
  function matchName(drivers, name) {
    return drivers.filter(driver => 
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
// Test data
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const driverObjects = [
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
];

// Test findMatching
console.log(findMatching(drivers, 'Bobby'));
console.log(findMatching(drivers, 'Sammy'));
console.log(findMatching(drivers, 'bobby'));

// Test fuzzyMatch
console.log(fuzzyMatch(drivers, 'Sa'));
console.log(fuzzyMatch(drivers, 'Bo'));

// Test matchName
console.log(matchName(driverObjects, 'Bobby'));
console.log(matchName(driverObjects, 'Sammy'));
console.log(matchName(driverObjects, 'bobby'));