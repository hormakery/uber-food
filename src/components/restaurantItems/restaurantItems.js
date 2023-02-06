import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "The Indian Cuisine",
    image_url:
      "https://smallbizclub.com/wp-content/uploads/2015/12/4-Things-You-Should-Know-About-Opening-a-Restaurant.jpg",
    categories: ["Indian", "Bar"],
    prices: "$$",
    reviews: 123,
    rating: 4.5,
  },
  {
    name: "Sharwama Spot",
    image_url:
      "http://cdn.shopify.com/s/files/1/0549/7369/4067/files/The-Plate_1200px-x-628px.jpg?v=1662352583",
    categories: ["Resturant", "Bar"],
    prices: "$$",
    reviews: 234,
    rating: 5,
  },
  {
    name: "The Place Restaurant",
    image_url:
      "https://businessday.ng/wp-content/uploads/2021/08/Slow-Restaurant.png",
    categories: ["Cafe", "Bar"],
    prices: "$$",
    reviews: 13,
    rating: 1.5,
  },
  {
    name: "BlackBell",
    image_url:
      "https://www.posist.com/restaurant-times/wp-content/uploads/2016/04/traits-successful-restaurant-business.jpg",
    categories: ["Restaurant", "Bar"],
    prices: "$$",
    reviews: 553,
    rating: 3.5,
  },
  {
    name: "Yakoyo",
    image_url:
    "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/a/j/p20996-145631488756cd9a0796608.jpg?tr=tr:n-large",
    categories: ["Restaurant", "Bar"],
    prices: "$$",
    reviews: 53,
    rating: 3,
  },
 
];

const RestaurantItems = (props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.itemContainer}>
      {props.restaurantData.map((restaurant, index) => (
        <View style={styles.container} key={index}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
};

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image
      }}
      style={styles.restuarantImage}
    />
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
      {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>35-40 • mins</Text>
    </View>
    <View
      style={{
        height: 30,
        width: 30,
        borderRadius: 50,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: 'center'
      }}
    >
      <Text style={{fontWeight: '600'}}>{props.rating}</Text>
    </View>
  </View>
);
export default RestaurantItems;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 30,
  },
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#eee",
  },
  iconContainer: {
    top: 20,
    right: 20,
    position: "absolute",
  },
  restuarantImage: {
    height: 180,
    width: "100%",
  },
  infoContainer: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
