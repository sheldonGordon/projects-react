import React, { Component } from 'react'
import './App.css'
import { useParams } from "react-router-dom";

import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message => {
    const messages = { ...this.state.messages}
    messages[`message-${Date.now}`] = message
    this.setState({messages})
  }
  render () {
    return (
      <div className='box'>
        <div className='messages'>
          <Message />
          <Message />
          <Message />
        </div>
        <Formulaire addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
