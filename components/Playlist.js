import React from "react";
import moment from "moment";
import { css } from "glamor";
import ReactPlayer from "react-player";
 

const PlayList = ({ playlist }) => (
  <div>
    {playlist &&
      playlist.node &&
      playlist.node.list &&
      playlist.node.list.map((data, i) => (
        <div key={i}>
            <ReactPlayer url={data.url} width="auto" height="auto"/>
        </div>
      ))}
  </div>
);

export default PlayList;
