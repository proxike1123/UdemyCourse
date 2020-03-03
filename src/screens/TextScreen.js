import React from 'react';
import { TextInput, View, Text, StyleSheet} from 'react-native';

const TextScreen = () => {
    return (
        <View>
            <TextInput style = {styles.text}/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
    }
})

export default TextScreen;