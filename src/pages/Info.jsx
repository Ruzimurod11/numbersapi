import React from "react";
import { useSelector } from "react-redux";
import { NumberCard } from "../components/number-card/NumberCard";

const Info = () => {
   const { todos } = useSelector((store) => store.todo);
   console.log(todos);
   return (
      <>
         <div className="info">
            {todos?.map((todo) => (
               <div key={todo.id}>
                  <h2>{todo.number} </h2>
                  <p>{todo.fact}</p>
               </div>
            ))}
         </div>
      </>
   );
};

export default Info;
