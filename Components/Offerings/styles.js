import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  offeringsContainer: {
    marginTop: 20,
  },
  offeringsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  containDataItems: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataBox: {
    width: 160,
    height: 190,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  dataBoxOther: {
    backgroundColor: "#E6E6E6",
    width: 100,
    height: 120,
    borderRadius: 20,
    justifyContent: "space-between",
    marginTop: 25,
    paddingTop: 5,
  },
  textContainerOther: {
    height: 40,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    padding: 10,
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
    marginTop: 20,
  },
  offer: {
    width: 60,
    height: 20,
    backgroundColor: "#eee",
    position: "absolute",
    top: 10,
    left: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  offerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  imageOther: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    height: 80,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    color: "#bbb",
  },
  subtitleContainer: {
    width: 100,
  },
  subtitleOther: {
    color: "#bbb",
    fontSize: 16,
    marginTop: 10,
  },
});
export default styles;
