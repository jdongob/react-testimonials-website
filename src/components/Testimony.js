import React from 'react';
import '../stylesheets/Testimony.css'


function Testimony(props) {
  return (
    //Define the initial structure of the component to be reused.
    <div className='container-testimony'>
      <img className='image-testimony'
      //src= {require('../images/testimony-emma.png')}
      src= {require(`../images/testimony-${props.image}.png`)}  //javascript Template literals ${}
      alt='Photo of Emma' />

      <div className='container-text-testimony'>
        <p className='name-testimony'>
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className='role-testimony'>
          {props.role} at <b>{props.company}</b>
        </p>
        <p className='text-testimony'>"{props.testimony}"</p>
      </div>
 
    </div>
  );
}

export default Testimony;