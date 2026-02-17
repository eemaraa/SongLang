import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPressed = () => {
        // Mock login logic
        if (email && password) {
            console.log('Logging in with:', email);
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Please enter email and password.');
        }
    };

    return (
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Welcome to SongLang</Text>
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
            <CustomButton title="Login" onPress={onLoginPressed} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
});

export default LoginScreen;
