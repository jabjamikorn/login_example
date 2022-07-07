import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import TextInputCustoms from './components/TextInputCustoms'
import { mainColor, widthDefault } from './constants'


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
    if (username === '' || password === '') return setItems({ ...items, authFail: true })
    if ((username !== items.usernameDefault) || (password !== items.passwordDefault)) return setItems({ ...items, authFail: true })
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
      <TextInputCustoms
        iconLeft={require('./assets/images/user.png')}
        placeholder={"USERNAME"}
        value={username}
        authFail={items.authFail}
        onCallback={(e) => setUsername(e)}
      />
      <View style={{ height: 10 }} />

      {/* Password */}
      <TextInputCustoms
        iconLeft={require('./assets/images/padlock.png')}
        placeholder={"PASSWORD"}
        value={password}
        authFail={items.authFail}
        isPassword={true}
        onCallback={(e) => setPassword(e)}
        visiblePassword={items.showPassword}
        showPassword={() => { setItems({ ...items, showPassword: !items.showPassword }) }}
      />

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