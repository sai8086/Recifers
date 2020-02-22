import React ,{Component} from 'react';
import Slider from '../Slider/Slider';
import Item from '../Item/Item';
import { NavLink } from 'react-router-dom'; 
import Card from '../Card/Card';

class Groceries extends Component{
    render(){
        return(
            <div style={{display:'flex',flexDirection:'row',width:'95%',justifyContent:'space-around',padding:'50px 90px 20px 90px'}}>
                <Card image='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/high-calorie-fruits-1296x728-feature.jpg?w=1155&h=1528' name='Banana' cost='30/Dozen'/>
                <Card image='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/high-calorie-fruits-1296x728-feature.jpg?w=1155&h=1528' name='Banana' cost='30/Dozen'/>
                <Card image='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/high-calorie-fruits-1296x728-feature.jpg?w=1155&h=1528' name='Banana' cost='30/Dozen'/>

            </div>
        )
    }
}
export default Groceries;