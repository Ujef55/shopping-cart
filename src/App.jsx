import Products from './components/Products';
import Header from './components/Header';
import Cart from './components/Cart';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

function App() {

  const { cartPage } = useContext(CartContext);

  let content;

  if (cartPage) {
    content = <Cart />
  } else if (!cartPage) {
    content = <Products />
  }

  return (
    <>
      <Header />
      {content}
    </>
  )
}

export default App;