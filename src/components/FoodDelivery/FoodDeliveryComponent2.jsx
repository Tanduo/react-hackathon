// You can export something out of a file in two ways
// 1:  export default React; There can only be one "default" export perpage
// 2:  export Fragment;  Yoy can export as many as you want like this
// 1A: if it is default you import like;  import React from 'xyz'
// 1B: if it is not default you need braces; import { Fragment } from 'xyz'
import React, { Fragment } from "react";
import FoodDeliveryComponent3 from "./FoodDeliveryComponent3";

export default function FoodDeliveryComponent2() {
  return (
    <Fragment>
      Test Component 2
      {/* This shows how to call a component from within a component */}
      <FoodDeliveryComponent3></FoodDeliveryComponent3>
    </Fragment>
  );
}
