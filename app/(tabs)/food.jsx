import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const food = () => {
  return (
    <ScrollView >
        <View className='mb-5'>
            <Text className='font-bold text-2xl ml-5 mt-5'>Bebidas calientes</Text>
            <View className='  bg-black flex rounded-lg mx-2'>
                <Pressable onPress={() => {
                    console.log('navegando')
                    router.push({
                        pathname: "/menuDisplay",
                        params: {data: 'Hot'}
                    })
                }}>
                    <Image className='h-52 w-full rounded-2xl '  source={require('../../assets/images/americano.jpg')} />
                </Pressable>      
            </View>
            <Text className='font-bold text-2xl ml-5 mt-5'>Bebidas frías</Text>
            <View className='  bg-black flex rounded-lg mx-2'>
                <Pressable onPress={() => {
                    router.push({
                        pathname: "/menuDisplay",
                        params: {data: 'Cold'}
                    })
                }}>
                    <Image className='h-52 w-full rounded-2xl '  source={require('../../assets/images/frappe.jpg')} />
                </Pressable>
            </View>
            <Text className='font-bold text-2xl ml-5 mt-5'>Alimentos</Text>
            <View className='  bg-black flex rounded-lg mx-2'>
                <Pressable onPress={() => {
                    router.push({
                        pathname: "/menuDisplay",
                        params: {data: 'Food'}
                    })
                }}>
                    <Image className='h-52 w-full rounded-2xl '  source={require('../../assets/images/ciabatta.jpg')} />
                </Pressable>
            </View>
            <Text className='font-bold text-2xl ml-5 mt-5'>Extras</Text>
            <View className='  bg-black flex rounded-lg mx-2'>
                <Pressable onPress={() => {
                    router.push({
                        pathname: "/menuDisplay",
                        params: {data: 'Extras'}
                    })
                }}>
                    <Image className='h-52 w-full rounded-2xl '  source={require('../../assets/images/poptart.jpg')} />
                </Pressable>
            </View>
        </View>
    </ScrollView>
  )
}

export default food
