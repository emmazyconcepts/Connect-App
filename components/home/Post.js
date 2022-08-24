import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: post.profile_picture }}
          style={styles.ranksimages}
        />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>
    </TouchableOpacity>

    <View>
      <TouchableOpacity>
        <Text style={{ color: "white", fontWeight: "700" }}>...</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => <Icons />;

const Icons = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "33%",
      }}
    >
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/fluency/48/000000/filled-like.png",
          }}
          style={{ width: 33, height: 33 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{ width: 33, height: 33 }}
          source={{
            uri: "https://img.icons8.com/sf-ultralight-filled/48/40C057/comments.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/windows/64/40C057/share.png",
          }}
          style={{ width: 33, height: 33 }}
        />
      </TouchableOpacity>
    </View>

    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://img.icons8.com/fluency/48/000000/filled-like.png",
          }}
          style={{ marginRight: 10, width: 33, height: 33 }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  ranksimages: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#04E824",
  },
});

export default Post;
