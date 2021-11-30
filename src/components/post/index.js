import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
// import {Storage, Auth} from 'aws-amplify';

import Video from 'react-native-video';
import styles from './post-style';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  // const [videoUri, setVideoUri] = useState('');

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };


  // const getVideoUri = async () => {
  //   if(post.videoUri.startsWith('http')) {
  //     setVideoUri(post.videoUri);
  //     return;
  //   }
  //   setVideoUri(await DataStore.get(post.videoUri));
  // }

  // useEffect(() => {
  //   getVideoUri();
  // },[]);

  // const [users, setUsers] = useState([]); //. this is how you usestate product from models. will be an array.
  // useEffect(() => { //double parenthese in useeffect
  //     Storage.query(User).then(setUsers); //put what you want to query in parentheses. this querys all products. put .then and put setter in parentheses.
  // }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            source={{uri: post.videoUri}}
            style={styles.video}
            onError={(e: LoadError) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />

          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <View style={styles.profilePictureContainer}>
                <Image
                  style={styles.profilePicture}
                  source={{
                    uri: post.user.imageUri
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}>
                <Ionicons
                  name={'heart-circle'}
                  size={40}
                  color={isLiked ? 'blue' : 'white'}
                />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </TouchableOpacity>

              <View style={styles.iconContainer}>
                <FontAwesome name={'comment'} size={40} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>

              <View style={styles.iconContainer}>
                <FontAwesome name={'share'} size={35} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>

                <View style={styles.songRow}>
                  <Feather name={'music'} size={24} color="white" />
                  <Text style={styles.songName}>{post.song}</Text>
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={{
                  uri: post.songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
