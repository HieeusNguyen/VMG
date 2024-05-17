import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchImageLibrary as _launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from '@react-native-ml-kit/text-recognition';
let launchImageLibrary = _launchImageLibrary;

const ImageAvailableScreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState('');
  const [text, setText] = useState('');

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleResponse = response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
    }
  };

  const recognitionText = async () => {
    if (selectedImage != '') {
      const result = await TextRecognition.recognize(selectedImage);
      if (selectedImage != undefined) {
        setText(result.text);
      }
    }
  };

  useEffect(() => {
    recognitionText();
  }, [selectedImage]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{width: '90%', height: '60%', alignSelf: 'center'}}
          resizeMode="contain"
        />
      )}
      <View
        id="buttons"
        style={{
          flexDirection: 'row',
          gap: 20,
          justifyContent: 'center',
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: '40%',
            padding: 15,
            borderRadius: 99,
          }}
          onPress={openImagePicker}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              textAlign: 'center',
              fontWeight:'bold'
            }}>
            BỘ SƯU TẬP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: '40%',
            padding: 15,
            borderRadius: 99,
          }}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              textAlign: 'center',
              fontWeight:'bold'
            }}>
            QUAY LẠI
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={{color: '#000'}}>{text}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImageAvailableScreen;
