import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Specialists = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#516BEB" }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.backBtn}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/24/ffffff/back--v1.png",
            }}
            style={styles.backIcon}
          />
          <Text style={styles.backBtnText}>Back</Text>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Specialist</Text>
        </View>
      </View>
      {/* List */}
    </SafeAreaView>
  );
};

export default Specialists;
