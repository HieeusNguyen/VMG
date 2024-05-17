import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {
  useCameraDevice,
  useCameraPermission,
  Camera,
} from 'react-native-vision-camera';
const ScanScreen = ({navigation}) => {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  if (hasPermission === 'denied') return <Text>Permission denied.</Text>;
  if (device == null) return <Text>No camera device found.</Text>;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          marginHorizontal: 20,
          justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/img/back.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20,
          }}>
          VMG TECH
        </Text>
        <View style={{width: 30}}></View>
      </View>
      <View
        style={{
          width: '85%',
          height: '30%',
          alignSelf: 'center',
          marginTop: 50,
        }}>
        <Camera
          style={StyleSheet.absoluteFillObject}
          device={device}
          isActive={true}
        />
      </View>
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 20,
          marginHorizontal: 20,
          textAlign: 'center',
        }}>
        DÙNG CAMERA ĐỂ SCAN MRZ CODE - CHUỖI KÝ TỰ MẶT SAU THẺ CCCD GẮN CHIP Ở
        PHÍA DƯỚI
      </Text>
      <Pressable
        style={{
          backgroundColor: 'green',
          paddingVertical: 15,
          borderRadius: 24,
          width: '80%',
          position: 'absolute',
          bottom: 60,
          left: 30,
          right: 30,
        }}
        onPress={() => navigation.navigate('ImageAvailableScreen')}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          HOẶC CHỌN ẢNH CÓ SẴN
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ScanScreen;
