import React from "react";
import moment from "moment";
import { css } from "glamor";

const formatDate = (date) => {
  console.log(date);
  return moment(date).format("dddd DD MMM. YYYY");
}

const tourStyle = css({
  color: '#fff',
  background: 'rgba(0,0,0,0.5)',
  padding: '25px 29px',
  fontSize: '14px',
  lineHeight: '22px',
})

 

const Tours = ({ tours }) => (
  <div {...tourStyle}>
    {tours &&
      tours.node &&
      tours.node.list &&
      tours.node.list.map((data, i) => (
        <div key={i}>
          <h3>{formatDate(data.date)}</h3>
            <div>{data.place}</div>
            <div>{data.ville}</div>
        </div>
      ))}
  </div>
);

export default Tours;
