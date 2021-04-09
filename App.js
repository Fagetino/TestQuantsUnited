import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function App() {
  return (
    <View style={styles.main_container}>
      <View style={styles.header_container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>Settings</Text>
          <Icon name='more-horizontal' type='feather' color='#fff' size='40'/> 
        </View>
        <View style={styles.title_container}>
          <Text style={styles.text}>Please select your risk profile</Text>
          <Icon name='fingerprint' type='material' color='#fff' size='40'/>
        </View>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    
    flex: 1,
    backgroundColor: '#495466',
  },
  header_container: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  title: {
    color: '#fff',
    fontSize: 30
  },
  text:{
    color: '#fff',
    fontSize: 14
  }
});
