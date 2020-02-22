import React ,{Component} from 'react'
import './Card.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state={
            p:[]
        }
    }
    render(){
        return(
            <div className='cardcontainer'>
                <img src="https://www.kamabistro.com/wp-content/uploads/2017/08/food-panorama-samosa-tacos-yellow-dal_resized.jpg"></img>
                <div className='innercard'>
                    <div style={{color:'#54b226',fontSize:'15px',margin:'16px'}}>UP TO 75% OFF</div>
                    <h4 style={{color:'#333333',marginLeft:'16px'}}> Grocery and Staples</h4>
                    <div style={{color:'#888888',fontSize:'18px',margin:'16px'}}>ASvtuhughxbfesxzkvgitdjv</div>
                </div>
                
            </div>
        );
    }
}
export default Card