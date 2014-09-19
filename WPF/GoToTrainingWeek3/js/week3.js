/**
 * Created by MAC on 9/18/14.
 */
/*
Mackenzie Lucas
Go To Training Week #3
9-17-2014
Section 01
 */

//alert("Testing 1, 2, 3!");

// Code a check to see how many pears are in a fruit bowl

// Create our "fruit bowl"
//Array - hold multiple variables under one name - variable of variables

var bowlofFruit = ["apple", "banana", "pear", "peach", "pear"];

console.log(bowlofFruit);

//How long is this array?
//Array Length
//Dot Syntax - "use a period"

console.log(bowlofFruit.length);

//How can I get the text of "banana"
console.log(bowlofFruit[1]);

//How do we count the number of pears inside of the whole array

//Create a variable to hold the # of pears
var totalNumPears = 0;

//Test each fruit and see if it is a pear
//If it is, lets add it to a total number of pears
//If Statement - Conditional

if(bowlofFruit[0]==="pear" ){
    //this code will run if the condition is true
    //then add 1 to our total number of pears
    totalNumPears++;

}

//Test all of the fruits in the bowl

if(bowlofFruit[1]==="pear"){
    totalNumPears++;

}

if(bowlofFruit[2]==="pear"){
    totalNumPears++;

}

if(bowlofFruit[3]==="pear"){
    totalNumPears++;

}

if(bowlofFruit[4]==="pear"){
    totalNumPears++;

}

console.log(totalNumPears+" pears in our bowl");
