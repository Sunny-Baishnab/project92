import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';

export default class CompanyProfileScreen extends Component{
    render(){
        return(
            <Text style = {{alignSelf:'center',fontSize:40,fontWeight:'bold',justifyContent:'center'}}>Company</Text>
        )
    }
}