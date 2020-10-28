import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button
} from 'react-native'
import ToDo from './components/ToDo'
import Amplify, { Auth  } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'

import config from './aws-exports'
Amplify.configure(config)

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
  ] 
};


const App = () => {
  
  return (
    <View style={styles.container}>

      <ToDo />
    </View>
    
    )
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
  })
  
  
  
  // export default withAuthenticator(App);
  export default withAuthenticator(App, { signUpConfig });