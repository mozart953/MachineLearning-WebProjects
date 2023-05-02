import{SET_ALERT, REMOVE_ALERT} from "./types.js";

export const setAlert = (msg, alertType, timeout =4000)=>{
    dispatchEvent({
        type: SET_ALERT,
        payload: {msg, alertType},
    });
    setTimeout(()=> dispatchEvent({type: REMOVE_ALERT}), timeout);

}