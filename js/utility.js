/**
 * Function that calculate the price of the ticket
 * @param {bigint} numKm Number of km to be traveled
 * @param {bigint} age Age of the passenger (to define the discount)
 * @returns {decimal} Price as decimal (2 places)
 */
function CalculatePrice(numKm, age){
    //Calculate basic price
    let price = numKm * priceForKilometer;
    //Set 2 decimal places to the price obtained after the apply of discount
    price = ApplyDiscountOnPrice(price, age).toFixed(2);
    return price;
}


function ApplyDiscountOnPrice(price, age){
    if(age<ageJunior)//If age is junior
        price = price - (price*discountJunior)/100;
    else if(age>ageSenior)//if age is senior
        price = price - (price*discountSenior)/100;
    return price;
}