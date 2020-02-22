import React ,{Component} from 'react'
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import Item from './Item/Item'
import Slider from './Slider/Slider';

class App extends Component
{
constructor(props){
  super(props);
  this.state={
          showfruits:false,
          showgrocery:false,
          showvegetables:false  
        };
  this.it1=this.it1.bind(this);
  this.it2=this.it2.bind(this);
  this.it3=this.it3.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this)
}

handleSubmit(event) {
  console.log("making request")
  fetch('/result')
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(json => {
    console.log=(json)
    })
}


it1=()=>{
  this.setState({
    showfruits:true,
    showgrocery:false,
    showvegetables:false 
  }, () => {
    console.log('Fruits')
  })
}

it2=()=>{
  this.setState({
    showgrocery:true,
    showfruits:false,
    showvegetables:false 
  }, () => {
    console.log('Groceries')
  })
}

it3=()=>{
  this.setState({
    showvegetables:true,
    showfruits:false,
    showgrocery:false,
  }, () => {
    console.log('Vegetables')
  })
}
render(){
  return(
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}> 
        < Header /> 
        <Slider/>
        <div className='cardalign'>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='itemsalign'>
            <a href='fruits.html' style={{backgroundColor:'transparent',border:'none'}} ><Item image='https://www.snopes.com/tachyon/2018/04/fruits_feature.jpg?resize=865,452' type='Fruits'/></a>
            <a style={{backgroundColor:'transparent',border:'none'}} onClick={this.it2}><Item image='https://image.shutterstock.com/image-photo/full-paper-bag-different-health-260nw-572226073.jpg' type='Groceries'/></a>
            <a style={{backgroundColor:'transparent',border:'none'}} onClick={this.it3}><Item image='https://www.thespruceeats.com/thmb/nn_bwtTNkqXE7qIDyPyIZoHjg1E=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/freshvegetablesAlexRaths-4c1ea186a88e4fd7b95283eee614600c.jpg' type='Vegetables'/></a>
        </div>
    </div>
  );
  }
}
export default App;
