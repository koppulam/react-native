import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
export default class CustomInput extends Component {
  state = {
    val: ''
  };
  onBlur = () => {
    
    if(this.props.isRequired && this.state.val === '') {
      this.setState({isError: true,val: this.state.val })
    }else {
      this.setState({isError: false, val: this.state.val})
    }
  }
  onChange = (text) => {
    this.setState({val: text})
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>{this.props.label}</Text>
        <TextInput style={styles.inputText} placeholder={this.props.placeholder} onBlur={this.onBlur} onChangeText={this.onChange} value= {this.state.val}/>
        <Text style={ this.state.isError?styles.error: styles.hide}>Please enter{this.props.label}</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10
  },
  inputText: {
     width: '100%',
    height: 40,
    borderColor: '#ddddd',
    borderBottomWidth: 1
  },
  error: {
    color: '#F00'
  },
  hide: {
    display: 'none'
  }
})