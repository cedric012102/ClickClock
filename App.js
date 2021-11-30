import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigator from './src/navigation/home-bottom-tab-navigator';
import CreatePost from './src/screens/create-post';

// import { withAuthenticator } from 'aws-amplify-react-native'
// import {Auth, API, graphqlOperation} from '@aws-amplify/auth';

// import {createUser} from './src/graphql/mutations';
// import { getUser } from './src/graphql/queries';

// const randomImages = [
//   'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
//   'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
//   'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
//   'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
// ];

// const getRandomImage = () => {
//   return randomImages[Math.floor(Math.random() * randomImages.length)];
// };

const Stack = createStackNavigator();

const App = () => {
  
  // useEffect( () => {
  //   const fetchUser = async () => {
  //     // get currently authenticated user
  //     const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true});
  //     if (!userInfo) {
  //       return;
  //     }
  //     //check if user exists in database
  //    const getUserResponse = await API.graphQl(graphqlOperation(
  //      getUser, { id: userInfo.attributes.sub }
  //     )
  //    );

  //    if (getUserResponse.data.getUser) {
  //      console.log("User already exists in database")
  //      return;
  //    }
  //     //if not (new registered user)
  //     //then, create a new user in database
  //     const newUser ={ 
  //       id: userInfo.attributes.sub,
  //       username: userInfo.username,
  //       email: userInfo.attributes.email,
  //       imageUri: getRandomImage(),
  //     };
      
  //     await API.graphQl(graphqlOperation(createUser,
  //       { input: newUser}
  //       )
  //     )
  //   };

  //   fetchUser();
  // }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
            <Stack.Screen 
            name="CreatePost" 
            component={CreatePost} 
            options={{
              headerShown: true, 
              title: 'Post'           
            }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);

//after typing amplify console api, select mutations, press + sign, type for example addUser, select for example, createUser, select fields that are neeeded like email and username
