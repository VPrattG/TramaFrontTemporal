import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, router } from 'expo-router'

const menuDisplay = () => {
  const { data } = useLocalSearchParams()

  const food = [
    { id: 1, name: 'Hamburguesa', price: 20, type: 'Food', photo: require('../../assets/images/hamburguesa.jpeg') },
    { id: 2, name: 'Alfajor', price: 5, type: 'Extras', photo: require('../../assets/images/alfajor.jpg') },
    { id: 3, name: 'Americano', price: 10, type: 'Hot', photo: require('../../assets/images/americano.jpg') },
    { id: 4, name: 'Frappe', price: 15, type: 'Cold', photo: require('../../assets/images/frappe.jpg') },
    { id: 5, name: 'Ciabatta', price: 10, type: 'Food', photo: require('../../assets/images/ciabatta.jpg') },
    { id: 6, name: 'Poptart', price: 5, type: 'Extras', photo: require('../../assets/images/poptart.jpg') },
    { id: 7, name: 'Brownie', price: 10, type: 'Extras', photo: require('../../assets/images/brownie.jpg') },
    { id: 8, name: 'Chai', price: 10, type: 'Hot', photo: require('../../assets/images/chai.jpeg') },
    { id: 11, name: 'Matcha', price: 10, type: 'Hot', photo: require('../../assets/images/matcha.jpg') }
  ]


  return (
    <ScrollView>
      <View clasName='flex '>
        <View className='flex'>
          <Text className='text-center font-bold text-xl pt-3' >Nuestra selección</Text>
        </View>
        <View className='flex flex-row flex-wrap justify-between mx-1 '>
          {food.map((item) => {
            if (item.type === data) {
              console.log('imprimiendo ' + item.name)
              return (
                <Pressable key={item.id} onPress={() => {
                  router.push({
                    pathname: toString(item.id),
                    params: {
                      item: item.name,
                      type: item.type,
                      value: item.price
                    }
                  })
                }} >
                  <View className=' w-28 h-40 bg-black rounded-2xl  mt-5 flex-col ' >
                    <View className=' justify-center align-items-center h-28 w-11/12'>
                      <Image source={item.photo} className='  h-full w-full rounded-2xl mt-5 mr-5 ml-1' />
                    </View>
                    <View className=' align-items-center justify-center mt-3 w-full '>
                      <Text className='  text-xl text-center text-white'>{item.name}</Text>
                    </View>
                  </View>
                </Pressable>
              )
            }
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default menuDisplay

const styles = StyleSheet.create({})