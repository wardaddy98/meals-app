import { StyleSheet, Text, View } from "react-native";

const index = ({ children, textStyles, containerStyles }) => {
  return (
    <View style={[styles.main, containerStyles]}>
      <Text style={[styles.title, textStyles]}>{children}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    borderColor: "#D3D3D3",
    padding: 8,
    marginHorizontal: 8,
    borderRadius: 4,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: 'center',
  },
});
