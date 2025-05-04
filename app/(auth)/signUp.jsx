import { ScrollView, StyleSheet, Text, View, TextInput, Pressable, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'

const signUp = () => {
  const {signUp} = useLocalSearchParams()
  console.log(signUp)
  const [Credentials, SetCredentials] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [lenght, setLenght] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [visible, SetVisible] = useState(false)
  
  useEffect(() => {
    if(Credentials.email.length > 3 && Credentials.password.length > 3 && Credentials.username.length > 3){
      setLenght(true)
    }else{
      setLenght(false)
    }
  }, [Credentials])

  useEffect(() => {
    if(errorMessage === '')
      return
    SetVisible(true)
  }, [errorMessage])
  return (
    <ScrollView>
        <View className='flex-1 flex-col h-screen'>
            <View className='flex-1 flex-col  justify-center'>
            <View className=' place-content-center  flex-1 flex-col  justify-center'>
                <Text className='text-3xl font-bold text-center mb-5 text-black'>Ingresa tus datos</Text>
            </View>
            <View className='flex-1 flex-col items-center'>
                <Text className='text-center text-xl'>Nombre</Text>
                <TextInput placeholder='Ingresa tu nombre' className=' border-b-2  rounded-md w-3/4 ' />
            </View>
            <View className='flex-1 flex-col items-center'>
                <Text className='text-center text-xl'>Correo electrónico</Text>
                <TextInput placeholder='Ingresa tu correo' className=' border-b-2  rounded-md w-3/4 ' />
            </View>
            <View className='flex-1 flex-col items-center'>
                <Text className='text-center text-xl'>Contraseña</Text>
                <TextInput placeholder='Ingresa tu contraseña' className=' border-b-2 rounded-md w-3/4  text-black' />
            </View>
            <View className='flex-1 flex-col items-center'>
                <Text className='text-center text-xl'>Confirmar contraseña</Text>
                <TextInput placeholder='Confirma tu contraseña' className=' border-b-2 rounded-md w-3/4  text-black' />
            </View>
            <View className='flex-1 flex-col items-center'>
                          <Text className='text-2xl font-bold text-center'> ¿Todo listo?</Text>
                          <Pressable className='bg-black mt-5 rounded-lg w-2/4' onPress={() => {
                            if(lenght){
                              router.navigate("/")
                              return
                            }
                          setErrorMessage('Todos los campos son requeridos')
                            
                          }}>
                            <Text className='text-xl font-bold text-center text-stone-50 p-3'> Registrarme</Text>
                          </Pressable>
                        </View>
            </View>
            
            <View className='bg-black flex flex-row justify-around p-2'>

            <Pressable className='bg-white h-10 justify-center rounded-lg w-1/2 ' onPress={() => {
                router.navigate("../")
            }}>
                <Text className='text-xl font-bold text-center text-black p-1'> Ya tengo cuenta</Text>
            </Pressable>
            
            </View>
        </View>
        <Modal visible={visible} animationType='fade' transparent={true} className='flex bg-purple-400'>
          <View className=' flex-1 h-screen' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View className='flex bg-transparent  h-1/3  rounded-lg bg-white m-auto w-3/4  '>
              <View className='flex justify-center bg-black'>
                <Text className='text-3xl font-bold text-center text-white m-3'>Aviso</Text>
              </View>
              <View className='flex  border-b border-t border-black h-1/2  my-1 justify-center '>
                <Text className='text-lg text-center'>{errorMessage}</Text>
              </View>
              <View className='flex px-2  w-auto place-self-end items-end  justify-center h-1/4'>
                <Pressable className=' w-auto  rounded-lg bg-black ml-auto ' onPress={() => {
                  SetVisible(false)
                  setErrorMessage('')
                } }>
                  <Text className='text-xl font-bold text-center px-4 py-2 m-2 text-stone-50'>Cerrar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
    </ScrollView>
  )
}

export default signUp

const styles = StyleSheet.create({})