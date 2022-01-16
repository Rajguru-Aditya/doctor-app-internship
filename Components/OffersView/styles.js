import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  offersViewContainer: {
    marginVertical: 10,
  },
  offersDataContainer: {
    backgroundColor: "#B1D0E0",
    width: 250,
    height: 110,
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  leftContainer: {
    padding: 10,
    width: 170,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    color: "#666",
  },
  ctaButton: {
    width: 110,
    height: 25,
    borderRadius: 10,
    backgroundColor: "#516BEB",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaText: {
    fontSize: 12,
    color: "#fff",
  },
  dataImage: {
    height: 100,
    width: 60,
    marginTop: 10,
    resizeMode: "contain",
  },
});
export default styles;
