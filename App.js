import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import signUpLoginScreen from './screens/signUpLoginScreen';
import CompanyProfileScreen from './screens/CompanyProfileScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}
const switchNavigation = createSwitchNavigator({
    signUpLoginScreen:{screen:signUpLoginScreen},
    CompanyProfileScreen:{screen:CompanyProfileScreen}
})
const AppContainer = createAppContainer(switchNavigation)