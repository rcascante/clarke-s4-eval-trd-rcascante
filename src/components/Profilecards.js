import React from 'react';


class Profilecards extends React.Component {
  render() {
    const life = this.props.card.alive ? "☺" : "☹" ;

    const stylePhoto = {
    backgroundImage: `url('${this.props.card.image}')`
    };

    const styleHouse = {
      backgroundImage: `url('/images/${this.props.card.house}.png')`
    }



    return(
     <div className="card-container">
      <p className="name">{this.props.card.name.toUpperCase()}</p>
      <div className="photo" style={stylePhoto}></div>
      <div className="house" style={styleHouse}></div>
      <div className="life-indicator">{life}</div>
     </div>

  );}



}


export default Profilecards;
