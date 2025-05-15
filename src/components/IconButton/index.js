import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, StyleSheet } from 'react-native';


const index = ({ onPress, icon, iconColor = 'black', iconSize = 24 }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.main, pressed && styles.pressed]} android_ripple={{ color: 'grey' }}>
            <AntDesign name={icon} size={iconSize} color={iconColor} />
        </Pressable>
    )
}

export default index

const styles = StyleSheet.create({
    main: {
        padding: 1,
        borderRadius:4,
        borderWidth:1,
        borderColor:'#D3D3D3',
        alignItems:'center',
        justifyContent:'center',
    },
    pressed: {
        opacity: 0.25
    }
})