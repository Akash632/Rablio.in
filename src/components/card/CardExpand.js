import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteMultiple } from "../../redux/actions/Action";
import Card from "./Card";
import axios from "axios";
import { Newspaper } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function CardExpand() {
  const [checked, setChecked] = useState([]);
  const [newArr,setNewArr]=useState([]);
  const [input, setInput] = useState([]);
  const [bool,setBool] = useState(false);
  const [text,setText]=useState('');
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data.data);

  //selector and dispatcher to get and set data from store. Please have a look in README.md for more explanation.

  const navigate = useNavigate();

  //use navigate for page navigation. Please have a look in README.md for more explanation.

  const handleCheck = (value) => {
    checked.push(Number(value));
    setChecked(checked);
  };

  //function to handle the selected checkbox card indexes. Please have a look in README.md for more explanation.

  const getData = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch(addData(data.data));
  };

  //function to get data and set it in store. Please have a look in README.md for more explanation.

  const handleMultiple = (array) => {
    if (array.length > 0) {
      dispatch(deleteMultiple(array));
      setChecked([]);
    }else{
      setText("Please select cards to delete*")
    }
  };

  //function to dispatch action for multiple deleting case. Please have a look in README.md for more explanation.

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //function to handle function input value.Please have a look in README.md for more explanation.


  const handleSingleDelete = ()=>{
    setBool(true);
    if(setBool){
        setNewArr([]);
    }
  }

  //a special function to handle the delete of single searched card with the help of boolean value. Please have a look in README.md for more explanation.


  const handleSearch = ()=>{
    setNewArr(selector.filter((value) => value.id === Number(input)));
    setInput('');
  }

  //function to handle search inputs and to to filter the data according to the search value. Please have a look in README.md for more explanation.

  useEffect(() => {
    getData();
  }, []);

  //useEffect to handle API side effects. Please have a look in README.md for more explanation.

  return (
    <div className="card-page-container">
      <div className="card-page-content">
        <div className="input-container">
          <h1>Employee Dashboard</h1>
          <div className="input-content">
            <input
              className="input"
              placeholder="Search"
              onChange={(e) => handleInput(e)}
              value={input}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="deletebtn">
        <p className="warningText">{text}</p>
            <button onClick={() => handleMultiple(checked)}>Delete</button>
        </div>
        <div className="card-page-cards-container">
          {newArr.length>0 ? newArr.map((value, index) => (
              <Card
                index={index}
                key={value.id}
                data={value}
                handleCheck={handleCheck}
                handleSingleDelete={handleSingleDelete}
              />
            )):selector &&
            selector.map((value, index) => (
              <Card
                index={index}
                key={value.id}
                data={value}
                handleCheck={handleCheck}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardExpand;
