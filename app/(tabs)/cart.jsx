import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const cart = () => {

    const cartItems = [{
        id: 1,
        name: 'Coca-Cola',
        price: 10,
        quantity: 2,
    }, {
        id: 2,
        name: 'Papas fritas',
        price: 15,
        quantity: 1,
    }, {
        id: 3,
        name: 'Hamburguesa',
        price: 20,
        quantity: 1,
    }]
  return (
    <ScrollView>
        <View className='flex flex-col  items-center'>
        <View className='flex flex-row w-11/12 b rounded-lg my-2'>
                    <Text className='text-lg font-bold w-1/2 flex-1'>Artículo</Text>
                    <Text className='text-lg font-bold w-1/2 flex-1 text-center'>Cantidad</Text>
                    <Text className=' text-lg font-bold w-1/2 flex-1 text-right'>Total</Text>
                </View>
            {cartItems.map((item) => {
                return(
                
                <View className='flex flex-row w-11/12 border-b rounded-lg my-2' key={item.id}>
                    <Text className='text-lg text-left font-bold w-1/2 flex-1'>{item.name}</Text>
                    <Text className='text-lg font-bold w-1/2 flex-1 text-center'>x{item.quantity}</Text>
                    <Text className=' text-lg font-bold w-1/2 flex-1 text-right'>${item.price * item.quantity}</Text>
                </View>
                )

            })}
            <View className='flex flex-row w-11/12 border-b rounded-lg my-2'>
                    <Text className='text-lg font-bold w-1/2 flex-1'>Total</Text>
                    <Text className='text-lg font-bold w-1/2 flex-1 text-center'> </Text>
                    <Text className=' text-lg font-bold w-1/2 flex-1 text-right'>${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</Text>
            </View>
            
        </View>
        <View>
        <View className=' flex justify-content-center mx-5 ' >
                <Pressable className='bg-black flex-1  rounded-lg my-2'>
                    <Text className='text-2xl text-white text-center m-3 font-bold'>Pagar</Text>
                </Pressable>
            </View>
        </View>
    </ScrollView>
  )
}

export default cart

const styles = StyleSheet.create({})