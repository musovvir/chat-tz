import React from "react";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import { CSSTransition } from "react-transition-group";

function ButtonSend({ message, sentMessage }) {
  return (
    <div className="buttonSend">
        <CSSTransition key={message} timeout={100} classNames="sendIcon">
            { /** Смени иконок при вводе сообщения **/}
          <i className="material-icons microphone">
            {message ? (
              <SendIcon className="sendButton" onClick={sentMessage} />
            ) : (
              <MicIcon className="micIcon" />
            )}
          </i>
        </CSSTransition>
    </div>
  );
}

export default ButtonSend;
