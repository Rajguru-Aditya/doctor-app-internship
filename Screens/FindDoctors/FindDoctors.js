import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FindDocHeader from "../../Components/FindDocHeader/FindDocHeader";
import styles from "./styles";

const FindDoctors = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#516BEB" }}>
      <View style={styles.headerContainer}>
        <FindDocHeader />
      </View>
      <View style={styles.lowerContainer}>
        <ScrollView></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FindDoctors;
