import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const UserScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/avata.jpg')} style={styles.avatar} />

            <TextInput placeholder='Họ và tên' style={styles.textInput} />
            <TextInput placeholder='Ngày sinh' style={styles.textInput} />
            <TextInput placeholder='Email' style={styles.textInput} />
            <TextInput placeholder='Số điện thoại' style={styles.textInput} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButton}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ef7d08'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 50
    },
    textInput: {
        borderWidth: 2,
        width: '75%',
        marginBottom: 25,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#FAC069'
    },
    button: {
        marginHorizontal: 50,
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 15,
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    textButton: {
        fontWeight: 'bold',
        color: 'white'
    }
})

export default UserScreen;