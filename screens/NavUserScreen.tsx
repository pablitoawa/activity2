import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import LoginScreen from './LoginScreen';
import RegistroScreen from './RegistroScreen';

const Tab = createMaterialTopTabNavigator();

const NavUserScreen = () => {
    return (
        <View style={{flex: 1, backgroundColor:'#fff1e6'}}>
            <ScrollView style={{flex: 1, backgroundColor:'#fff1e6'}}>
                <View style={{alignItems:'center', height:200, backgroundColor:'#cbf1fe'}}>
                    <Image source={require('../assets/bgc1.jpeg')} style={{width:'100%', height:'50%', flex:1}}/>
                </View>
                <View style={{height:550}}>
                <Tab.Navigator>
                    <Tab.Screen name='Login' component={LoginScreen}/>
                    <Tab.Screen name='Registro' component={RegistroScreen}/>
                </Tab.Navigator>
                </View>
            </ScrollView>
        </View>
    )
}

export default NavUserScreen

const styles = StyleSheet.create({})