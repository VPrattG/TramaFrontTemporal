import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const tabsLayout = () => {
  return (
    <Tabs screenOptions={{tabBarStyle:{backgroundColor:'black',}, tabBarInactiveTintColor:'white'}}>
        <Tabs.Screen name="home" options={{title:'Trama Café ', headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/>  
        <Tabs.Screen name="food" options={{title:'Alimentos', headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/> 
        <Tabs.Screen name="cart" options={{title:'Carrito', headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/>  
        <Tabs.Screen name="profile" options={{title:'Mi perfil', headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/> 
        
    </Tabs>
  )
}

export default tabsLayout

const styles = StyleSheet.create({})