import { createStore } from "redux";
import { cartReduser } from "./reducer"
const store = createStore(cartReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;