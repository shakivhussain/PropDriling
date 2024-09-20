import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComponentA = ({ username }: { username: string }) => {
    
    return (
        <View>
            <Text>Component A</Text>
        </View>
    )
}

export default ComponentA

const styles = StyleSheet.create({})