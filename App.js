import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet, TextInput, Button
} from 'react-native'
import ToDo from './components/ToDo'
import Amplify, { Auth  } from 'aws-amplify'
import { Authenticator, SignIn } from 'aws-amplify-react-native'

import config from './aws-exports'
Amplify.configure(config)

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

export default App;