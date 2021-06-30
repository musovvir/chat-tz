import { scrollChatDown } from "../../utils/Scroll";

/**
 * Стейт с данными чатов и сообщенй и с состоянием их загрузки
 * @type {{loading: boolean, messages: [], message: string}}
 */

const initialState = {
  loading: false,
  messages: [],
  message: "",
};

/**
 * Основной редюсер с кейсами данных и их загрузки
 * @param state
 * @param action
 * @returns {{loading: boolean, messages: *[], loading: boolean, items: }}
 */

export default function chat(state = initialState, action) {
  switch (action.type) {
    case "load/message/start":
      return {
        ...state,
        loading: true,
      };

    case "load/message/success":
      return {
        ...state,
        messages: action.payload,
      };

    case "send/message/start":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "get/message":
      return {
        ...state,
        message: action.payload,
      };

    case "clear/input":
      return {
        ...state,
        message: "",
      };

    default:
      return state;
  }
}

/**
 * Загрузка сообщений
 * @returns {function(...[*]=)}
 */

export function loadMessages() {
  return (dispatch) => {
    dispatch({ type: "load/message/start" });

    fetch("/messages")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/message/success",
          payload: json,
        });
      });
  };
}

/**
 * Добавление нового сообщения
 * @param message
 * @returns {function(...[*]=)}
 */

export function sendMessage(message) {
  return (dispatch) => {
    dispatch({
      type: "send/message/start",
      payload: { message, date: new Date(), type: "text" },
    });
    fetch("/messages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        date: new Date(),
        type: "text",
      }),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "send/message/success",
        });
        scrollChatDown();
      });
    dispatch({ type: "clear/input" });
  };
}

/**
 * Сохранение значения поля ввода
 * @param message
 * @returns {{type: string}}
 */
export function getMessage(message) {
  return { type: "get/message", payload: message };
}
