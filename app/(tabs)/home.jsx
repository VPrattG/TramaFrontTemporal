import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const home = () => {
    const testMovieIamges = [
        { id: 1, photo: require('../../assets/images/taylor.jpg') },
        { id: 2, photo: require('../../assets/images/spiderman.jpg') },
        { id: 3, photo: require('../../assets/images/panda.jpg') },]

    const billboard = [{
        day: 'Lunes',
        movies: [
            { id: 1, photo: require('../../assets/images/taylor.jpg') },
            { id: 2, photo: require('../../assets/images/spiderman.jpg') },
            { id: 3, photo: require('../../assets/images/panda.jpg') },
        ]
    }, {
        day: 'Martes',
        movies: [
            { id: 1, photo: require('../../assets/images/taylor.jpg') },
            { id: 2, photo: require('../../assets/images/spiderman.jpg') },
            { id: 3, photo: require('../../assets/images/panda.jpg') },
        ]
    },
        , {
        day: 'Miercoles',
        movies: [
            { id: 1, photo: require('../../assets/images/taylor.jpg') },
            { id: 2, photo: require('../../assets/images/spiderman.jpg') },
            { id: 3, photo: require('../../assets/images/panda.jpg') },
        ]
    }]
    return (
        <ScrollView>
            <View>
                <ScrollView horizontal>
                    <View className='flex flex-row items-center h-72 w-full pt-5 px-2'>
                        {testMovieIamges.map((item) => {
                            return (<View className=' mx-5 rounded-lg h-full w-96 flex items-center justify-center' key={item.id}>
                                <Image resizeMode='contain' source={item.photo} className='h-full w-full rounded-lg' />
                            </View>)
                        })}
                    </View>
                </ScrollView>
            </View>
            <View className='mt-5'>
                <View className='bg-black'>
                    <Text className='p-5 text-center text-3xl text-white font-bold'>Cartelera semanal</Text>
                </View>
                {billboard.map((item) => {
                    const maxId = Math.max(...item.movies.map((movie) => movie.id))
                    return (<View className=' bg-white rounded-lg my-5' key={item.day}>
                        <View className='bg-black rounded-full m-5'>
                            <Text className='my-5 text-center text-2xl text-white  font-bold'>{item.day}</Text>
                        </View>
                        <View className='flex flex-row items-center h-72 w-full '>
                            <View className='flex flex-row  rounded-lg h-52 w-full  '>
                                {item.movies.map((movie) => {
                                    return (
                                        <View
                                            className={`mx-1 flex-1 w-24 rounded-lg h-full ${movie.id === maxId ? 'border-4 border-black' : ''}`}
                                            key={movie.id}
                                        >
                                            <Image resizeMode='contain' source={movie.photo} className='h-full w-full rounded-lg ' />
                                            {movie.id === maxId ? (<Text className='text-center text-lg  font-bold'>Estelar</Text>) : null}
                                        </View>)
                                })}
                            </View>
                        </View>
                    </View>)
                }
                )}
            </View>
        </ScrollView>
    )
}

export default home

const styles = StyleSheet.create({})