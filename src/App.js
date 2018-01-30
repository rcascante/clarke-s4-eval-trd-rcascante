import React, { Component } from 'react';
import Profilecards from './components/Profilecards';
import './styles/profilecards.css';

class App extends Component {
    constructor(props){
     super(props);
     this.state = {
       cards: []
   };
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
    return (
      <div className="App">
       <div className="cards-container">
       {this.state.cards.map(function(card) { //Do not understand the map funcion
       return <Profilecards card={card} />
       })}
       </div>

      </div>
    );
  }
}

export default App;
