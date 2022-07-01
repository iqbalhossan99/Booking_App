import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { navigate } from '../navigation/Router';
import * as actionTypes from './actionTypes'

export const authUser = () =>{
    return {
        type: actionTypes.AUTHENTICATE_USER,
    }
}

export const trySignUp = (email:string ,password:string)=> dispatch =>{
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAggPQZvDcZ-PTQ03hUtjIosJYEsaSW1S8',
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
            console.log(data.error.message);
        }else{
            navigate('Welcome');
            dispatch(authUser());
            console.log("You are Sign in now");
            
        }
    })
    .catch(err =>{
        console.log(err); // Server error
        Alert.alert("Authentication Fail");
    })
    

}