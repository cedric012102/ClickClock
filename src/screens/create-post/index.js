// import React, { useEffect, useState } from "react";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import { v4 as uuidv4 } from 'uuid';
// import styles from "./create-post-style";
// // import { Storage, API, graphqlOperation, Auth } from 'aws-amplify';
// import {createPost} from '../../graphql/mutations';
// import { useRoute, useNavigation } from '@react-navigation/native';
// import Home from "../home";

// const CreatePost = () => {
//     const [description, setDescription] = useState("");
//     const [videoKey, setVideoKey] = useState(null);
//     const route = useRoute();
//     const navigation = useNavigation();

//     const uploadToStorage = async (imagePath) => {
//         try {
//             const response = await fetch(imagePath);

//             const blob = await response.blob();

//             const fileName = `${uuidv4()}.mp4`;
//             const s3Response = await Storage.put(fileName, blob);

//             setVideoKey(s3Response.key);

//             console.log(s3Response);
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     useEffect( () => {
//         uploadToStorage(route.params.videoUri);
//     }, []);

//     const onPublish = async () => {
//         //upload video to cloud
//         if (!videoKey) {
//             console.warn('Video is not yet uploaded')
//             return;
//         }
        
//         try {

//             const userInfo = await Auth.currentAuthenticatedUser();

//             const newPost = {
//                 videoUri: videoKey,
//                 description: description,
//                 userID: userInfo.attributes.sub,
//                 songID: "c269b9c1-63cb-4190-9191-2d73adcfd447",
//             }

//             const response = await API.graphql(
//                 graphqlOperation(
//                     createPost,
//                     {input: newPost}
//                 ),
//             );
//             navigation.navigate('Home', {screen: 'Home'});
//         } catch (e) {
//             console.error(e)
//         }
//         //create post in database (API)
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//             value={description}
//             onChangeText={setDescription}
//             numberOfLines={5}
//             placeholder={"Description"}
//             style={styles.textInput}
//             />
//             <TouchableOpacity onPress={onPublish}>
//                 <View style={styles.button}>
//             <Text style={styles.buttonText}>Publish</Text>
//             </View>
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default CreatePost;
