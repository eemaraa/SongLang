import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#B3B3B3"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A2A2A',
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    input: {
        paddingVertical: 15,
        color: 'white',
    },
});

export default CustomInput;
