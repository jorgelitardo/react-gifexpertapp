import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function Gifgrid({ category }) {
    
    //const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );
       

    //getGifs();

    return (
        <>
        <h3> { category } </h3>

        { loading && <p>loading</p> }

        { <div className='card-grid'>
                {
                
                images.map ( img => (
                    
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                        
                        />
                
                    ))
                
                }
        </div> }
        </>
        
  )
}