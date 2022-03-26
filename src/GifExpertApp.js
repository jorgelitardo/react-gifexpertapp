import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import Gifgrid from './components/Gifgrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X', 'Dragon Ball']
    const [categories, setCategories ] = useState(['One Punch'])
    
    /*const handleAdd = () => {
        //agregar elemento al array forma 1
        
        //setCategories( [...categories, 'hunterxhunter'] );

        //agregar elemento al array forma 2
        setCategories( cats => [...cats, 'huntertXhunters'] )
        console.log (categories);
    }*/

    console.log (categories);
    
    return (
  
    <div>
        <h2>GifExpertApp</h2>
        <hr />

        <AddCategory setCategories = { setCategories } />
        
        <ol>
            { 
                categories.map ( category => (
                    
                    <Gifgrid 
                        key = { category }
                        category={ category }/> 

                ))
            }
        </ol>
    </div>
  )
}
