import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../../assets/360l.png")} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.iconscontainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/000000/plus--v1.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency/48/000000/test-account.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: "contain",
  },
  iconscontainer: {
    flexDirection: "row",
  },
  container: {
    justifyContent: "space-between",
    alignitems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
});

export default Header;
