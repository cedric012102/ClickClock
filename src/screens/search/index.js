// import React, {useState, useEffect} from "react";
// import { View, TextInput } from "react-native";
// import styles from './search-style';
// // import { API, graphqlOperation } from 'aws-amplify';
// import {listUsers} from '../../graphql/queries';

// const Search = () => {

//     // useEffect( () => {
//     //     const fetchUser = async () => {
//     //       //fetch all the users
//     //       try {
//     //           const response = await API.graphql(graphqlOperation(listUsers.map));
//     //           setUsers(response.data.listUsers.items);
//     //       } catch (e) {
//     //         console.error(e);
//     //       }
//     //     };
    
//     //     fetchUser();
//     //   }, []);

//     return (
//         <View style={styles.container}>
//         <TextInput
//         data={users}
//         numberOfLines={5}
//         placeholder={"Search"}
//         style={styles.textInput}
//         />
       
//         </View>
//     );
// };

// export default Search;