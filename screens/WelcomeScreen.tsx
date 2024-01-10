import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://media.tenor.com/wJ1f-nu2nggAAAAi/wave-bye.gif' }} style={styles.img} />
      <TouchableOpacity
        onPress={() => { }}
        style={styles.button_model}>
        <Text style={{ color: '#fff' }}>
          CERRAR SESION
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff1e6',
    alignItems: 'center'
  },
  button_model: {
    width: '80%',
    height: 35,
    backgroundColor: '#b8b8ff',
    borderColor: '#5cbdbb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  img: {
    width: 300,
    height: 250,
    marginBottom: 30
  }
})