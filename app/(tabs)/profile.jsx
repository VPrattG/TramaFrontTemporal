import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { router } from 'expo-router'
import React from 'react'

const profile = () => {
  return (
    <View className='flex-1 items-center py-6'>
      {/* <Text>Perfil 👀</Text> */}
      {/* <View className='flex-1 items-center'> */}
      {/* </View> */}
      <Image className='h-48 w-48 rounded-2xl' source={require('../../assets/images/maclobin.png')} />
      <Text className='font-bold text-3xl'>Señor Díquenbols</Text>
      <View className='py-4 text-center'>
        <View className='my-1'>
          <Text className='font-bold text-xl text-center'>
            Nombre:
          </Text>
          <Text className='text-xl text-center'>
            Plutarco
          </Text>
        </View>
        <View className='my-1'>
          <Text className='font-bold text-xl text-center'>
            Apellidos:
          </Text>
          <Text className='text-xl text-center'>
            Elías Calles
          </Text>
        </View>
        <View className='my-1'>
          <Text className='font-bold text-xl text-center'>
            Número de teléfono:
          </Text>
          <Text className='text-xl text-center'>
            2523523
          </Text>
        </View>
        <View className='my-1'>
          <Text className='font-bold text-xl text-center'>
            Correo electrónico:
          </Text>
          <Text className='text-xl text-center'>
            plutarcoec@gmail.com
          </Text>
        </View>
        <View className='mt-10 pt-2 items-center'>
          <Pressable className='bg-red-500 h-15 justify-center rounded-lg mt-1 w-full ' onPress={() => {
            router.replace("/")
          }}>
            <Text className='text-xl font-bold text-center text-white p-1'> Cerrar sesión</Text>
          </Pressable>
        </View>
      </View>
      {/* info a desplegar:
      "name": "Ricardo",
      "patLastName": "Vprato",
      "matLastName": "Badillo",
      "phone": "2523523",
      "type": "general",
      "email": "user1@correo.com" */}
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})