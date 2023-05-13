import React, { useEffect, useState } from 'react';
import '../components/css/ProductComponent.css';
import { useFirebase } from '../context/Firebase';
import { Link, useParams } from 'react-router-dom';
import { BiPhoneCall, BiRupee } from 'react-icons/bi';

const ProductPage = () => {
  const { id } = useParams();
  const firebase = useFirebase();

  const [product, setProduct] = useState(null);
  const [urlimg, setUrlimg] = useState('');

  useEffect(() => {
    firebase.getProductById(id).then((val) => setProduct(val.data()));
    if (product !== null) {
      firebase.getImageURL(product.image).then((url) => setUrlimg(url));
    }
  }, [firebase, id, product, product?.image]);

  let upldate = new Date(product?.date).toString();

  if (product === null) return <h1>Loading....</h1>;

  return (
    <div className='container-fluid'>
      <div className='d-flex my-5 row'>
        <div className='col-md-6 col-sm-12'>
          <img className='img-fluid' src={urlimg} alt={product.name} />
        </div>
        <div className='col-md-6 col-sm-12 card product-card'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <div className='card-body'>
                <h3 className='card-title'>Product Details</h3>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>
                  <BiRupee /> {product.price}
                </p>
                <p className='card-text'>{product.desc}</p>
              </div>
            </li>
            <li className='list-group-item'>
              <div className='card-body'>
                <h3 className='card-title'>Owner Details</h3>
                <h5 className='card-title'>{product.user}</h5>
                <Link
                  to={`tel:${product.phone}`}
                  className='card-text none-link'
                >
                  <BiPhoneCall /> {product.phone}
                </Link>
                <div className='d-flex justify-content-between'>
                  <div>{upldate}</div>
                  <div>{product.state}</div>
                </div>
              </div>
            </li>
          </ul>
          <div className='card-body d-flex align-items-center justify-content-evenly'>
            <Link
              to={'/'}
              className='card-link none-link btn btn-outline-success'
            >
              Make Deal
            </Link>
            <Link
              to={'/'}
              className='card-link none-link btn btn-outline-danger'
            >
              Another link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
