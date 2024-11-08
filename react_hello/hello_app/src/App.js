import { useState } from 'react';

function MyButton() {
  return ( <button> I'm a button</button> );
}
/////////////////////////////////////////
function MyButtonCount() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return ( <button onClick={handleClick}> Clicked {count} times </button> );
}
/////////////////////////////////////////
function MyButtonAlert() {
  function handleClick() {
    alert('You clicked me!');
  }

  return ( <button onClick={handleClick}> Click me </button> );
}///////////////////////////////
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
///////////////////////////////////////////
function App() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <div>
      <h1>Welcome to Hello World</h1>
      <MyButton /><br />
      <MyButtonCount /> Click to increment count<br />
      <MyButtonAlert /> Click to see alert<br />
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
