import React from 'react';


class Profilecards extends React.Component {
  render() {
    const life = this.props.card.alive ? "Alive" : "Dead";
    const style = {
    backgroundImage: `url('${this.props.card.image}')`,
    };

    return(
     <div className="card-container">
      <p className="name">{this.props.card.name}</p>
      <div className="photo" style={style}></div>
      <div className="house">{this.props.card.house}</div>
      <div className="life-indicator">{life}</div>
     </div>

  );}



}


export default Profilecards;
