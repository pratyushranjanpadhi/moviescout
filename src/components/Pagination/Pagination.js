import React, { useEffect, useState } from "react";
import "./pagination.scss";

const Pagination = ({ pageChange }) => {
   const [current, setCurrent] = useState(1);
   useEffect(() => {
      pageChange(current);
   }, [current, pageChange]);

   const onPrev = () => {
      if (current > 1) {
         setCurrent(current - 1);
      }
   };

   const onNext = () => {
      setCurrent(current + 1);
   };

   return (
      <div className="pagination mb-medium">
         <button onClick={onPrev} className="pagination__btn">
            Prev
         </button>
         <button onClick={onNext} className="pagination__btn">
            Next
         </button>
      </div>
   );
};

export default Pagination;
