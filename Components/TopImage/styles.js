import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topImageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  topImageInnerContainer: {
    height: 180,
    width: 310,
    borderRadius: 30,
    flexDirection: "row",
  },
  leftContainer: {
    margin: 20,
    width: 150,
  },
  practoImage: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  practoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  practoSubtitle: {
    fontSize: 16,
    color: "#ccc",
  },
  ctaButton: {
    width: 100,
    height: 30,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#ccc",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaText: {
    fontSize: 18,
    color: "#fff",
  },
  rightContainer: {
    width: 100,
  },
  doctorImg: {
    width: 70,
    height: 200,
    resizeMode: "cover",
    position: "absolute",
    top: -20,
    right: 10,
  },
});
export default styles;
