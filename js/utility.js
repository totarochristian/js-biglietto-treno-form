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

/**
 * Function used to apply a discount on a passed price amount
 * @param {bigint} price Amount where apply the discount
 * @param {bigint} age Age of the user (used to decide if apply a discount)
 * @returns {decimal} Price as decimale
 */
function ApplyDiscountOnPrice(price, age){
    if(age<ageJunior)//If age is junior
        price = price - (price*discountJunior)/100;
    else if(age>ageSenior)//if age is senior
        price = price - (price*discountSenior)/100;
    return price;
}

function ShowTicket(name,surname,numKm,age,price){
    //Gets object of the ticket
    const inputTicketName = ticket.querySelector('#ticketName');
    const inputTicketSurname = ticket.querySelector('#ticketSurname');
    const inputTicketAge = ticket.querySelector('#ticketAge');
    const inputTicketNumberOfKilometres = ticket.querySelector('#ticketKilometres');
    const inputTicketPrice = ticket.querySelector('#ticketPrice');

    //Change the value fo the objects
    inputTicketName.value = name;
    inputTicketSurname.value = surname;
    inputTicketAge.value = age;
    inputTicketNumberOfKilometres.value = numKm;
    inputTicketPrice.value = price;

    //Hide the ticket info container and show the ticket
    ticketInfoContainer.classList.toggle('d-none');
    ticket.classList.toggle('d-none');
}

function CheckErrors(name, surname, numKm, age){
    let errors = "";
    if(!name || name.length==0 || name == ' ')
        errors += "Il nome non è corretto<br>";
    if(!surname || surname.length==0 || surname == ' ')
        errors += "Il cognome non è corretto<br>";
    if(!numKm || isNaN(numKm) || parseInt(numKm)<=0)
        errors += "Il numero di chilometri da percorrere non è corretto<br>";
    if(!age || isNaN(age) || parseInt(age)<=0)
        errors += "L'età del passeggero non è corretta<br>";
    return errors;
}

function ShowModal(error){
    modal.querySelector('#errors').innerHTML = error;
    modal.classList.toggle('show');
    modal.style.display = 'block';
    modal.setAttribute("aria-modal",true);
    modal.setAttribute("role","dialog");
}