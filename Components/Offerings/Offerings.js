import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import OfferingsData1 from "../../data/OfferingsData";
import OfferingsData2 from "../../data/OfferingsData2";

import styles from "./styles";

const Offerings = (props) => {
  return (
    <View style={styles.offeringsContainer}>
      <Text style={styles.offeringsTitle}>Our Offerings</Text>
      <View style={styles.containDataItems}>
        {OfferingsData1.map((data, index) => (
          <TouchableOpacity
            activeOpacity={0.9}
            key={index}
            onPress={props.onPress}
          >
            <View style={[styles.dataBox, { backgroundColor: data.bgColor }]}>
              <Image style={styles.image} source={{ uri: data.image }} />
              {data.offer ? (
                <View style={styles.offer}>
                  <Text style={styles.offerText}>{data.offer}</Text>
                </View>
              ) : null}
              <View style={styles.textContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.subtitle}>{data.subtitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.containDataItems}>
        {OfferingsData2.map((data, index) => (
          <View style={styles.dataItemsContainer} key={index}>
            <TouchableOpacity activeOpacity={0.9}>
              <View style={styles.dataBoxOther}>
                <Image style={styles.imageOther} source={{ uri: data.image }} />
                <View style={styles.textContainerOther}>
                  <Text style={styles.title}>{data.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitleOther}>{data.subtitle}</Text>
            </View>
          </View>
        ))}

        {/* 1 */}
        {/* <View style={styles.dataItemsContainer}>
          <View style={styles.dataBoxOther}>
            <Image style={styles.image} />
            <View style={styles.textContainerOther}>
              <Text style={styles.title}>Hello</Text>
            </View>
          </View>
          <Text style={styles.subtitleOther}>Subtitle</Text>
        </View> */}

        {/* 1 */}
        {/* <View style={styles.dataItemsContainer}>
          <View style={styles.dataBoxOther}>
            <Image style={styles.image} />
            <View style={styles.textContainerOther}>
              <Text style={styles.title}>Hello</Text>
            </View>
          </View>
          <Text style={styles.subtitleOther}>Subtitle</Text>
        </View> */}
      </View>
    </View>
  );
};

export default Offerings;
