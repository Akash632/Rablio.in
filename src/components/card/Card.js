import React from 'react';
import './Card.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useDispatch} from 'react-redux';
import { deleteData } from '../../redux/actions/Action';
import { useNavigate } from 'react-router-dom';
function Card(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {id,username,email} = props.data;

  const handleDelete=(id)=>{
    dispatch(deleteData(id));
    props.handleSingleDelete()
  }

  //function to handle single delete. Please have a look in README.md for more explanation.

  const handleChange=(e)=>{
    props.handleCheck(e.target.value);
  }

  //function to handle check box. Please have a look in README.md for more explanation.


  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='card-img-container' onClick={()=>navigate(`data/${id}`)}>
        <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"/>
        </div>
        <div className='card-text' >
        <p>{username}</p>
        <p>{email}</p>
        <div className='card-delete-container'>
          <input type='checkbox' value={props.index} onChange={handleChange} className='checkbox'/>
          <button onClick={()=>navigate(`data/${id}`)}>Edit</button>
        <button onClick={()=>{handleDelete(props.index)}}>Delete</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
