import './PropertyItem.css'
// import { useState } from 'react'
// import useIsMounted from '../../utils/useIsMounted'

const PropertyItem = ({
    title,
    category,
    photo_main,
    url
}) => {
    // const isMounted = useIsMounted()


  return (
    <div className="property">    
      <a href={url}>
        <img className='' 
            src={photo_main}
            // src=""
            alt=''  
            title='Comprar' 
        />
      </a>
      <div className='span-3 img-details'>
          <div className='top'>
              <h3>{title}</h3>
              <h2 className='bold blue'>{category}</h2>
          </div>
      </div>
      <div className='span-2 right-img-details'>
          <button className='btn' title='Comprar'><a href={url}>Comprar</a></button>
      </div>
    </div>  
  )
}

export default PropertyItem