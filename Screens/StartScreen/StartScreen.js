import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class StartScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
  

  render() {
    return (
      <View style={styles.container}>      
        <Button
          title={'LoginUser'}
          style={styles.input}
          onPress={()=> this.props.navigation.navigate("Login")}
        />
        <Button
          title={'LoginVendor'}
          style={styles.input}
          onPress={()=>this.props.navigation.navigate("LoginVendor")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
