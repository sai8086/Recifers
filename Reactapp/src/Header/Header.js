import React,{Component} from 'react';
import './Header.css'
class Header extends Component{
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
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
        this.setState({playerName: json[0]})
        })
    }
  
  
     
    render(){
        return(
           <div className="headercontainer">
               	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
               <div style={{margin:'2%'}}>
                   Categories
               </div>
              <form style={{margin:'2%',width:'350%'}} onSubmit={this.handleSubmit} action="http://127.0.0.1:5000/result" method="GET">
                  <input style={{width:'95%'}}type="text" name="player_id"/>
                  <button type="submit" onChange={this.handleChange} value={this.state.value} style={{backgroundColor:'transparent',border:'none'}}></button>
              </form>
              
              <div style={{margin:'2%'}}>
                <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                <span className='items-text'>1</span>
              </div>

           </div>
        )
    }
}
export default Header