import { StyleSheet, Text, View } from 'react-native';

const index = ({title}) => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
export default index;


const styles = StyleSheet.create({
    main: {
        borderRadius: 4,
        padding: 4,
        borderWidth: 2,
        borderColor:'#D3D3D3',
        backgroundColor:'#D3D3D3'
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})              