import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const index = ({ children, style, variant = 'bordered', textStyle }) => {
    return (
        <View style={[styles.common, variant === 'bordered' ? styles.bordered : styles.borderless, style]}>
            <Pressable android_ripple={{ color: 'grey' }} style={({ pressed }) => pressed && styles.pressed}>
                <Text style={[styles.text, textStyle]}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default index;


const styles = StyleSheet.create({
    common: {
        padding: 4
    },
    bordered: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'black',
    },
    borderless: {

    },
    text: {
        color: 'black',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.5
    }
})