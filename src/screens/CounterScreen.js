import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase': 
            return {...state, number: state.number + action.payload}
        case 'decrease': 
            return {...state, number: state.number - action.payload}
        default: 
            return state;
    }   
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {number: 0})
    return (
        <View>
            <Button
                title = 'increase'
                onPress = {() => {
                    dispatch({type: 'increase', payload: 1 })
                }}
            />
             <Button
                title = 'decrease'
                onPress = {() => {
                    dispatch({type: 'decrease', payload: 1});
                }}
            />
            <Text>Counter number: {state.number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CounterScreen;