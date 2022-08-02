# Project Name
Server Calculator

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md
-[x] npm init --yes to bring in the package.json and get the project going
-[x] update the "main": to server/server.js and add "start" script
-[x] npm install express
-[X] setup express app 
-[x] setup port to listen on
-[x] create an html file with 2 input fields
-[x] add buttons for math operations and clear
-[x] added click funtions for all math operations
-[x] created ajax on client side
-[x] created post app on server
-[x] added all math operations to post on server
-[x] append answers to equations to DOM
-[x] created a get app on server
-[x] append equations to the DOM
-[x] add click function to clear input fields



## Description

Your project description goes here. What problem did you solve? How did you solve it?

The task was to create a calculator that took in two numbers and a math operation as inputs, organize the inputs into an equation, solve the equation, and display the equations and answer on the DOM. 

I created an HTML document that had two input fields and four mathmatical operation buttons that also were inputs.  An 'equals' button was created to send the inputs to the server via POST.  I also created a 'clear' button to empty the input fields. When the equals button was clicked, it bundled the input data into an object and sent that object to the server via a POST request. Once the data was on the server, I set up if else statments to do the appropriate math calculation based on the selected math operator.  Then I used a GET request to append the solution to the DOM along with the eqation.  I wrote a function that set the input values to an empty string once the clear button was clicked.



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
