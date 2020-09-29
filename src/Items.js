import React from 'react';

const items = [
    {
        source:
          'https://images.unsplash.com/photo-1533026000139-6d9b8c6717cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80" alt="image pulled from unsplash.com',
        name: "Blue Suede Couch",
        price: `$255`
      },
      {
        source:
          'https://images.unsplash.com/photo-1489269637500-aa0e75768394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1025&q=80" alt="image pulled from unsplash.com',
        name: "Black Tub Chair",
        price: `$55`
      },
      {
        source:
          'https://images.unsplash.com/photo-1530603907829-659ab5ec057b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="image pulled from unsplash.com',
        name: "Brown Pendant Lamp",
        price: `$85`
      }
]

export default function Items() {
    return (
        <section className="cards">
            {items.map(item => {
                return (<Item key={item.name} source={item.source} name={item.name} price={item.price} />)
            })}
        </section>
    )
}



const Item = ({source, name, price}) => {
    const displayInfo = () => {
        alert(`The ${name} costs ${price}`)
    }
    return (
        <article className="card">
			<section className="card__image" onClick={displayInfo}>
				<i className="fas fa-eye card__image__icon" />
				<img src={source} className="card__image__img"/>
			</section>
			<section className="card__description">
				<h1 className="itemName">{name}</h1>
		   	    <section className="itemPrice">
                    <h3 className="price">{price}</h3> 
                    <button className="btn btn__primary">Add to Cart</button>
                </section>
			</section>
		</article>
    )
}