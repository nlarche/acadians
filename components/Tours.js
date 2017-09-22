import React from "react";
import moment from "moment";
import { css } from "glamor";

const formatDate = (date) => {
  console.log(date);
  return   moment(date).format("DD MMM. YYYY");
}

const Tours = ({ tours }) => (    
  <div>  
    {tours &&
      tours.node &&
      tours.node.list &&
      tours.node.list.map((data, i) => (
        <div key={i}>
          <span>{data.place}</span>
          <div>{formatDate(data.date)}</div>
          <div>{data.ville}</div>
        </div>
      ))}
  </div>
);

export default Tours;
