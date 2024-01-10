import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

//FIREBASE
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function RegistroScreen({ navigation }: any) {
  const [correo, setcorreo] = useState('')
  const [edad, setedad] = useState('')
  const [username, setusername] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [obsecureText, setObsecureText] = useState(true)

  function registro() {
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        console.log("REGISTRO CORRECTO");
        navigation.navigate('Drawer_Welcome')
        setcorreo('');
        setcontrasenia('');
        setedad('');
        setusername('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode)

        switch (errorCode) {
          case 'auth/weak-password':
            Alert.alert("ERROR", "Contraseña muy corta (minimo 6 caracteres)");
            setcontrasenia('')
            break;
          case 'auth/invalid-email':
            Alert.alert("ERROR", "Correo no valido");
            setcorreo('')
            break;
          case 'auth/missing-password':
            Alert.alert("ERROR", "Ponga una contraseña")
            break;
          case 'auth/missing-email':
            Alert.alert("ERROR", "Ponga un correo")
            break;
          default:
            Alert.alert("ERROR");
            break;
        }
        setcorreo('');
        setcontrasenia('');
        setedad('');
        setusername('');
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Correo electrónico</Text>
        <View>
          <View style={styles.inputWrapper} >
            <MaterialCommunityIcons
              name='email-outline'
              size={20}
              color={'#000'}
            />
            <TextInput
              placeholder='Ingresar email'
              keyboardType='email-address'
              onChangeText={(texto: any) => setcorreo(texto)}
              value={correo}
              style={styles.inputText}
            />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Username</Text>
          <View>
            <View style={styles.inputWrapper} >
              <MaterialCommunityIcons
                name='at'
                size={20}
                color={'#000'}
              />
              <TextInput
                placeholder='Ingrese un alias'
                onChangeText={(texto: any) => setusername(texto)}
                value={username}
                style={styles.inputText_2row}
              />
            </View>
          </View>
        </View>
        <View style={styles.wrapper}>
        <Text style={styles.label}>Edad</Text>
        <View>
          <View style={styles.inputWrapper} >
            <MaterialCommunityIcons
              name='face-man-outline'
              size={20}
              color={'#000'}
            />
            <TextInput
              placeholder='Ingrese su edad'
              keyboardType='numeric'
              onChangeText={(texto: any) => setedad(texto)}
              value={edad}
              style={styles.inputText_2row}
            />
          </View>
        </View>
      </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Contraseña</Text>
        <View>
          <View style={styles.inputWrapper} >
            <MaterialCommunityIcons
              name='lock-outline'
              size={20}
              color={'#000'}
            />
            <TextInput
              secureTextEntry={obsecureText}
              placeholder='Ingresar contraseña'
              onChangeText={(texto: any) => setcontrasenia(texto)}
              value={contrasenia}
              style={styles.inputText}
            />

            <TouchableOpacity onPress={() => { setObsecureText(!obsecureText) }}>
              <MaterialCommunityIcons
                name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                size={20}
              />
            </TouchableOpacity>

          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => registro()}
          style={styles.button_model}>
          <Text style={{ color: '#fff' }}>
            REGISTRARME
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff1e6'
  },
  inputWrapper: {
    borderColor: '#ed8796',
    backgroundColor: '#fff1e6',
    borderWidth: 5,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center"
  },
  wrapper: {
    marginBottom: 30
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right"
  },
  inputText: {
    marginLeft: 10,
    flex: 1
  },
  inputText_2row: {
    marginLeft: 10,
    maxWidth: 100
  },
  button_model: {
    width: '80%',
    height: 35,
    backgroundColor: '#b8b8ff',
    borderColor: '#5cbdbb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})