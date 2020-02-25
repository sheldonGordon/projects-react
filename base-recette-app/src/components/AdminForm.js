import React from 'react'

//le id: key renomme id en key
const AdminForm = ({id: key, majRecette, recette, supprimerRecette}) => {
    const handleChange = (event, key) => {
        const { name, value } = event.target
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className='card'>
                <form className='admin-form'>
                    <input 
                        value={recette.nom} 
                        onChange={e => handleChange(e, key)} 
                        name='nom' 
                        type='text' 
                        placeholder='Nom de la recette'/>    
                    <input 
                        value={recette.image} 
                        onChange={e => handleChange(e, key)} 
                        name='image' 
                        type='text' 
                        placeholder={'Nom de l\'image'}/>   
                    <textarea 
                        value={recette.ingredients} 
                        onChange={e => handleChange(e, key)} 
                        name='ingredients' 
                        rows='3' 
                        placeholder='Liste des ingrédients'></textarea> 
                    <textarea 
                        value={recette.instructions} 
                        onChange={e => handleChange(e, key)} 
                        name='instructions' 
                        rows='15' 
                        placeholder='liste des instructions'></textarea> 
                </form> 
                <button onClick={() => supprimerRecette(key)}>Supprimer</button>
            </div>
    )
}

export default AdminForm