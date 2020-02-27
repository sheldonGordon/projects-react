import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

import withFirebase from './hoc/withFirebase'

import ColorContext from './components/Color'
class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      pseudo: this.props.match.params.pseudo,
      recettes : {}
    }
    console.log('constructor')
  }*/
  state = {
    pseudo: this.props.match.params.pseudo
  }


  render () {
    console.log('render')
    const cards = Object
      .keys(this.props.recettes)
      .map(key => <Card key={key} details={this.props.recettes[key]}></Card>)
    return (
      <ColorContext>
        <div className='box'>
          <Header pseudo={this.state.pseudo} />
          <div className='cards'>
            {cards}
          </div>
          <Admin 
            pseudo={this.state.pseudo}
            recettes={this.props.recettes}
            chargerExemple={this.props.chargerExemple} 
            ajouterRecette={this.props.ajouterRecette} 
            majRecette={this.props.majRecette} 
            supprimerRecette={this.props.supprimerRecette}/>
        </div>
      </ColorContext>
    )
  }
}

const WrappedComponent = withFirebase(App)

export default WrappedComponent
