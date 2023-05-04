import {
    LOAD_ETHEREUM_BALANCE_SUCCESS,
    LOAD_ETHEREUM_BALANCE_FAIL,
    LOAD_WEB3_SUCCESS,
    LOAD_WEB3_FAIL,
    LOAD_NETWORK_SUCCESS,
    LOAD_NETWORK_FAIL,
    LOAD_GAS_SUCCESS,
    LOAD_GAS_FAIL,

} from './types'

import {ethers} from "ethers";

export const loadWeb3 = () => async dispatch =>{
    if(window.ethereum){
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        }); 
        localStorage.setItem("account", account[0]);
    }
}