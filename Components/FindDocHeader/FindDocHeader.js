import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const FindDocHeader = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#516BEB" }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={props.onPress}
          activeOpacity={0.9}
          style={styles.backBtn}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/24/ffffff/back--v1.png",
            }}
            style={styles.backBtnIcon}
          />
          <Text style={styles.backBtnText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Find your health concern</Text>
        <View style={styles.location}>
          <Text style={styles.locationText}>Hyderabad</Text>
          <Image
            style={styles.locationIcon}
            source={{
              uri: "https://img.icons8.com/material/24/ffffff/sort-down--v2.png",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FindDocHeader;
