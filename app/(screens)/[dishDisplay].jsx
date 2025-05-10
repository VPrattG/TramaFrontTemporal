import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { MinusIcon, PlusIcon } from '../../assets/icons/icons'
import { router } from 'expo-router'

const dishDisplay = () => {

  const getType = () => {
    switch (type) {
      case 'Food':
        return (<View>
          <View className=''>
            {Object.entries(detailsFood).map(([key, value]) => {
              return (
                <View className='flex-row justify-between items-center content-center mx-1 ' key={key}>
                  <View className='flex-1'>
                    <Text className='text-center text-xl'>{key}</Text>
                  </View>
                  <Pressable className='mt-5 flex-1 mx-5' onPress={() => {
                    SetDetailsFood({ ...detailsFood, [key]: false })
                  }}>
                    <View className={`rounded-full ${!detailsFood[key] ? 'bg-black' : 'bg-white'}`} >
                      <Text className={`text-xl text-center p-3 px-5 ${!detailsFood[key] ? 'text-white' : 'text-black'}`} >No</Text>
                    </View>
                  </Pressable>
                  <Pressable className='mt-5 flex-1 mx-5' onPress={() => SetDetailsFood({ ...detailsFood, [key]: true })}>
                    <View className={`rounded-full ${detailsFood[key] ? 'bg-black' : 'bg-white'}`} >
                      <Text className={`text-xl text-center p-3 px-5 ${detailsFood[key] ? 'text-white' : 'text-black'}`} >Sí</Text>
                    </View>
                  </Pressable>
                </View>

              )
            })}
          </View>

        </View>)
      case 'Hot':
      case 'Cold':
        const translations = {
          sugar: 'Azúcar (en cucharadas)',
          brownSugar: 'Azúcar morena (en cucharadas)',
          marshmallows: 'Bombón',
          whippedCream: 'Crema batida',
        }
        return (<View className='flex '>
          {detailsDrink && Object.entries(detailsDrink).filter(([key]) => !['milkType', 'syrup', 'frappeFlavor'].includes(key)).map(([key, value]) =>
          (
            <View className='mt-5' key={key}>

              {key === 'sugar' || key === 'brownSugar' ? (
                <View>
                  <Text className='text-center text-lg'>{translations[key]}</Text>

                  <View className='flex-row justify-between items-center content-center mx-5 '>
                    <View >
                      <Pressable onPress={() => {
                        if (detailsDrink[key] == 0)
                          return
                        SetDetailsDrink({ ...detailsDrink, [key]: detailsDrink[key] - 1 })
                      }}>
                        <MinusIcon size={42} />
                      </Pressable>
                    </View>
                    <View>
                      <Text className='text-center text-2xl'>{value}</Text>
                    </View>
                    <View>
                      <Pressable onPress={() => {
                        if (detailsDrink[key] == 10)
                          return
                        SetDetailsDrink({ ...detailsDrink, [key]: detailsDrink[key] + 1 })
                      }}>
                        <PlusIcon size={42} />
                      </Pressable>
                    </View>
                  </View>
                </View>) : (
                <View className='flex-row justify-between items-center content-center mx-1 ' key={key}>
                  <View className='flex-1'>
                    <Text className='text-center text-xl'>{translations[key]}</Text>
                  </View>
                  <Pressable className='mt-5 flex-1 mx-5' onPress={() => {
                    SetDetailsDrink({ ...detailsDrink, [key]: false })
                  }}>
                    <View className={`rounded-full ${!detailsDrink[key] ? 'bg-black' : 'bg-white'}`} >
                      <Text className={`text-xl text-center p-3 px-5 ${!detailsDrink[key] ? 'text-white' : 'text-black'}`} >No</Text>
                    </View>
                  </Pressable>
                  <Pressable className='mt-5 flex-1 mx-5' onPress={() => SetDetailsDrink({ ...detailsDrink, [key]: true })}>
                    <View className={`rounded-full ${detailsDrink[key] ? 'bg-black' : 'bg-white'}`} >
                      <Text className={`text-xl text-center p-3 px-5 ${detailsDrink[key] ? 'text-white' : 'text-black'}`} >Sí</Text>
                    </View>

                  </Pressable>
                </View>
              )}

            </View>
          )
          )}
        </View>)
    }
  }

  const AttributeSelector = () => {
    //encapsular botones de combo y leche
    switch (details.type) {
      case 'Food':
        return (<>

          <View className='flex flex-row'>
            <Pressable className='flex-1' onPress={() => setIsCombo(true)}>

              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${isCombo ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${isCombo ? 'text-white' : 'text-black'} `}>Combo</Text>
              </View>
            </Pressable>
            <Pressable className='flex-1' onPress={() => setIsCombo(false)}>

              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${!isCombo ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${!isCombo ? 'text-white' : 'text-black'} `}>Sencillo</Text>
              </View>
            </Pressable>
          </View>
          {isCombo ? (<Text className='text-center text-xl'>Nota: los pedidos serán en combo</Text>) : (<Text className='text-center text-xl'>Nota: los pedidos serán sencillos</Text>)}
        </>)
      case 'Hot':
      case 'Cold':
        const milkType = ['entera', 'deslactosada', 'almendra', 'Sin leche']
        const syrup = ['sabor vainilla', 'sabor caramelo', 'sabor crema irlandesa', 'natural']
        return (<>
          <Text className='text-center text-2xl font-bold'>Tipo de leche</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row'>
            <Pressable className='flex' onPress={() => SetDetailsDrink({ ...detailsDrink, milkType: 0 })}>
              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.milkType === 0 ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.milkType === 0 ? 'text-white' : 'text-black'} `}>Entera</Text>
              </View>
            </Pressable>
            <Pressable className='flex' onPress={() => SetDetailsDrink({ ...detailsDrink, milkType: 1 })}>
              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.milkType === 1 ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.milkType === 1 ? 'text-white' : 'text-black'} `}>Deslactosada</Text>
              </View>
            </Pressable>
            <Pressable className='flex' onPress={() => SetDetailsDrink({ ...detailsDrink, milkType: 2 })}>
              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.milkType === 2 ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.milkType === 2 ? 'text-white' : 'text-black'} `}>Almendra</Text>
              </View>
            </Pressable>
            <Pressable className='flex' onPress={() => SetDetailsDrink({ ...detailsDrink, milkType: 3 })}>
              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.milkType === 3 ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.milkType === 3 ? 'text-white' : 'text-black'} `}>Sin leche</Text>
              </View>
            </Pressable>
          </ScrollView>

          <Text className='text-center text-2xl font-bold mt-5'>Sabor</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row'>
            <Pressable className='flex' onPress={() => SetDetailsDrink({ ...detailsDrink, syrup: 0 })}>
              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.syrup === 0 ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.syrup === 0 ? 'text-white' : 'text-black'} `}>Vainilla</Text>
              </View>
            </Pressable>
            <Pressable className='flex' onPress={() => SetDetailsDrink({ ...detailsDrink, syrup: 1 })}>
              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.syrup === 1 ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.syrup === 1 ? 'text-white' : 'text-black'} `}>Caramelo</Text>
              </View>
            </Pressable>
            <Pressable className='flex' onPress={() => SetDetailsDrink({ ...detailsDrink, syrup: 2 })}>
              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.syrup === 2 ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.syrup === 2 ? 'text-white' : 'text-black'} `}>Crema irlandesa</Text>
              </View>
            </Pressable>
            <Pressable className='flex' onPress={() => SetDetailsDrink({ ...detailsDrink, syrup: 3 })}>
              <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.syrup === 3 ? 'bg-black border border-white' : 'bg-white'} `}>
                <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.syrup === 3 ? 'text-white' : 'text-black'} `}>Natural</Text>
              </View>
            </Pressable>
          </ScrollView>
          {detailsDrink.milkType !== 3 ? (<Text className='text-center text-xl mx-5 '>Nota: los pedidos serán con leche {milkType[detailsDrink.milkType]} y sabor {syrup[detailsDrink.syrup]}.</Text>) : (<Text className='text-center text-xl'>Nota: los pedidos serán sin leche y sabor {syrup[detailsDrink.syrup]}.</Text>)}

        </>)
      default:
        break;
    }
  }
  const [FinalDish, SetFinalDish] = useState(null)
  const { item, type, value } = useLocalSearchParams()
  const [isCombo, setIsCombo] = useState(true)
  const [details, SetDetails] = useState({
    name: item,
    type: type,
    quantity: 1,
    price: value
  })

  const [detailsFood, SetDetailsFood] = useState({
    cebolla: true,
    tomate: true,
    lechuga: true,
    pepinillos: true,
    combo: isCombo,
  })
  const [detailsDrink, SetDetailsDrink] = useState({
    milkType: 0,
    sugar: 0,
    brownSugar: 0,
    syrup: 0,
    frappeFlavor: 0,
    marshmallows: false,
    whippedCream: false,
  })
  useEffect(() => {
    console.log(details.type)
  }, [details.type])

  useEffect(() => {
    if (FinalDish === null) {
      return
    }
    console.log(FinalDish), [FinalDish]
  })

  return (
    <ScrollView className='flex-1 '>
      <Stack.Screen options={{ title: item }} />
      <View className='flex-1 flex-col py-1 mb-5'>

        <View className='flex flex-col '>
          <View className='flex justify-center'>
            <View className='bg-black flex-1 h-52'></View>
            <View className=''>
              <Text className='text-lg my-5 font-bold mx-1 text-justify'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor . </Text>

            </View>
          </View>

        </View>
        <View className='flex '>
          {AttributeSelector()}
        </View>

        <Text className='text-center text-2xl font-bold mt-5'>Cantidad</Text>
        <View className='flex '>
          <View className='flex'>

            <View className='flex justify-between flex-row mx-5 '>
              <View className='content-center items-center'>
                <Pressable onPress={() => {
                  if (details.quantity == 1)
                    return
                  SetDetails({ ...details, quantity: details.quantity - 1 })
                }}>
                  <MinusIcon size={42} />
                </Pressable>
              </View>
              <View className='flex-1 content-center items-center justify-center '>
                <Text className='text-2xl'>{details.quantity}</Text>
              </View>
              <View>
                <Pressable onPress={() => {
                  if (details.quantity == 10)
                    return
                  SetDetails({ ...details, quantity: details.quantity + 1 })
                }}>
                  <PlusIcon size={42} />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        {details.type !== 'Extras' ? (<Text className='text-center text-2xl font-bold mt-5'>Especificaciones</Text>) : (<></>)}


        <View className=''>
          {getType()}
          <View className='flex align-content-center justify-center'>
            <Pressable onPress={() => {
              switch (details.type) {
                case 'Food':
                  SetFinalDish({ ...details, ...detailsFood })
                  break;
                case 'Hot':
                case 'Cold':
                  SetFinalDish({ ...details, ...detailsDrink })
                  break;
                case 'Extras':
                  SetFinalDish(details)
                  break;
              }
              router.navigate({
                pathname: "cart",
                params: {
                  item: details.name,
                  quant: details.quantity,
                  value: details.price
                }
              }
              )


            }
              // Logica del fetch para pedido de comida aqui  
            }
            >
              <View className='bg-black rounded-xl mt-5 mx-5'>
                <Text className='text-2xl text-center text-white p-3'>Listo</Text>
              </View>
            </Pressable>
          </View>

        </View>
      </View>
    </ScrollView>
  )
}

export default dishDisplay
