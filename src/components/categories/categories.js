import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../../assets/images/shopping-bag.png"),
    text: "Pick up",
  },
  {
    image: require("../../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../../assets/images/desserts.png"),
    text: "Desserts",
  },
  {
    image: require("../../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {items.map((item, index) => (
        <View style={styles.categories} key={index}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.imageText}>{item.text}</Text>
        </View>
        ))}
        </ScrollView>
        </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
    container:{
        marginTop: 5,
        paddingLeft: 6,
        paddingVertical: 6,
        backgroundColor: '#eee'
    },
  categories: {
    marginRight: 30,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "center",
  },
  imageText: {
    fontSize: 13,
    fontWeight: "900",
  },
});
