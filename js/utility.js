/**
 * Function that calculate the price of the ticket
 * @param {bigint} numKm Number of km to be traveled
 * @param {bigint} age Age of the passenger (to define the discount)
 * @returns {decimal} Price as decimal (2 places)
 */
function CalculatePrice(numKm, age){
    //Calculate basic price
    let price = numKm * priceForKilometer;
    //Apply the discount (if necessary)
    if(age<ageJunior)
        price = price - (price*discountJunior)/100;
    else if(age>ageSenior)
        price = price - (price*discountSenior)/100;
    //Set 2 decimal places
    price = price.toFixed(2);
    return price;
  }