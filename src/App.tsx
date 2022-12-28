import React from "react";

import Header from "./components/Header/Header";
import FoodList from "./components/FoodList/FoodList";
import { FOOD_DATA } from "./mockData";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <FoodList foods={FOOD_DATA} />
    </CartProvider>
  );
}

export default App;
