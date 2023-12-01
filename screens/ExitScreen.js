import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ExitScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Image source={require('../assets/exit.png')} style={styles.img} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ef7d08',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 350,
        height: 350
    }
})

export default ExitScreen