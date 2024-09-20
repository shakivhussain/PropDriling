import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { RandomNumberContext } from '../context/RandomNumberContext'

const RandomeNumber = () => {


    const { num } = useContext(RandomNumberContext)

    return (
        <View>
            <Text>Number List</Text>

            <FlatList data={num}
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>
                    <Text>{item.name}</Text>
                } />
        </View>
    )
}

export default RandomeNumber