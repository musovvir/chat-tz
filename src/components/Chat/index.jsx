import React from "react";
import OutMessage from "./OutMessage";
import SendMessage from "./SendMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadMessages } from "../../redux/reducers/chat";

function Chat() {
  /** Хук редакса **/
  const dispatch = useDispatch();

  /** Массив с сообщениями **/
  const messages = useSelector((state) => state.chat.messages);

  /** Загрузка данных при загрузке компонента**/
  useEffect(() => {
    dispatch(loadMessages());
  }, [dispatch]);

  return (
    <div className="chat" id="chat-window">
      {messages.map((message, index) => {
        return <OutMessage key={index} message={message} />;
      })}
    </div>
  );
}

export default Chat;
