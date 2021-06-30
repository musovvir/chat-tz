import React from "react";
import dayjs from "dayjs";

function OutMessage(props) {
  return (
    <div className="out">
      <div className="outMessage">
        {props.message.message}
        <div className="date">{dayjs(props.message.date).format("hh:mm")}</div>
      </div>
    </div>
  );
}

export default OutMessage;
