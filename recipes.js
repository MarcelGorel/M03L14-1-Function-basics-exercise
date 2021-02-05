/*
Function basics: exercise
In this exercise we're going to write our first functions. Introduction
*/
//We're going to write a function that makes pizza (sadly, we're not going to actually make pizza).

//1.create a new JavaScript file
//recipes.js
//2.first just check if you can run it with node
//node recipes.js
//3.to take a step in the pizza-making process print the step to the console
//console.log('Make pizza');
//4.think of a good clear name for your function first
//Make Pizza
//5.think of at least three steps you need in your function
//-Roll out pizza dough
//-Put tomato sauce and cheese on dough
//-Put pizza in the oven
//6.write the function
const makePizza = function () {
    console.log('Roll out pizza dough');
    console.log('Put tomato sauce');
    console.log('Put pizza in the oven');
}
//7.run the code, are you getting the result you expect? Why (not)?
//node recipes.js
//console.log('Yes i get the write results, because i told the program what to do');
//8.now add code to call your function
//makePizza();
//9.now call your function three times
//makePizza();
//makePizza();
//makePizza();
/*Now we have a single function, but let's make another function! We also want to make sushi.
*/
//1.continue in the same JavaScript file
//2.add a function that makes sushi, use a good name
//console.log('Make Sushi')
const makeSushi = function () {
    console.log('Boil rice');
    console.log('Put rice and fish on nori leaf');
    console.log('Roll nori leaf');
}
//3.call this function, check that it works
//makeSushi();
/*So now, let's for a minute pretend that we work in a restaurant and we get an order for three meals of sushi and two pizzas.
*/
//1.change your code so that the output of your program is the steps for making sushi, three times and pizza two times
makeSushi();
makeSushi();
makeSushi();
makePizza();
makePizza();