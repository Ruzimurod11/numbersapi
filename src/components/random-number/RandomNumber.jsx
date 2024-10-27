import React, { useState } from "react";
import axios from "axios";

export const RandomNumber = () => {
   const [generatedExcuse, setGeneratedExcuse] = useState("");

   const fetchExcuse = (excuse) => {
      axios.get(`http://numbersapi.com/random/${excuse}?json`).then((res) => {
         setGeneratedExcuse(res.data.text);
      });
   };
   return (
      <div className="random">
         <h2>Generate An Excuse</h2>
         <button onClick={() => fetchExcuse("year")}>Random Year</button>
         <button onClick={() => fetchExcuse("date")}>Random Date</button>
         <button onClick={() => fetchExcuse("math")}>Random Math</button>

         <p> {generatedExcuse} </p>
      </div>
   );
};
