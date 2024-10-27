import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFact, addTodo } from "../../features/todoSlice";
import { RandomNumber } from "../random-number/RandomNumber";

export const NumberForm = () => {
   const [inputValue, setInputValue] = useState(0);
   const [selected, setSelected] = useState("Custom");
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const onAdd = (title) => {
      getData(title);
      navigate("/info");
   };

   const handleChange = (e) => {
      console.log(e.target.value);
      setSelected(e.target.value);
   };

   async function getData(num) {
      let url;

      if (selected === "Custom") {
         url = `http://numbersapi.com/${num}`;
      } else if (selected === "Trivia") {
         url = `http://numbersapi.com/${num}/trivia?fragment`;
      } else if (selected === "Math") {
         url = `http://numbersapi.com/${num}/math`;
      } else if (selected === "Year") {
         url = `http://numbersapi.com/${num}/year`;
      } else if (selected === "Date") {
         url = `http://numbersapi.com/${num}/date`;
      }

      const response = await fetch(url);
      const data = await response.text(); // normally it would be response.json(), but this time
      // we need it to get converted into text format

      if (num > 0 && num !== "") {
         dispatch(addTodo(num));
         dispatch(addFact(data));
      }
   }

   return (
      <>
         <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            className="form-control w-50"
            id="number_input"
            placeholder="Enter a Number..."
         />
         <select
            onChange={(e) => handleChange(e)}
            id="dropdown_menu"
            value={selected}>
            <option>Custom</option>
            <option>Trivia</option>
            <option>Math</option>
            <option>Year</option>
            <option>Date</option>
         </select>
         {selected === "Custom" ? <div>Custom</div> : ""}
         {selected === "Trivia" ? <div>Trivia</div> : ""}
         {selected === "Math" ? <div>Math</div> : ""}
         {selected === "Year" ? <div>Year</div> : ""}
         {selected === "Date" ? <div>Year</div> : ""}
         <button
            onClick={() => onAdd(inputValue)}
            className="btn btn-danger w-25"
            id="button">
            Get Fact
         </button>
         <RandomNumber />
      </>
   );
};
