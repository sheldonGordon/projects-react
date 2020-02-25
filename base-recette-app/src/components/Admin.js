import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'

class Admin extends Component {

  render () {    
    const { recettes, chargerExemple, ajouterRecette, majRecette, supprimerRecette } = this.props

    return (
      <div className='card'>
        <AjouterRecette ajouterRecette={ajouterRecette} />
        {
          Object.keys(recettes)
            .map(key => <AdminForm
              key={key}
              id={key}
              majRecette={majRecette}
              recette={recettes[key]} 
              supprimerRecette={supprimerRecette}/>)
        }
        <footer>
          <button onClick={chargerExemple}>Remplir</button>
        </footer>
      </div>
    )
  }
}

export default Admin
