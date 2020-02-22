import React ,{Component} from 'react';
import Slider from '../Slider/Slider';
import Item from '../Item/Item';
import { NavLink } from 'react-router-dom'; 

class Home extends Component{
    render(){
        return(
            <div>
                <Slider/>
              <div className='itemsalign'>
                <NavLink style={{textDecoration:'none'}}to="/Fruits"><a href='fruits.html' style={{backgroundColor:'transparent',border:'none'}} ><Item image='https://www.snopes.com/tachyon/2018/04/fruits_feature.jpg?resize=865,452' type='Fruits'/></a></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/Groceries"><a style={{backgroundColor:'transparent',border:'none'}} ><Item image='https://image.shutterstock.com/image-photo/full-paper-bag-different-health-260nw-572226073.jpg' type='Groceries'/></a></NavLink>
                <NavLink style={{textDecoration:'none'}}to="/Vegetables"><a style={{backgroundColor:'transparent',border:'none'}} ><Item image='https://www.thespruceeats.com/thmb/nn_bwtTNkqXE7qIDyPyIZoHjg1E=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/freshvegetablesAlexRaths-4c1ea186a88e4fd7b95283eee614600c.jpg' type='Vegetables'/></a></NavLink>
              </div>
            </div>
        )
    }
}
export default Home;
