import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import OfferingsData3 from "../../data/OfferingsData3";
import styles from "./styles";

const OffersView = () => {
  return (
    <View style={styles.offersViewContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.offersScrollView}
      >
        {OfferingsData3.map((data, index) => (
          <View
            style={[
              styles.offersDataContainer,
              { backgroundColor: data.bgColor },
            ]}
            key={index}
          >
            <View style={styles.leftContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.subtitle}>{data.subtitle}</Text>
              <TouchableOpacity activeOpacity={0.9} style={styles.ctaButton}>
                <Text style={styles.ctaText}>USE CODE: PRACTO30</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rightContainer}>
              <Image
                source={{
                  uri: data.image,
                }}
                style={styles.dataImage}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default OffersView;
