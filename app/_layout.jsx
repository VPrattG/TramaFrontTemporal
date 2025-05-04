import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const screensLayout = () => {
  return (
    <Stack options={{headerShown:false}}>
        <Stack.Screen name='(auth)' options={{headerShown:false}}/>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
        <Stack.Screen name='(screens)' options={{headerShown:false}}/>
    </Stack>
  )
}

export default screensLayout

const styles = StyleSheet.create({})