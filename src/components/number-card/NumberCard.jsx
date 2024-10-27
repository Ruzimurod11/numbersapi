import React from "react";

export const NumberCard = (props) => {
   return (
      <>
         {props?.number > 0 && props?.number !== "" ? (
            <div>
               <h2>{props?.number}</h2>
               <p>{props?.fact}</p>
            </div>
         ) : (
            <div className="fact msg">The input field cannot be empty</div>
         )}
      </>
   );
};
