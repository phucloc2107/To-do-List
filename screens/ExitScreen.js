import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ToastAndroid } from 'react-native';

const ExitScreen = ({ navigation }) => {

    const showExitMess = () => {
        ToastAndroid.show('Đăng xuất thành công!', ToastAndroid.SHORT);
        navigation.navigate('Login')
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => showExitMess()}>
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

export default ExitScreen;