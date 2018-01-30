import React from 'react';


class Profilecards extends React.Component {
  render() {
    const style = {
    backgroundImage: `url('${this.props.card.image}')`,
    };

    return(

    <div className="cards-container">
     <div className="card-container">
      <p className="name">{this.props.card.name}</p>
      <div className="photo" style={style}></div>
      <div className="house">{this.props.card.house}</div>
      <div className="life-indicator">{this.props.card.alive}</div>
     </div>
    </div>

  );}



}


export default Profilecards;
