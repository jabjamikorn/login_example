import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { mainColor } from './constants/Colors'

const iconSize = 26
const widthDefault = Dimensions.get('window').width * 0.9

function App() {
  const [items, setItems] = useState({
    authFail: false,
    showPassword: false,
    usernameDefault: "test@test.com",
    passwordDefault: "12345678"
  })
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onLogin = () => {
    if (username.trim() === '' || password.trim() === '') return setItems({ ...items, authFail: true })
    if ((username.trim() !== items.usernameDefault) || (password.trim() !== items.passwordDefault)) return setItems({ ...items, authFail: true })
    setItems({ ...items, authFail: false })
    alert("SUCCESS")
    return
  }


  const LOGO = () => {
    return (
      <>
        <View style={{ ...styles.logoWidget }}>
          <View style={{ height: 120 }} />
          <Text style={{ color: "#ffff", fontWeight: 'bold', fontSize: 55 }}>LOGO</Text>
        </View>
        <View style={{ height: 60 }} />
      </>
    )
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <LOGO />

      {/* Username */}
      <View style={{ ...styles.textInput1, borderColor: items.authFail ? "red" : "#EBEBEB" }}>
        <Image source={require('./assets/images/user.png')} style={{ height: iconSize, width: iconSize }} />
        <TextInput
          placeholder='USERNAME'
          autoCapitalize={'none'}
          onChangeText={(text) => setUsername(text)}
          value={username}
          style={{ marginLeft: 15 }}
        />
      </View>
      <View style={{ height: 10 }} />

      {/* Password */}
      <View style={{ ...styles.textInput1, borderColor: items.authFail ? "red" : "#EBEBEB" }} >
        <Image source={require('./assets/images/padlock.png')} style={{ height: iconSize, width: iconSize }} />
        <TextInput
          placeholder='PASSWORD'
          autoCapitalize={'none'}
          secureTextEntry={!items.showPassword}
          style={{ marginLeft: 15, width: "80%" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity onPress={() => setItems({ ...items, showPassword: !items.showPassword })}>
          {
            (items.showPassword) &&
            <Image source={require('./assets/images/show.png')} style={{ height: iconSize, width: iconSize }} />
          }
          {
            (!items.showPassword) &&
            <Image source={require('./assets/images/hide.png')} style={{ height: iconSize, width: iconSize }} />
          }
        </TouchableOpacity>
      </View>

      {
        (items.authFail) &&
        <Text style={{ color: "red", fontSize: 12, marginTop: 8 }}>Username & Password ไม่ถูกต้อง</Text>
      }

      {/* forgot password  */}
      <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 30, marginTop: 8 }}>
        <Text style={{ color: mainColor, fontSize: 12 }}>Forgot password ?</Text>
      </TouchableOpacity>
      <View style={{ height: 60 }} />

      {/* LOGIN Button  */}
      <TouchableOpacity onPress={() => onLogin()}
        style={{ ...styles.textInput1, backgroundColor: mainColor, justifyContent: 'center' }}>
        <Text style={{ color: "#ffff", fontWeight: 'bold', fontSize: 20 }}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  textInput1: {
    width: widthDefault,
    paddingHorizontal: 15,
    height: 60,
    borderColor: "#EBEBEB",
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40
  },
  logoWidget: {
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width,
    backgroundColor: mainColor,
    borderBottomLeftRadius: Dimensions.get('window').height * 0.15,
    borderBottomRightRadius: Dimensions.get('window').height * 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
})