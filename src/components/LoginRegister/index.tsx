import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import {tryAuth} from '../../redux/actionCreators'
import { connect } from 'react-redux';
import styles from './styles';

type Inputs= {
    email:string,
    password:string,
    confirmPassword:string,
}

const mapStateToProps = (state:any) =>{
    return{
        isAuth: state.isAuth
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        tryAuth: (email:string, password:string, mode:string) => dispatch(tryAuth(email, password, mode))
    }
}

const LoginRegister = (props:any) => {
    // console.log(props.isAuth);

    const [authStates, setAuthStates] = useState({
        mode:"login",
        inputs:{
            email:"",
            password:"",
            confirmPassword:"",
        }
    })

    const switchViews =()=>{
        setAuthStates({
            ...authStates,
            mode: authStates.mode === "login"? "signup": "login"
        })
    }

    const updateInputs = (value:string, name:string) =>{
        setAuthStates({
            ...authStates,
            inputs:{
                ...authStates.inputs,
                [name]: value
            }
        })
    }

    const emailReg = /^\S+@\S+\.\S+$/;

    const handleAuth =()=>{
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;

        if(email !== '' && password !== ""){
            if(emailReg.test(email)){
                if(authStates.mode === "login"){
                    //  login 
                    props.tryAuth(email, password, "login")                  
                }else{
                    // Sign up
                    if(password === confirmPassword){
                        props.tryAuth(email, password, "signup")
                    }else{
                        Alert.alert("Password fields doesn't match!")
                    }
                }
            }else{
                Alert.alert("Invalid Email")
            }
        }else{
            Alert.alert("Input all the filds! fduhjdsifjdsof")
        }
    }

    let confirmPasswordField = null;
    if(authStates.mode === "signup"){
        confirmPasswordField=(
            <TextInput 
                style={styles.input}
                placeholder='Confirm Password'
                value={authStates.inputs.confirmPassword}
                onChangeText={value => updateInputs(value, "confirmPassword")}
            />
        )
    }

    
    return (
        <View style={styles.loginView}>
            <Pressable onPress={()=> switchViews()} style={{ ...styles.btnContainer, backgroundColor:"#f15454", width: "80%"}}>
                <Text style={styles.btnText}>{authStates.mode === "login"? "Switch to Sing Up" : "Switch to Log In"}</Text>
            </Pressable>
            <TextInput 
                style={styles.input}
                placeholder='Your Email Address'
                value={authStates.inputs.email}
                onChangeText={value => updateInputs(value, "email")}

            />
            <TextInput 
                style={styles.input}
                placeholder='Password'
                value={authStates.inputs.password}
                onChangeText={value => updateInputs(value, "password")}

            />
            {confirmPasswordField}
            <Pressable 
            onPress={()=>{handleAuth()}}
            style={styles.btnContainer}>
                <Text style={styles.btnText}>{authStates.mode === "login"? "Login" : "Sing Up"}</Text>
            </Pressable>         
                   
        </View>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister); // first parameter should be null if there in't any state

