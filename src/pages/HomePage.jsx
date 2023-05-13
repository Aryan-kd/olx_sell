import React, { useEffect, useState } from 'react';
import { front } from '../assets';
import { ProductsComponent } from '../components';
import { useFirebase } from '../context/Firebase';

const HomePage = () => {
  const firebase = useFirebase();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    firebase.listAllProducts().then((doc) => setProduct(doc.docs));
  }, [firebase]);

  return (
    <div className='container-fluid'>
      <div className='container-fluid my-2'>
        <img className='img-fluid' src={front} alt='banner' />
      </div>
      <hr />
      <div className='container-fluid'>
        <h1 className='text-center my-2'>Products</h1>
        <div className='row'>
          {product.map((e, index) => (
            <div
              className='col-lg-4 col-md-5 col-sm-6 mb-4 ml-auto expand-card'
              key={index}
            >
              <ProductsComponent id={e.id} {...e.data()} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
