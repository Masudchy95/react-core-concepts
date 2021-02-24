import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'Adobe Photoshop', price: '$90.9'},
    {name: 'Adobe Illustrator', price: '$69.9'},
    {name: 'Photography', price: '$14.9'},
    {name: 'Adobe Pro', price: '$9.99'},
    {name: 'Adobe Reader', price: '$39.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        <Product product = {products[3]}></Product>
        <Product product = {products[4]}></Product> */}
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightGray',
    height: '200px',
    width: '250px',
    float: 'left'
  }
  return (
    <div style= {productStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <p>{props.description}</p>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '2px solid purple',
    margin: '10px',
    padding: '10px'
  }
 return (
   <div style= {personStyle}>
       <h1>Name: {props.name} {props.lastName}</h1>
       <h3>My Loving Son.</h3>
   </div>
 )
}

function Counter(){
  const [count, setCount] = useState(0);
  const increaseHandle = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count -1)}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li> )
        }
      </ul>
    </div>
  )
}

export default App;
