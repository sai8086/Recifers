import React ,{Component} from 'react';
import Slider from '../Slider/Slider';
import Item from '../Item/Item';
import { NavLink } from 'react-router-dom'; 
import Card from '../Card/Card';

class Vegetables extends Component{
    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>

            <div style={{display:'flex',flexDirection:'row',width:'95%',justifyContent:'space-around',padding:'50px 90px 20px 90px'}}>
                <Card image='https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/how-to-store-onions-1296x728-feature.jpg?w=1155&h=1528' name='Onion' cost='70/kg'/>
                <Card image='https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/4w/46/p04w46sp.jpg' name='Tomato' cost='60/kg'/>
                <Card image='https://cdn.potatopro.com/cdn/farfuture/dQR32zwJIjZBmfUuqVQVvUwrqhWLlTaaHAiI3ZW2QXQ/mtime:1557501673/sites/default/files/styles/amp_top_image_1200/public/field/image/cultivate-michigan-combitating-potato-varieties-1200.jpg?itok=YYxxk7ey' name='Potato' cost='20/kg'/>
            </div>
            <div style={{display:'flex',flexDirection:'row',width:'95%',justifyContent:'space-around',padding:'50px 90px 20px 90px'}}>
                <Card image='https://cdn.cdnparenting.com/articles/2018/04/278443556-H.jpg' name='Ladiesfinger' cost='35/kg'/>
                <Card image='https://pradeshjagran.com/wp-content/uploads/2020/01/567358-pea.jpg' name='Green Peas' cost='25/kg'/>         
                <Card image='https://media.mnn.com/assets/images/2018/09/colored_bell_peppers.jpg.653x0_q80_crop-smart.jpg' name='Bell Peppers' cost='50/kg'/>   
                </div> 
           
            </div>
        )
    }
}
export default Vegetables;