import './ProductContainer.css'

function ProductContainer(props) {
  return (

    <section className="products__section">
      <h1 className="products__title">Nuestros productos:</h1>
      <div className="products__container">
        {props.children}

      </div>

    </section>
    
    
  )
  
}

export  {ProductContainer}