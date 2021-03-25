import React, { useState, useEffect } from 'react';
import colorsData from '../../data/colors';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';


export default function FoodDeliveryHome() {
  //Create a colors variable in state and set it to the data coming in from our colors data file.
  const [colors, setColors] = useState(colorsData);

  //Set the columns for our data grid, id, and color are the two object variables from our colors data objects.
  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'color', headerName: 'Colors', width: 200 }
  ];

  const addColor = () => {
    //This function will add a hard coded color to the array of objects, 
    //it does not actually add data to the data set.

    //We are using a spread operator here to copy the array.  See the article below.
    //https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab
    //This is to set a new variable that looks slightly different than our colors object.  
    //This is so that react knows it is as different object.
    const newColorsData = [...colors];

    //We will create the new object we are adding to the array.
    const newobject = { "id": 1, "color": "newcolor"};

    //We add the new object we created to the new array
    newColorsData.push(newobject);

    //Now we set the colors object array to the new udpated array,
    //by using setColors from our variable above it will update the sate since the object is different.
    setColors(newColorsData);

    //this is an example of how to log output to the web browser console for troubleshooting.
    console.log(colors);
  };

  //This is rendering the content ont he page.
  return (
  <React.Fragment>
    Test Component 1
    <div style={{ height: 750, width: '100%' }}>
    <Button variant="contained" color="primary" onClick={addColor}>
        Add Color
    </Button>
    {/* The rows and columns are variables from above. */}
    <DataGrid 
        rows={colors} 
        columns={columns} 
      />
    </div>
  </React.Fragment>
  );
}