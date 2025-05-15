import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, Screens } from '../utilities/constants';
import Tile from '../components/Tile';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();
  const handlePress = (categoryId) => {
    navigation.navigate(Screens.meals, {
      categoryId
    })
  }
  return (
    <View style={styles.main}>
      <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => <Tile bgColor={itemData?.item?.color} title={itemData?.item?.title} onPress={handlePress.bind(this, itemData?.item?.id)} />}
        keyExtractor={(item, index) => item.id + index}
        numColumns={2}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    marginTop: 16,
  }
})

export default Categories
