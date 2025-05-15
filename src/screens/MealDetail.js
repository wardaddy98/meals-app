import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Chip from '../components/Chip';
import Title from '../components/Title';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import useClipboard from '../customHooks/useClipboard';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../utilities/constants';

const MealDetail = ({ route }) => {
    const mealInfo = route?.params;
    const navigation = useNavigation();
    const { copyToClipboard } = useClipboard();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton icon='copy1' onPress={handleClipboardCopy} />,
        })
    }, [navigation]);

    const handleClipboardCopy = () => {
        copyToClipboard(`Ingredients: ${mealInfo?.ingredients?.join(',')} | Steps : ${mealInfo?.steps?.join(',')}`)
    }

    return (
        <LinearGradient style={styles.main} colors={[Colors.primary, Colors.secondary]}>
            <ScrollView style={styles.main}>
                <Image style={styles.mealImage} source={{ uri: mealInfo?.imageUrl }} resizeMode='stretch' />
                <Title containerStyles={styles.titleContainer}>{mealInfo?.title}</Title>
                <View style={styles.detailsTray}>
                    <Chip title={`${mealInfo?.duration} mins`} />
                    <Chip title={_.capitalize(mealInfo?.affordability)} />
                    <Chip title={mealInfo?.isGlutenFree ? 'Gluten Free' : 'Not Gluten Free'} />
                    <Chip title={mealInfo?.isVegan ? 'Vegan' : 'Not Vegan'} />
                    <Chip title={mealInfo?.isLactoseFree ? 'Lactose Free' : 'Not Lactose Free'} />
                    <Chip title={mealInfo?.isVegetarian ? 'Vegetarian' : 'Non Vegetarian'} />
                </View>

                <Text style={styles.subTitle}>
                    Ingredients
                </Text>
                <View style={styles.list}>
                    {
                        mealInfo?.ingredients?.map((ingredient, index) => (
                            <View key={index} style={styles.listItem}>
                                <Text style={styles.bullet}>.</Text>
                                <Text>{ingredient}</Text>
                            </View>
                        ))
                    }
                </View>

                <Text style={styles.subTitle}>
                    Steps :
                </Text>
                <View style={styles.list}>
                    {
                        mealInfo?.steps?.map((step, index) => (
                            <View key={index} style={styles.listItem}>
                                <Text style={styles.bullet}>.</Text>
                                <Text>{step}</Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </LinearGradient>

    )
}

export default MealDetail




const styles = StyleSheet.create({
    main: {
        flex: 1,
    },

    titleContainer: {
        marginVertical: 18,
    },

    mealImage: {
        width: '100%',
        height: 180
    },
    detailsTray: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8,
        flexWrap: 'wrap',
        marginHorizontal: 8,

    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 8,
        marginTop: 20,
        marginBottom: 12
    },
    list: {
        marginHorizontal: 16
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    bullet: {
        fontSize: 18,
        lineHeight: 22,
    }
})