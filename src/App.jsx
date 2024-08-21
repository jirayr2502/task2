import { useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {
      id: 101,
      name: 'Psycology',
      price: 27000,
      pic: 'https://m.media-amazon.com/images/I/91AiNeHUoNL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 102,
      name: 'Science',
      price: 37000,
      pic: 'https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2720,h_1160/dk-core-nonprod/9781465419651/9781465419651_cover.jpg'
    },
    {
      id: 103,
      name: 'Economics',
      price: 10000,
      pic: 'https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780756698270/9780756698270_cover.jpg'
    },
    {
      id: 104,
      name: 'Polytics',
      price: 8000,
      pic: 'https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2720,h_1160/dk-core-nonprod/9781465402141/9781465402141_cover.jpg'
    },
    {
      id: 105,
      name: 'Religions',
      price: 15000,
      pic: 'https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2720,h_1160/dk-core-nonprod/9781465408433/9781465408433_cover.jpg'
    },
    {
      id: 106,
      name: 'Bussines',
      price: 21000,
      pic: 'https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2720,h_1160/dk-core-nonprod/9781465415851/9781465415851_cover.jpg'
    },
    {
      id: 107,
      name: 'Movie',
      price: 18000,
      pic: 'https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_2720,h_1160/dk-core-nonprod/9781465437990/9781465437990_cover.jpg'
    }
  ])
  const [basket, setBasket] = useState([])
  const moveToCart = prod => {
    const result = basket.find(x => x.id == prod.id)
    if (result) {
      result.count++
      setBasket([...basket])
    } else {
      setBasket([...basket, { ...prod, count: 1 }])
    }
  }

  const handlePlus = prod => {
    prod.count++
    setBasket([...basket])

  }

  const handleMinus = prod => {
    if (prod.count != 1) {
      prod.count--
    }
    setBasket([...basket])
  }

  const handleRemove = prod => {
    let result = basket.filter(el => el != prod)
    setBasket([...result])
  }

  return (
    <>
      <h1>Online shop</h1>
      <div className='content'>
        <div>
          <h3>Products</h3>
          <div className='list'>
            {
              products.map(prod => (
                <div key={prod.id}>
                  <img src={prod.pic}></img>
                  <p>{prod.name}</p>
                  <strong>{prod.price} AMD </strong>
                  <button onClick={() => moveToCart(prod)}>Move</button>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <h3>Cart</h3>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>price</th>
                <th>count</th>
                <th>subtotal</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.count}</td>
                    <td>{item.price * item.count}</td>
                    <td className='buttons'>
                      <button className='plus' onClick={() => handlePlus(item)}>+</button>
                      <button className='minus' onClick={() => handleMinus(item)}>–</button>
                      <button className='remove' onClick={() => handleRemove(item)}>x</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default App