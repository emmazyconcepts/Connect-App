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
        <Likes post={post} />
        <Captions post={post} />
        <Comments post={post} />
        <CommentsSection post={post} />
      </View>
    </View>
  );
};

const Comments = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View{post.comments.length > 1 ? " all " : ""}
        {post.comments.length}
        {[post.comments.length > 1 ? " comments" : " comment"]}
      </Text>
    )}
  </View>
);

const CommentsSection = ({ post }) => (
  <Text>
    {post.comments.map((comment, index) => (
      <View key={index} style={{}}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "bold" }}> {comment.user}</Text>s
          {comment.text}
        </Text>
      </View>
    ))}
  </Text>
);

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

const Likes = ({ post }) => (
  <View style={{ marginTop: 4, flexDirection: "row" }}>
    <Text style={{ color: "white", fontWeight: "700" }}>
      {" "}
      {post.likes.toLocaleString("en")} Likes
    </Text>
  </View>
);

const Captions = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      {" "}
      <Text style={{ fontWeight: "bold" }}> {post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

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
            uri: "https://img.icons8.com/ios-glyphs/30/40C057/filled-sent.png",
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
