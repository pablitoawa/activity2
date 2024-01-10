import { Button, StyleSheet, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

//FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function LoginScreen({ navigation }: any) {
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [obsecureText, setObsecureText] = useState(true)


  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Drawer_Welcome")
        setcorreo('');
        setcontrasenia('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)

        switch (errorCode) {
          case 'auth/invalid-email':
            Alert.alert("ERROR", "Credenciales incorrectas");
            break;
          case 'auth/missing-password':
            Alert.alert("ERROR", "Ingrese la contraseña");
            break;
          case 'auth/wrong-password':
            Alert.alert("ERROR", "Contraseña incorrecta");
            setcontrasenia('')
            break;
          case 'auth/user-not-found':
            Alert.alert("ERROR", "Usuario no encontrado, por favor, registrate!");
            break;
          case 'auth/too-many-requests':
            Alert.alert("ERROR", "Tu cuenta ha sido temporalmente desactivada debido a los multiples intentos fallidos de inicio de sesión, vuelve a intentarlo más tarde.");
            setcorreo('');
            setcontrasenia('');
            break;
          default:
            Alert.alert("ERROR");
            break;
        }
        setcorreo('');
        setcontrasenia('');
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
          onPress={() => login()}
          style={styles.button_model}>
          <Text style={{ color: '#fff' }}>
            INGRESAR
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