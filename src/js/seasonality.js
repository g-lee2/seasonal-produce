export function determineUserRegion(userState) {
  let region;
  switch (userState.toLowerCase()) {
    case 'washington':
    case 'oregon':
    case 'idaho':
    case 'wyoming':
    case 'montana':
      region = 'northwest';
      break;
    case 'texas':
    case 'nevada':
    case 'arizona':
    case 'colorado':
    case 'california':
    case 'utah':
    case 'new mexico':
    case 'oklahoma':
      region= 'southwest';
      break;
    case 'north dakota':
    case 'south dakota':
    case 'nebraska':
    case 'kansas':
    case 'minnesota':
    case 'iowa':
    case 'indiana':
    case 'michigan':
    case 'wisconsin':
    case 'illinois':
    case 'ohio':
    case 'kentucky':
    case 'missouri':
      region = 'midwest';
      break;
    case 'west virginia':
    case 'virginia':
    case 'north carolina':
    case 'south carolina':
    case 'tennessee':
    case 'mississippi':
    case 'alabama':
    case 'georgia':
    case 'florida':
    case 'arkansas':
      region= 'south';
      break;
    case 'maine':
    case 'new hampshire':
    case 'vermont':
    case 'new york':
    case 'massachusetts':
    case 'connecticut':
    case 'rhode island':
    case 'new jersey':
    case 'pennyslvania':
    case 'maryland':
    case 'delaware':
      region = 'northeast';
      break;
    case 'error':
    region = 'Your location could not be determined, no region available';
  }
  return region;
}

//NorthWest Fall Season
// Apple
// Grapes
// Onions
// Cabbage
// Kale
// Lettuce
// Cantaloupe
// Radish
// Tomatoes
// Chickpeas
// Orca Beans
// 
// 
//NorthWest Winter Season
// Cabbage
// Kale
// Lettuce
// Chickpeas

//NorthWest Spring Season
// Asparagus
// Cabbage
// Kale
// Lettuce
// Radish
// Strawberries
// 
//NorthWest Summer Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apple
// Blueberry
// Cantaloupes
// Cherries
// Grapes
// Onions
// Radish
// Tomatoes
// Strawberries
// Watermelons
// Adzuki Beans
// Orca Beans

//SouthWest Fall Season
// Broccoli
// Kale
// Lettuce
// Apple
// Green beans
// Radish
// Tomatoes
// Nopal
// Chickpeas
// Peanuts
// Lima Beans
//SouthWest Winter Season
// Broccoli
// Cabbage
// Kale 
// Lettuce
// Radish
// Strawberries
// Oranges
// Chickpeas
//SouthWest Spring Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Onions
// Radish
// Tomatoes
// Nectarines
// Strawberries
// Oranges
// Peas 
// Black-eyed Peas
//SouthWest Summer Season
// Apples
// Blueberry
// Cantaloupe
// Grape
// Green Beans
// Onion
// Tomatoes
// Nectarines
// Watermelons
// Nopal
// Black-eyed Peas
// Lima Beans


//MidWest Fall Season
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apples
// Onion
// Radish
// Tomato
// Chickpeas
// Soybeans
// Navy Beans
//MidWest Winter Season
// Chickpeas
// 
// 
// 
//MidWest Spring Season
// Asparagus
// Lettuce
// Radish
// Black-eyed Peas
// 
// 
// 
//MidWest Summer Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apple
// Blueberry
// Cantaloupe
// Cherry
// Grape
// Onion
// Radish
// Tomatoes
// Strawberries
// Watermelons
// Black-eyed Peas
// Adzuki Beans
// Navy Beans

//South Fall Season
// Cabbage
// Kale
// Lettuce
// Apple
// Grape
// Tomato
// Peanuts
//South Winter Season
// Apple
// Kale
// Lettuce
// Oranges
//
//South Spring Season
// Asparagus
// Broccoli
// Cabbage
// Lettuce
// Blueberry
// Green Beans
// Tomato
// Strawberries
// Oranges
// Black-Eyed Peas
//South Summer Season
// Asparagus
// Apple
// Blueberry
// Cantaloupe
// Grape
// Green Beans
// Tomato
// Watermelon
// Orange
// Peas
// 

//Northeast Fall Season
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apple
// Grape
// Onion
// Radish
// 
//Northeast Winter Season
// 
// 
// 
// 
//Northeast Spring Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Cherry 
// Radish
// Strawberry
// Peas
// Black-eyed Peas
//Northeast Summer Season
// Asparagus
// Broccoli
// Cabbage
// Kale
// Lettuce
// Apple
// Blueberry
// Cantaloupe
// Cherry
// Grape
// Green Beans
// Beans
// Onion
// Radish
// Tomato
// Nectarines
// Strawberry
// Watermelon
// Peas
// Black-eyed Peas