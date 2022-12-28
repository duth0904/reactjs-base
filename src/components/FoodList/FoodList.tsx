import React from "react";

import FoodItem from "../FoodItem/FoodItem";
import './FoodList.scss'

const FoodList = (props: any) => {
	return (
		<div className="food-list">
			{
        props.foods.map((item : any) => (
          <FoodItem key={item.id} foodItem={item} />
        ))
      }
		</div>
	)
}

export default FoodList
