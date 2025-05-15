import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const index = ({ bgColor, title, onPress }) => {
    return (
        <View style={[styles.main, { backgroundColor: bgColor }]}>
            <Pressable android_ripple={{ color: 'grey' }} style={({ pressed }) => [styles.pressable, pressed && styles.pressed]} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default index



const styles = StyleSheet.create({
    main: {
        padding: 8,
        borderWidth: 2,
        borderColor: 'grey',
        height: 150,
        borderRadius: 4,
        margin: 16,
        flex: 1,
    },
    title: {
        fontWeight: 600,
        fontSize: 16
    },
    pressed: {
        opacity: 0.25
    },

    pressable: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})