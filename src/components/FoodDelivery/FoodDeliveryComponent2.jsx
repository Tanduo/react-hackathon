import React  from 'react';
import FoodDeliveryComponent3 from './FoodDeliveryComponent3';


export default function FoodDeliveryComponent2() {

  return (
  <React.Fragment>
    Test Component 2
    {/* This shows how to call a component from within a component */}
    <FoodDeliveryComponent3></FoodDeliveryComponent3>
  </React.Fragment>
  );
}