import React ,{Component} from 'react'
import './Item.css'

class Item extends Component{
    constructor(props){
        super(props)
        this.state={
            image:props.image,
            type: props.type
        }
        
    }
    render(){
        return(
            <div className='itemcontainer'>
                <img className='itemimg' src={this.state.image}/>
                <div className="centered">{this.state.type}</div>
            </div>
        );
    }
}
export default Item;