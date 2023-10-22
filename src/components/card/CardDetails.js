import React, { useState } from 'react';
import logo1 from '../../assets/logo.png';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function CardDetails() {

    const params = useParams();

    //using params for dynamic routing. Please have a look in README.md for more explanation.

    const data = useSelector((state)=>state.data.data);

    //useSelector to get Data from store. Please have a look in README.md for more explanation.

    let state = data.filter((value)=>value.id==params.id);

    //filtering the data accordingly to the params value. Please have a look in README.md for more explanation.

    return (
        <>
    <div className='details-container'>
        {state &&
      <div className='details-content'>
        <div className='details-left'>
            <div className='details-left-container'>
                <div className='details-img-container'>
                <div className='details-img-logo'>
                <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"/>
            </div>
            <div className='details-img-logo1'>
                <img src="https://static.vecteezy.com/system/resources/previews/019/507/624/non_2x/barcode-on-white-background-illustration-free-vector.jpg"/>
                </div>
                    </div>
            <div className='details-left-text'>
                <p><bold>Id : </bold>{state[0].id}</p>
                <p>Name : {state[0].name}</p>
                <p>Username : {state[0].username}</p>
                <p>email : {state[0].email}</p>
                <p>Phone : {state[0].phone}</p>
                <p>Website : {state[0].website}</p>
            </div>
            </div>
        </div>
        <div className='details-right'>
            <div>
            <h3>Company</h3>
            <p>Name : {state[0].company.name}</p>
            <p>Bs : {state[0].company.bs}</p>
            <p>Tag : {state[0].company.catchPhrase}</p>
            </div>
            <div>
            <h3>Address</h3>
            <p>Street : {state[0].address.street}</p>
            <p>Suite : {state[0].address.suite}</p>
            <p>Sity : {state[0].address.city}</p>
            <p>Zipcode : {state[0].address.zipcode}</p>
            </div>
        </div>
      </div>
}
    </div>
    </>
  );
}

export default CardDetails;
