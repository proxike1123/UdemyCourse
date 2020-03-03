import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component {
  render () {
    const name = 'Nguyen Dang Bin';
    const navigate = this.props.navigation.navigate;
    return (
      <View>
        <Text style={styles.text}>Getting started with react native</Text>
        <Text style = {styles.subText}>My name is {name}</Text>
        <Button 
          title = 'Go to ListScreen'
          onPress = { () => navigate('List')}
        />
        <TouchableOpacity onPress = {() => navigate('Image')}>
            <Text>Go to Image Screen</Text>
        </TouchableOpacity>
        <Button 
          title = 'Go to CounterScreen'
          onPress = { () => navigate('Counter')}
        />
        <Button 
          title = 'Go to ColorScreen'
          onPress = { () => navigate('Color')}
        />
        <Button 
          title = 'Go to SqareScreen'
          onPress = { () => navigate('Square')}
        />
        <Button 
          title = 'Go to TextScreen'
          onPress = { () => navigate('Text')}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  subText: {
    fontSize: 20,
  },
});

export default HomeScreen;
