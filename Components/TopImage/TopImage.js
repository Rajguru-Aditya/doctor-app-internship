import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { LinearGradient } from "react-native-linear-gradient";
import styles from "./styles";

const TopImage = () => {
  return (
    <View style={styles.topImageContainer}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#344CB7", "#000957"]}
        style={styles.topImageInnerContainer}
      >
        <View style={styles.leftContainer}>
          <Image
            source={{
              uri: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_practo_care.png",
            }}
            style={styles.practoImage}
          />
          <Text style={styles.practoTitle}>Your are in safe hands</Text>
          <Text style={styles.practoSubtitle}>
            Choose the experts in end to end surgical care
          </Text>
          <TouchableOpacity style={styles.ctaButton} activeOpacity={0.9}>
            <Text style={styles.ctaText}>Know more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={{
              uri: "https://assets.webiconspng.com/uploads/2017/09/Doctors-And-Nurses-PNG-Image-15807.png",
            }}
            style={styles.doctorImg}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default TopImage;
