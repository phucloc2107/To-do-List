import React from 'react';
import { StyleSheet, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, Layout, Text, Icon } from '@ui-kitten/components';

const LogInScreen = ({ navigation, props }) => {

    const [showPassword, setShowPassword] = React.useState(true);

    const navigateTab = () => {
        navigation.navigate('Tab');
    };

    const showPasswordIcon = (props) => (
        <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
            <Icon
                {...props}
                name={!showPassword ? 'eye-off-outline' : 'eye-outline'}
            />
        </TouchableWithoutFeedback>
    );

    return (
        <Layout style={styles.container}>
            <StatusBar hidden />

            <Layout style={styles.LoginForm}>
                <Text style={styles.TextName}>ĐĂNG NHẬP</Text>

                <Input
                    style={styles.TextInput}
                    placeholder='Email'
                />
                <Input
                    style={styles.TextInput}
                    placeholder='Mật khẩu'
                    secureTextEntry={!showPassword}
                    accessoryRight={showPasswordIcon}
                />

                <Button onPress={navigateTab} style={styles.button}>
                    <Text>Đăng nhập</Text>
                </Button>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ef7d08',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginForm: {
        backgroundColor: '#FAC069',
        borderWidth: 1,
        borderRadius: 15,
        width: '70%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    TextName: {
        fontSize: 32,
        marginBottom: 20,
        color: 'black'
    },
    TextInput: {
        backgroundColor: '#F9FCFD',
        margin: 10,
        color: 'black',
    },
    button: {
        width: '60%',
        backgroundColor: 'black',
    },
})

export default LogInScreen