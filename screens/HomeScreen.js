import { WebBrowser } from 'expo';
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, View, Button } from 'react-native';
import { MonoText } from '../components/StyledText';


'use strict';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
state = {
    nama: '',
    nik: '',
    dob:'',
    cif:'',
    norek: ''
 }
 handleNama = (text) => {
    this.setState({ nama: Text })
 }
 handleNIK = (text) => {
    this.setState({ nik: Number })
 }
 handleDOB = (text) => {
   this.setDOB({ dob: Date})
 }
 handleCIF = (text) => {
   this.setCIF({ cif: Text})
 }
 handleNoRek = (text) => {
    this.setNoRek({ norek:Number})
 }
 login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
 }
  render() {
    return (

      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/brilogo.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
            <Text style={styles.bigTitle}>BRI Master Data Management</Text>

            <Text style={styles.smallTitle}>CIF Deduplication Search </Text>
          </View>        

          <ScrollView style={styles.containerColumn} contentContainerStyle={styles.searchtext}>
              <View style={styles.searchtext}>
                <Text>NIK:</Text>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = " "
                  placeholderTextColor = "#000000"
                  autoCapitalize = "none"
                  onChangeText = {this.handleNIK}/>
              </View>
              <View style={styles.searchtext}>
                <Text>Nama Customer:</Text>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = " "
                  placeholderTextColor = "#000000"
                  autoCapitalize = "none"
                  onChangeText = {this.handleNama}/>
              </View>
              <View style={styles.searchtext}>
                <Text>Date of Birth:</Text>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = " "
                  placeholderTextColor = "#000000"
                  autoCapitalize = "none"
                  onChangeText = {this.handleDOB}/>
              </View>
              <View style={styles.searchtext}>
                <Text>CIF:</Text>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = " "
                  placeholderTextColor = "#000000"
                  autoCapitalize = "none"
                  onChangeText = {this.handleCIF}/>
              </View>
              <View style={styles.searchtext}>
                <Text>No. Rekening:</Text>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = " "
                  placeholderTextColor = "#000000"
                  autoCapitalize = "none"
                  onChangeText = {this.handleNoRek}/>
              </View>
              <View style={styles.searchBttn}>
                <Button onPress={() => {
                    Alert.alert('You tapped the button!');
                  }}
                  title="Search"
                />
              </View>
            </ScrollView>
            
        </ScrollView>

      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  bigTitle: {
    color: '#000066',
    fontWeight: 'bold',
    fontSize: 25
  },
  smallTitle: {
    color: '#000066',
    fontSize: 20
  },
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    marginTop: 50
  },
  containerCenter: {
    alignContent: 'center',
    alignItems: 'center'
  },
  containerColumn: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  searchtext: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: 12,
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'center', 
    alignItems: 'stretch'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  input: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    height: 40,
    borderColor: '#000000',
    fontSize: 18,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  searchBttn: {
    alignItems: 'center',
    margin: 10
  }
});
