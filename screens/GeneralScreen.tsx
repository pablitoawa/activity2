import { Button, StyleSheet, Text, View, Image, LogBox, Alert, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../config/Config';

export default function GeneralScreen() {

  const [imagen, setImagen] = useState(' ')

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagen(result.assets[0].uri);
    }
  };


  async function subirImagen() {
    const timestamp = Date.now();
    const nombre = `avatar_${timestamp}.jpg`;

    const storageRef = ref(storage, 'test/' + nombre);

    try {
      const response = await fetch(imagen);
      const blob = await response.blob();

      await uploadBytes(storageRef, blob, {
        contentType: 'image/jpg'
      });

      console.log('La imagen se subió con éxito');
      Alert.alert('Exito', 'La imagen se subió con éxito')

      // Obtiene la URL de la imagen
      const imageURL = await getDownloadURL(storageRef);
      console.log('URL de desacarga de la imagen', imageURL);
    } catch (error) {
      console.error(error);
    }
  }




  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20 }} > Subir una foto desde la camara</Text>
      <TouchableOpacity
        onPress={() => pickImage()}
        style={styles.button_model}>
        <Text style={{ color: '#fff' }}>
          Abrir cámara
        </Text>
      </TouchableOpacity>

      <Image source={{ uri: imagen }} style={{ width: 250, height: 250, margin: 20 }} />

      <TouchableOpacity
        onPress={() => subirImagen()}
        style={styles.button_model}>
        <Text style={{ color: '#fff' }}>
          Subir imagen
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
  }
})