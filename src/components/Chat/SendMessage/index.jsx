import React from "react";
import ButtonSend from "./ButtonSend";
import ButtonScrip from "./ButtonScrip";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, sendMessage } from "../../../redux/reducers/chat";
import { useHotkeys } from "react-hotkeys-hook";

function SendMessage(props) {
  /** Хук редакса **/
  const dispatch = useDispatch();

  /** Значение поля ввода **/
  const message = useSelector((state) => state.chat.message);

  /** Обработчик для поля ввода **/
  const handleChange = (e) => {
    dispatch(getMessage(e.target.value));
  };

  /** Функция оправки сообщения **/
  const sentMessage = () => {
    dispatch(sendMessage(message));
  };

  /**
   * Добавление сообщения при нажатии на enter
   */
  useHotkeys(
    "enter",
    (e) => {
      e.preventDefault();
      sentMessage();
    },
    [message]
  );

  return (
    <div className="send">
      <input
        type="text"
        placeholder="Введите сообщение..."
        value={message}
        onChange={handleChange}
        className="sendInput"
      />
      <ButtonScrip />
      <ButtonSend sentMessage={sentMessage} message={message?.length > 0} />
    </div>
  );
}

export default SendMessage;
