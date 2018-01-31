import React, { Component } from 'react';
import Profilecards from './components/Profilecards';
import './styles/main.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cards: [],
      searchvalue:"",
   }
   this.handelChange = this.handelChange.bind(this);
 }

  handelChange(event) {
   this.setState({
     searchvalue: event.target.value
   }) ;
 }

 componentDidMount () {
  const url = "http://hp-api.herokuapp.com/api/characters";
   fetch(url)
    .then(response => response.json())
    .then ((data) => {
      this.setState ({
          cards: data
        }
      )
    })
 }

  render() {
    const filtervalue = this.state.cards.filter((card) => {
      return card.name.toLowerCase().includes(this.state.searchvalue.toLowerCase())
    });


    return (
      <div className="App">
      <div className="main-logo"></div>
      <input type="text" name="" className="searchbar" value={this.searchvalue} onChange={this.handelChange}/>
       <div className="cards-container">
       {filtervalue.map(function(card) {
       return <Profilecards card={card}/>
       })}
       </div>
      </div>
    );
  }
}

export default App;
