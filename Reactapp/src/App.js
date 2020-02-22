import React ,{Component} from 'react'
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import Item from './Item/Item'
import Slider from './Slider/Slider';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home/Home';
import Fruits from './Fruits/Fruits';
import Vegetables from './Fruits/Vegetables';
import Groceries from './Fruits/Groceries';


class App extends Component
{
constructor(props){
  super(props);
  
}

render(){
  return(
    <BrowserRouter>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}> 
        <Header /> 
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/Fruits' component={Fruits} />
            <Route path='/Vegetables' component={Vegetables} />
            <Route path='/Groceries' component={Groceries} />


            
        </Switch>
    </div>
    </BrowserRouter>

  );
  }
}
export default App;
