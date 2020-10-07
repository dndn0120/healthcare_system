import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ddayView}>
          <Text style={styles.titleText} >
            HealthCareSystem
          </Text>
        </View>
        <View style={styles.chatView}>
          <TextInput style={styles.chatInput} placeholderTextColor="#9a73ef" placeholder="ID"/>
          <TextInput style={styles.chatInput} placeholderTextColor="#9a73ef" placeholder="PASSWORD"/>
          <TouchableOpacity style={styles.sendButton}>
            <Text>
              회 원 가 입
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ddayView: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
  },
  chatView: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  chatInput: {
    padding:5,
    marginTop:20,
    marginBottom:20,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    borderRadius: 20
  },
  sendButton: {
    marginTop:20,
    backgroundColor: '#9a73ef',
    height: 40,
    width: 300,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
});