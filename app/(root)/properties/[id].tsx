import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

function Property() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  );
}

export default Property;
