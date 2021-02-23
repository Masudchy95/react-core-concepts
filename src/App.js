import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Adobe Photoshop', price: '$90.9'},
    {name: 'Adobe Illustrator', price: '$69.9'},
    {name: 'Photography', price: '$14.9'},
    {name: 'Adobe Pro', price: '$9.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        <Product product = {products[3]}></Product>
      </header>
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightGray',
    height: '250px',
    width: '300px',
    float: 'left'
  }
  return (
    <div style= {productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{props.product.price}</h1>
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

export default App;
