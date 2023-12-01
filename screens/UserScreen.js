import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const UserScreen = () => {

    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../assets/avata.jpg')} style={styles.avatar} />

            <TextInput placeholder='Họ và tên' style={styles.textInput} />
            <TextInput placeholder='Ngày sinh' style={styles.textInput} />
            <TextInput placeholder='Email' style={styles.textInput} />
            <TextInput placeholder='Số điện thoại' style={styles.textInput} onChangeText={onChangeNumber} value={number} keyboardType="numeric" />

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button}>
                    <Text>Setting</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: 35 }}>|</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        borderRadius: 10
    },
    button: {
        marginHorizontal: 50,
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 15,
        width: '25%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default UserScreen