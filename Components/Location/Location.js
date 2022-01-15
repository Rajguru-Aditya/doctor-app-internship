import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Location = () => {
  return (
    <View style={styles.locationContainer}>
      <Image
        source={{
          uri: "https://img.icons8.com/material/24/0F4C75/marker--v1.png",
        }}
        style={styles.locationIcon}
      />
      <Text style={styles.locationText}>Hyderabad</Text>
      <Image
        source={{
          uri: "https://img.icons8.com/material/24/0F4C75/expand-arrow--v3.png",
        }}
        style={styles.locationIcon}
      />
    </View>
  );
};

export default Location;
