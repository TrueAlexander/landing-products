import dataProd from '../dataProd.json'
import PropertyItem from '../components/propertyItem/PropertyItem'
import 'animate.css'

const filterRender = (category) => {
  
  console.log(category)
  // filtering dataProp

  
  const filteredArr = category === "Todos" ? dataProd : dataProd.filter((item) => {
    if (item.category === category) return item
  })

  //rendering results
  return filteredArr.length > 0 ? filteredArr.map((item => {
    return <PropertyItem 
              key={item.id}
              title={item.title}
              category={item.category}
              featured={item.featured}
              photo_main={item.photo_main}
              url={item.url}
            />
  })) : <div className="animate__animated animate__fadeIn animate__slow">
          <h2 className='property-note'>Desculpe!   Atualmente não temos produtos disponíveis para esta solicitação!</h2>
          <h2 className='property-note blue'>Por favor, faça uma nova busca com outros requisitos!</h2>
        </div>
}

export default filterRender