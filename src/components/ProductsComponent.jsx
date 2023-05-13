import React, { useEffect, useState } from 'react';
import './css/ProductComponent.css';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const ProductsComponent = (props) => {
  const firebase = useFirebase();
  const [urlimg, setUrlimg] = useState('');

  useEffect(() => {
    firebase.getImageURL(props.image).then((url) => setUrlimg(url));
  }, [firebase, props.image]);

  let upldate = new Date(props.date).toString();
  const dateData = upldate.split(' ');
  upldate = dateData[1] + ' ' + dateData[2] + ' ' + dateData[3];

  return (
    <div className='card product-card'>
      <img src={urlimg} className='card-img-top product-img' alt={props.name} />
      <div className='card-body'>
        <Link className='card-title none-link' to={`/product/${props.id}`}>
          <strong>{props.name}</strong>
        </Link>
        <p className='card-text'>
          <BiRupee /> {props.price}
        </p>
        <div className='card-text'>
          <div className='d-flex justify-content-between'>
            <div>{upldate.toString()}</div>
            <div>{props.pincode}</div>
          </div>
        </div>
        <Link
          to={`/product/${props.id}`}
          className='btn btn-outline-primary w-100'
        >
          Buy
        </Link>
      </div>
    </div>
  );
};

export default ProductsComponent;
