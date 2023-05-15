import React, { useEffect, useState } from 'react';
import { front } from '../assets';
import { ProductsComponent } from '../components';
import { useFirebase } from '../context/Firebase';

const HomePage = () => {
  const firebase = useFirebase();
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [typeProduct, setTypeProduct] = useState('All');

  const productType = [
    'All',
    'Electronic',
    'Vehicle',
    'Clothes',
    'Household',
    'Cosmetics',
    'Other',
  ];

  useEffect(() => {
    firebase.listAllProducts().then((doc) => {
      // eslint-disable-next-line
      return setProduct(doc.docs), setFilterProduct(doc.docs);
    });
  }, [firebase]);

  const checkedInput = () => {
    if (typeProduct !== 'All') {
      setFilterProduct(
        product.filter((prod) => {
          return prod.data().type === typeProduct;
        })
      );
    } else {
      setFilterProduct(product);
    }
  };

  return (
    <div className='container-fluid'>
      <div className='container-fluid my-2'>
        <img className='img-fluid' src={front} alt='banner' />
      </div>
      <hr />
      <div className='container-fluid'>
        <h1 className='text-center my-2'>Products</h1>
        <div className='container-fluid my-3 d-flex justify-content-center align-item-center row'>
          {productType.map((e, index) => (
            <input
              type='submit'
              className={`btn col mb-2 mx-1 ${
                typeProduct === e ? 'btn-primary' : 'btn-outline-primary'
              }`}
              key={index}
              onClick={() => {
                setTypeProduct(e);
                checkedInput();
              }}
              value={e}
            />
          ))}
        </div>
        {filterProduct.length === 0 ? (
          <h1 className='m-3 text-center'>No Product under this category</h1>
        ) : (
          <div className='row'>
            {filterProduct.map((e, index) => (
              <div
                // col-lg-4 col-md-5 col-sm-6
                className='col mb-4 ml-auto expand-card'
                key={index}
              >
                <ProductsComponent id={e.id} {...e.data()} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
