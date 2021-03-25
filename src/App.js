import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import './App.css';
import FoodDeliveryComponent1 from './components/FoodDelivery/FoodDeliveryComponent1';
import FoodDeliveryComponent2 from './components/FoodDelivery/FoodDeliveryComponent2';

function App() {
  return (
    // Route the root url so that it displays our list of resources
    // Layout tags are included so that headers and footers are also displayed
    // Routes in react are directing the application to the starting point of a component tree
    <React.Fragment>
      <HashRouter>
        {/* Navigation Bar Component */}
        <NavigationBar></NavigationBar> 
        {/* Sets the Default Path */}
        <Route exact path='/' render={ () => (<FoodDeliveryComponent1 />)}/>
        {/* Sets the pasth for testpage2 */}
        <Route exact path='/testpage2' render={ () => (<FoodDeliveryComponent2 />)}/>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
