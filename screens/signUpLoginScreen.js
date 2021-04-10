import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
        }
    }
    login=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.props.navigation.navigate('CompanyProfileScreen')
        })
        .catch((error)=>{
            var errorCode = error.errorCode
            var errorMessage = error.errorMessage
            return Alert.alert(errorMessage)
        })
    }
    signup=(email,password)=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                return Alert.alert('user added successfully')
            })
            .catch((error)=>{
                var errorCode = error.errorCode
                var errorMessage = error.errorMessage
                return Alert.alert(errorMessage)
            })
    }
    
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <Text style = {styles.title}>Job For You</Text>
                </View>
                <View style= {styles.subcontainer}>
                    <TextInput style = {styles.loginbox}
                    placeholder = {'enter email'}
                    keyboardType = {'email-address'}
                    onChangeText = {(text)=>{
                        this.setState({
                            email:text
                        })
                    }}/>

                    <TextInput style = {styles.loginbox}
                    placeholder = {'password'}
                    secureTextEntry = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>

                    <TouchableOpacity style = {styles.button} 
                    onPress = {()=>{
                        this.login(this.state.email,this.state.password)
                    }}>
                        <Text style = {styles.buttontext}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {[styles.button,{marginTop:20,marginBottom:20}]} 
                    onPress = {()=>{
                        this.signup(this.state.email,this.state.password)
                    }}>
                        <Text style = {styles.buttontext}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        fontSize:50,
        fontWeight:'bold',
        padding:10,
        alignSelf:"center"
    },
    loginbox:{
        width:'80%',
        height:50,
        borderRadius:10,
        borderColor:'green',
        margin:10,
        padding:10
    },
    button:{
        width:'80%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'purple',
        padding:15
    },
    buttontext:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    subcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})