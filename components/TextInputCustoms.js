import React from 'react'
import { View, TextInput, Image, TouchableOpacity } from 'react-native'
import { widthDefault } from '../constants'

const iconSize = 26

const TextInputCustoms = ({
    value = "",
    onCallback = () => { },
    authFail = false,
    isPassword = false,
    visiblePassword = false,
    showPassword = () => { },
    placeholder = "",
    iconLeft = "",
}) => {
    return (
        <View style={{ ...styles.textInput1, borderColor: authFail ? "red" : "#EBEBEB" }}>
            <Image source={iconLeft} style={{ height: iconSize, width: iconSize }} />
            <TextInput
                placeholder={placeholder}
                autoCapitalize={'none'}
                onChangeText={(text) => {
                    if (onCallback) {
                        onCallback(text.trim())
                    }
                }}
                value={value}
                style={{ marginLeft: 15, width: "80%" }}
                secureTextEntry={(!visiblePassword && isPassword)}
            />
            {
                (isPassword) &&
                <TouchableOpacity onPress={() => { if (showPassword) showPassword() }}>
                    {
                        (visiblePassword) &&
                        <Image source={require('../assets/images/show.png')} style={{ height: iconSize, width: iconSize }} />
                    }
                    {
                        (!visiblePassword) &&
                        <Image source={require('../assets/images/hide.png')} style={{ height: iconSize, width: iconSize }} />
                    }
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = {
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
}

export default TextInputCustoms