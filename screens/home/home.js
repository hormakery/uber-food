import React,{useState} from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import SearchBar from "../../src/components/searchBar/searchBar";
import HeaderTabs from "../../src/components/headerTabs/headerTabs";
import Categories from "../../src/components/categories/categories";
import RestaurantItems, { localRestaurants } from "../../src/components/restaurantItems/restaurantItems";


const API_KEY=''

const Home = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants)
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#eee", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
