import React ,{Component} from 'react';
import Slider from '../Slider/Slider';
import Item from '../Item/Item';
import { NavLink } from 'react-router-dom'; 
import Card from '../Card/Card';

class Fruits extends Component{
    
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
            <div style={{display:'flex',flexDirection:'row',width:'95%',justifyContent:'space-around',padding:'50px 90px 20px 90px'}}>
                <Card image='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/high-calorie-fruits-1296x728-feature.jpg?w=1155&h=1528' name='Banana' cost='30/Dozen'/>
                <Card image='https://i.ndtvimg.com/i/2017-10/apple-benefits_620x350_51507721694.jpg' name='Apple' cost='100/Dozen'/>
                <Card image='https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/6d627a475abe4e939db8dcf99496061c.jpg' name='Pomegranate' cost='90/Dozen'/>
                </div> 
            <div style={{display:'flex',flexDirection:'row',width:'95%',justifyContent:'space-around',padding:'50px 90px 20px 90px'}}>
                <Card image='https://i0.wp.com/www.globalvillagespace.com/wp-content/uploads/2019/09/Household-treasures-Papayas-antioxidants-and-nourishments-640x336.png' name='Papaya' cost='60/Dozen'/>
                <Card image='https://i.ndtvimg.com/i/2017-02/grapes_620x350_81488283539.jpg' name='Grapes' cost='90/Dozen'/>         
                <Card image='https://whalebonemag.com/wp-content/uploads/2016/09/watermelons.jpg' name='Watermelon' cost='100/Dozen'/>   
                </div> 
            </div>    
        )
    }
}
export default Fruits;