import React ,{Component} from 'react'
import './Card.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state={
            image:props.image,
            name:props.name,
            cost:props.cost
        }
        
    }
    render(){

        return(
            <div className='cardcontainer'>
                <img onClick={this.handleClick} src={this.state.image}></img>
                <div className='innercard'>
                    <div style={{color:'#54b226',fontSize:'35px',margin:'16px',marginBottom:'5px'}}>{this.state.name}</div>
                    <div style={{color:'#888888',fontSize:'25px',margin:'16px'}}>{this.state.cost}</div>
                </div>
                
            </div>
        );
    }
}
export default Card