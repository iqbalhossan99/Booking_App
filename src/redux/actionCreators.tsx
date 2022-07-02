import { Alert } from 'react-native';
import { navigate } from '../navigation/Router';
import * as actionTypes from './actionTypes'

type AuthProps = {
    email: string,
    password: string,
    mode: string
}

export const authUser = () =>{
    return {
        type: actionTypes.AUTHENTICATE_USER,
    }
}

export const tryAuth = ({email, password, mode}:AuthProps)=> (dispatch:Function) =>{

    let url = "";
    const API_KEY = `AIzaSyAggPQZvDcZ-PTQ03hUtjIosJYEsaSW1S8`
    if(mode == "signup"){
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    }else if(mode == "login"){
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    }

    fetch( url,
    {
       method: "POST",
       body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
       }),
       headers:{
        "Content-Type":"application/json"
       }
    })
    .then(res => res.json())
    .then(data =>{
        if(data.error){
            Alert.alert(data.error.message);
        }else{
            dispatch(authUser());
            navigate('Welcome');
            
        }
    })
    .catch(err =>{
        console.log(err); 
        Alert.alert("Authentication Fail");
    })
    

}