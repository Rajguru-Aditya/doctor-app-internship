import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
          }}
          style={styles.userImage}
        />
      </TouchableOpacity>
      <View style={styles.headerRightContainer}>
        <View style={styles.plusContainer}>
          <Text>Explore</Text>
          <View style={styles.plus}>
            <Text style={styles.plusText}>PLUS</Text>
          </View>
        </View>
        <View style={styles.offersContainer}>
          <Image
            source={{
              uri: "https://img.icons8.com/material/24/66DE93/discount--v1.png",
            }}
            style={styles.offerIcon}
          />
          <Text style={styles.offerText}>Offers</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
