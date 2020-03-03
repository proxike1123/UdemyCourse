import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';

const ColorScreen = () => {
    const [color, setColor] = useState([]);
    console.log(color);
    return (
        <View>
            <Button
                title = 'add new color'
                onPress = {() => {
                    setColor([...color, ramdomRgb()]);
                }}
            />
            <FlatList
                data = {color}
                keyExtractor = {item => item}
                renderItem = {({item}) => {
                    return  <View style = {{ height: 100, width: 100, backgroundColor: item}}/>
                }}
            />
        </View>
    );
};

const ramdomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}
const styles = StyleSheet.create({

});

export default ColorScreen;