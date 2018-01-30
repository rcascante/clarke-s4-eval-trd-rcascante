import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
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
      <Searchbar />
       <div className="cards-container">
       {this.state.cards.map(function(card, index) { //Do not understand the map funcion
       return ()
        <Profilecards card={card}/>
       })}
       </div>

      </div>
    );
  }
}

export default App;
