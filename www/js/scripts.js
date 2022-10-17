var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')




/**
* By default:
* - Plant starts health
* - Dry out over time
* - Deplete in nutrients
*/

/**
 * Interactions:
 * - Water it, replenish the plant
 * - Feed it, nutrient for the plant
 * - Trim it 
 */

/**
 * Conditional Cases:
 * - If too much water, plant near death
 * - If too much fert., plant near death
 * - IF the plant falls into a near death state, heal it by trimming it
 */


console.log()
