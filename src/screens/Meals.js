import { useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';
import Tile from '../components/Tile';
import { MEALS, Screens } from '../utilities/constants';

const Meals = ({ navigation }) => {
    const route = useRoute();
    console.log(route.params, 'LKK')

    const handlePress = (mealInfo) => {
        navigation.navigate(Screens.mealDetail, mealInfo)
    }


    return (
        <View style={styles.main}>
            <FlatList
                data={MEALS.filter(meal => meal?.categoryIds.includes(route.params?.categoryId))}
                renderItem={(itemData => <Tile onPress={handlePress.bind(this, itemData.item)} title={itemData?.item?.title} bgColor={itemData?.item?.backgroundColor} />)}
                keyExtractor={(item, index) => item?.id + index}
                numColumns={2}
            />
        </View>


    )
}

export default Meals;



const styles = StyleSheet.create({
    main: {
        marginTop: 16,

    }
})
