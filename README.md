# Storefront

## Problem Domain

This is the final part part of a 4-Phase build of the storefront application. In this first phase, I setup the basic scaffolding of the application with initial styling and behaviors. I organized the file structure and state management so that the application can be expanded upon in a scalable manner. In phase 2, I implemented the the “Add to Cart” feature, which allows the user to select products and have them persist in their “shopping cart” for later purchase. In phase 3, I connect my application to a live server. In phase 4, I added detail pages for individual products as well as the the cart checkout page.

## User Stories

As a user, I expect to see a list of available product categories in the store so that I can easily browse products

As a user, I want to choose a category and see a list of all available products matching that category

As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

As a user, I want to choose from products in the list and add them to my shopping cart

As a user, I want to see the products that I’ve added to my shopping cart 

As a user, I want to change the quantity of items I intend to purchase in my shopping cart

As a user, I want to be able to remove an item from my shopping cart


As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock

As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it

As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.

As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered

## Features

* Create a visually appealing site using Material UI

* Use a Redux Store to manage the state of categories and items in the store

* Display a list of categories from state

* When the user selects (clicks on) a category …
  Identify that category as selected (change of class/display)
  Show a list of products associated with the category

* Begin with creating your application using create-react-app

* Install Material UI as a dependency

* Write an App component that serves as the container for all sub-components of this application

* Load the category and product list from a remote API on page load.

* Update the product quantity in stock when adding items to (or removing from) the cart

* Continue to use multiple reducers

* Add routing to the application

* Link every product to a page that displays the full product details

* Link the “Cart” summary in the header to a full shopping cart page with shipping/payment forms

* Additionally, we will be swapping out our Redux store and replacing it with a store built using Redux Toolkit

## Deployment Links

[netlify](https://plantopia-storefront.netlify.app/)

[heroku](https://creager-storefront-server.herokuapp.com/)