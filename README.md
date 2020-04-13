# data-structures-and-algorithms
Space for Code Fellows daily code challenges

Here I will focus on compiling and working on the daily code challenges that will be assigned in class each day. 

This will allow me to sharpen my code skills and serve as a good warm up before the day's work.

Update for 401:

## Table of Contents

# Reverse an Array

For this challenge, we were asked to reverse an array out of place. 

## Challenge

We are not to use any built-in methods. Any methods we write should be clean, reusable, abstract component parts. 

## Approach & Efficiency

In order to reverse the array, I will want to find the last item of the input array and put that into the new array. I can use a for loop to do this.

## Solution

![reverseArray](/code-challenges/assets/reverseArray.jpg)

# Shift an Array

For this challenge, we were asked to add a value to the middle of a given array. 

## Challenge

We are not to use any built-in methods. Any methods we write should be clean, reusable, abstract component parts. (Failed that part)

## Approach & Efficiency

I tried to write a for loop that copied the input array into a new array, but would stop at the middle index to add the given number. But I couldn't get the thing to work and it was getting late. So I used a shortcut and just used splice() because I didn't have the time to get the assignment in given the parameters of not using a method.

## Solution

![arrayShift](/code-challenges/assets/arrayShift.png)

# Binary Search

For this challenge, we were asked to write a function which takes in two parameters: a sorted array and a key. Then, if the key exists in the array, return the index of that spot in the array. If the key does not exist in the array, return -1. 

## Challenge

We are not to use any built-in methods. Any methods we write should be clean, reusable, abstract component parts.

## Approach & Efficiency

I decided to write a for loop that would check the entire array for the key. If found, the function will return the index of the key and also increment a tracking variable. Outside of the for loop, if the tracking variable has not been touched, then we can assume the key did not exist in the array. In that case, return a -1. 

## Solution

![binarySearch](/code-challenges/assets/binarySearch.png)

# Linked List Merge

Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. 

## Challenge

We are not to use any built-in methods. Any methods we write should be clean, reusable, abstract component parts.

## Approach & Efficiency

Wrote a while loop that checked for each element. Then appended the first section of each element within the loop. The next iteration of the loop moved to the next element in each list.

## Solution

![binarySearch](/code-challenges/assets/linkedListmerge.png)


