import { Suspense } from 'react';
import './App.css'
import Products from './Components/Products/Products';

function App() {

  const products = fetch('https://fakestoreapi.com/products').then(res => res.json());

  return (
    <>
      <Suspense fallback={<span className="mx-auto my-3 loading loading-infinity loading-xl"></span>}>
        <Products products={products}></Products>
      </Suspense>
    </>
  )
}

export default App
