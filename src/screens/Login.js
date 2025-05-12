import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import Button from '../components/Button';
import commonStyles from '../styles/common';
import { Colors, Screens } from '../utilities/constants';

const Login = ({ navigation }) => {
    function handleSignIn() {
        navigation.navigate(Screens.categories)
    }
    return (
        <SafeAreaView style={styles.safe_area_view}>
            <ScrollView style={commonStyles.flex1} contentContainerStyle={styles.contentContainerStyle}>
                <KeyboardAvoidingView style={[commonStyles.flex1, styles.avoidingView]} behavior='position'>

                    <View style={styles.container}>

                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder='Email' placeholderTextColor="#000000" />
                            <TextInput style={styles.input} placeholder='Password' placeholderTextColor="#000000" />
                            <Button textStyle={styles.forgotPassButton} variant='borderless'>Forgot Password?</Button>
                            <Button onPress={handleSignIn} style={styles.buttonStyles}>Sign In</Button>
                        </View>
                    </View>
                </KeyboardAvoidingView>

            </ScrollView>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safe_area_view: {
        flex: 1,
    },

    container: {
        width: '100%',
        alignItems: 'center'
    },

    contentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContainer: {
        backgroundColor: Colors.accent,
        width: '80%',
        padding: 12,
        alignItems: 'center',
        borderRadius: 4
    },

    avoidingView: {
        width: '100%',
        justifyContent: 'center'
    },


    input: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 4,
        marginVertical: 8,
        borderRadius: 4,
        color: 'black',
        width: '100%'
    },
    buttonStyles: {
        width: '40%',
        marginTop: 20
    },
    forgotPassButton: {
        color: 'blue'
    }
});

export default Login
