import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{alignSelf: 'center', flexDirection: 'row'}}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

 const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      borderRadius: 30,
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: props.activeTab === props.text ? "black" : "white",
    }}
    onPress={() => setActiveTab(props.text)}
  >
    <Text
      style={{
          fontSize: 15,
          fontWeight: "900",
          color: props.activeTab === props.text ? "white" : "black",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({

});
