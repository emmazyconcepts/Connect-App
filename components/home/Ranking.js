import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Ranking = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <Text style={styles.header}>players to watch out for 🔥</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {USERS.map((ranks, index) => {
          return (
            <TouchableOpacity>
              <View key={index} style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: ranks.image }}
                  style={styles.ranksimages}
                />
                <Text style={styles.ranktext}>
                  {ranks.users.length > 6
                    ? ranks.users.slice(0, 6).toLowerCase() + "..."
                    : ranks.users.toLowerCase()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ranksimages: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#04E824",
  },
  ranktext: {
    fontSize: 12,
    color: "#fff",
  },
  header: {
    color: "#fdfffc",
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  testing: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Ranking;
