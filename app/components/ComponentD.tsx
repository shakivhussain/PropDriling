import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const ComponentD = () => {

    const context = useContext(UserContext)

    if (!context) {
        throw new Error('Component must use User Provider!')
    }

    const { user, setUser } = context

    return (
        <View>
            <Text>UserName From A == {user}</Text>
        </View>
    )
}

export default ComponentD