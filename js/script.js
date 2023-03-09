/*
---------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------   Main Goal   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
Write a program that asks the user:
- The number of kilometers to travel
- Age of the passenger
Based on this information, he will have to calculate the total price of the travel ticket, according to the following rules:
- the ticket price is defined on the basis of km (€0.21 per km)
- a 20% discount must be applied for minors
- a 40% discount should be applied for over 65s.
---------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------   Milestones   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
- We start by implementing the program without any aesthetics: using only two inputs and one button (not stylized), we
  implement the specifications written above. The final response (or output) will also be written in the console.
- Only once milestone 1 is complete and functional will we then create two input boxes and at least one button to send 
  the data to the page, where the user can enter the data and then view the final calculation with the price. The data 
  recap and the final price output will then be printed on the page (the price must be formatted with a maximum of two 
  decimals, to indicate the cents on the price). This will require a little research.
---------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------   Program steps   ----------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
- Define 2 inputts and a button
- Get number of kilometers from first input
- Get age of passenger from second input
- Define basic function and add this function as listener of the button
- Define basic price calculated as num of km * 0.21 in the function
- Nested if to choose the discount on the price (if the age allows it) in the function
- Transform the calculated price into human format in the function
- Save the variables values into html elements in the index
---------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------   Bonus   --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
 - None
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/

//Define constants
/** Price for each kilometer to be traveled */
const priceForKilometer = 0.21;
/** Max age (+1) to apply the junior discount */
const ageJunior = 18;
/** Percentage of the junior discount */
const discountJunior = 20;
/** Min age (-1) to apply the seniot discount */
const ageSenior = 65;
/** Percentage of the senior discount */
const discountSenior = 40;

//Gets object to use in the program
const ticketInfoContainer = document.getElementById('ticketInfoContainer');
const ticket = document.getElementById('ticket');
const inputNameOfPassenger = ticketInfoContainer.querySelector('input[name="inputName"]');
const inputSurnameOfPassenger = ticketInfoContainer.querySelector('input[name="inputSurname"]');
const inputAgeOfPassenger = ticketInfoContainer.querySelector('input[name="inputAge"]');
const inputNumberOfKilometres = ticketInfoContainer.querySelector('input[name="inputKilometres"]');
const buttonGenerate = ticketInfoContainer.querySelector('#generate');

//Add GenerateTicket function as click event listener function for the generate button
buttonGenerate.addEventListener('click', ClickGenerateTicket);

function ClickGenerateTicket(){
    //Gets name and surname of passenger
    let nameOfPassenger = inputNameOfPassenger.value;
    let surnameOfPassenger = inputSurnameOfPassenger.value;
    //Gets values to calculate the price
    let numberOfKilometres = inputNumberOfKilometres.value;
    let ageOfPassenger = inputAgeOfPassenger.value;
    //calculate the price
    let price = CalculatePrice(numberOfKilometres, ageOfPassenger);
    //Show the ticket and hide the ticket info container
    ShowTicket(nameOfPassenger,surnameOfPassenger,numberOfKilometres,ageOfPassenger,price);
}