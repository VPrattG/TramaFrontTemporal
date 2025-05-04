import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{  title:'Bienvenido',headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:30,
            fontWeight:'bold'
        }, headerTitleAlign:'center',
        headerLeft: () => (<Image source={require('../../assets/images/tramaLogo.png')} resizeMode='contain' className='w-24 h-24 ' />)}}/> 
        <Stack.Screen name='signUp' options={{title:'Regístrate', headerTintColor:'white',headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/> 
         
        
    </Stack>
  )
}
// este header se puede eliminar, solo lo estoy usando como ejemplo
const customHeader = () => {
  return(
    <View className='flex-1 '>
      <View>
        <Image source={require('../../assets/images/tramaLogo.png')} resizeMode='contain' />
      </View>
      <View>
        <Text>Bienvenido</Text>
      </View>
      <View>
        <Text>Logo</Text>
      </View>
    </View>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})