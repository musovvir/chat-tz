import { createLogger } from "redux-logger/src";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import chat from "./reducers/chat";

/**
 * Настройка логгера
 * @type {function(...[*]=)}
 */
const logger = createLogger({
    collapsed: true,
    diff: true,
});

/**
 * Создание комбайн редюсера
 * @type {function(...[*]=)}
 */
const reducers = combineReducers({
    chat
});

/**
 * Создание настройка стора
 * @type {*}
 */
export const store = createStore(reducers, applyMiddleware(thunk, logger));