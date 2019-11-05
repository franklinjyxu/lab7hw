import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Last Leaf on Earth',
    image: 'http://bit.ly/324YgJW',
    description: "It's the most precious of its kind and you need some fresh greeness in your jouney",
    price: 99999999
  },
  {
    item: 'Cattieeeee',
    image: 'http://bit.ly/34l1k66',
    description: 'You cannot live without your fav babe',
    price: 200
  },
  {
    item: 'Magic IG Filter Camera',
    image: "http://bit.ly/2NcGDDV",
    description: "You, as a earth star IG influencer cannot live without but sorry now you have to take pics by yourself cuz you cannot bring your cameraman to Mars",
    price: 5000
  },
  {
    item: 'A Fresh Burger Makes Your Day',
    image: "http://bit.ly/2PFcyhE",
    description: "It's bad for your health, but you are addicted to this delicious kimchi burger so anyways",
    price: 8
  },
  {
    item: 'Trick or Treat',
    image: "http://bit.ly/34oXZD8",
    description: "There's a Holloween Party on Mars you don't wanna be lame on mask game",
    price: 25
  },
  {
    item: 'Crystal Earth Ball',
    image: "http://bit.ly/32klwnj",
    description: "A legendary royal gift from UK that brings luck",
    price: 85787633334
  },
]


function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
     <SearchForm />
     <ShoppingCart />
    </div>
  );
}

function ShoppingCart() {
  return(
    <div className="cart">
      {shoppingCartItems.map(Product)} 
    </div>
  );
}



function Product(imageGood) {
  return (
    <div className="overallitem">
    <div className="product">
      <img src={imageGood.image} width="200" alt="hhh"/>
    </div>
    <div className="productname">
      <h1>{imageGood.item}</h1>
    </div>
    <div className="descript">
      <p>{imageGood.description}</p>
    </div>
    <div className="price">
      <p>{"$"+imageGood.price}</p>
    </div>
    </div>
  );
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
