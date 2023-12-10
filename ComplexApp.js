/*
 * Filename: ComplexApp.js
 * Description: A complex and elaborate JavaScript application
 */

// Import necessary libraries
const axios = require('axios');
const moment = require('moment');

// Global variables
let user;
let items = [];

// Helper functions
function getUserData(userId) {
  return axios.get(`https://api.example.com/users/${userId}`)
    .then(response => {
      user = response.data;
      console.log(`Fetched user data for user ${userId}`);
    })
    .catch(error => {
      console.error(`Error fetching user data: ${error}`);
    });
}

function fetchItems() {
  return axios.get('https://api.example.com/items')
    .then(response => {
      items = response.data;
      console.log('Fetched items');
    })
    .catch(error => {
      console.error(`Error fetching items: ${error}`);
    });
}

function calculateTotalPrice() {
  let totalPrice = 0;
  items.forEach(item => {
    totalPrice += item.price;
  });
  return totalPrice;
}

function displayUserAndItems() {
  console.log(`User: ${user.name}`);
  console.log('Items:');
  items.forEach(item => {
    console.log(`- ${item.name}: $${item.price}`);
  });
}

async function main() {
  try {
    await getUserData(123);
    await fetchItems();
    
    console.log('-------------------');
    displayUserAndItems();
    
    const totalPrice = calculateTotalPrice();
    console.log(`Total Price: $${totalPrice}`);

    const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(`Current Date: ${currentDate}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

// Entry point
main().then(() => {
  console.log('Application executed successfully.');
}).catch(error => {
  console.error(`Application failed to execute: ${error}`);
});