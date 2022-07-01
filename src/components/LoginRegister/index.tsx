import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import {trySignUp} from '../../redux/actionCreators'
import { connect } from 'react-redux';
import styles from './styles';

type Inputs= {
    email:string,
    password:string,
    confirmPassword:string,
}

const mapStateToProps = state =>{
    return{
        isAuth: state.isAuth
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        trySignUp: (email, password) => dispatch(trySignUp(email, password))
    }
}

const LoginRegister = (props) => {
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

    const navigation = useNavigation();

    const handleAuth =()=>{
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;
        // console.log(email, password, confirmPassword);

        if(email !== '' && password !== ""){
            if(emailReg.test(email)){
                if(authStates.mode === "login"){
                    //  login 
                    if(props.isAuth){
                        navigation.navigate("Welcome")
                        console.log("You are Log in now!");    
                    }else{
                        Alert.alert("You are not allowed!")
                    }
                    
                }else{
                    // Sign up
                    if(password === confirmPassword){
                        props.trySignUp(email, password)
                        // if(props.isAuth){
                        //     navigation.navigate("Welcome")
                        //     console.log("You are Sign in now"); 
                        //     Alert.alert("You are not allowed");
                        // }else{
                        //     Alert.alert("You are not allowed");
                        //     console.log("You are Sign in now"); 
                        // }
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
            <Pressable onPress={()=> switchViews()} style={{ backgroundColor:"#f15454", width: "80%"}}>
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


export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister); // first parameter should be null because there in't any state

