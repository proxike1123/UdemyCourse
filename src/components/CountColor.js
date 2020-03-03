import React from 'react';
import {View, Button, Text} from 'react-native';

const CountColor = ({color, onPressIn, onPressDec}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title = {`More ${color}`}
                onPress = {onPressIn}
            />
            <Button
                title = {`Less ${color}`}
                onPress = {onPressDec}
            />
        </View>
    )
}

export default CountColor;