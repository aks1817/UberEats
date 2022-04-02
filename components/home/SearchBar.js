// import { View, Text } from 'react-native'
// import React from 'react'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import AntDesign from 'react-native-vector-icons/AntDesign'

// export default function SearchBar() {
//   return (
//     <View style={{marginTop: 15, flexDirection: "row"}}>
//       <GooglePlacesAutocomplete
//           query={{ key: "AIzaSyBoN8NpTDCEAozWmgtVV5V1Ggx7KaAePmw" }}
//           onPress={(data, details = null) => {
//             const city = data.description.split(',')[0];
//           }}
//           placeholder="Search"
//           styles={{
//               textInput: {
//                   backgroundColor: "#eee",
//                   borderRadius: 20,
//                   fontWeight: "700",
//                   marginTop: 7,
//               },
//               textInputContainer: {
//                   backgroundColor: "#eee",
//                   borderRadius: 50,
//                   flexDirection: "row",
//                   alignItems: "center",
//                   marginRight: 10,
//               },
//           }}
//           renderLeftButton={() => (
//               <View style={{marginLeft: 10}}>
//                   <Ionicons name='location-sharp' size={24} />
//               </View>
//           )}
//           renderRightButton={() => (
//               <View
//                 style={{
//                     flexDirection: "row",
//                     marginRight: 8,
//                     backgroundColor: "white",
//                     padding: 9,
//                     borderRadius: 30,
//                     alignItems: "center"
//                 }}
//               >
//                 <AntDesign name="clockcircle" size={11} style={{marginRight: 6}} />
//                 <Text>Search</Text>
//               </View>
//           )}
//       />
//     </View>
//   );
// }

import { View, Text ,TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function SearchBarTab({cityHandler}) {
    const onChange = () => {
      if(searchText!==undefined){
        cityHandler(searchText);
      }
    }
    const [searchText, setSearchText] = useState();
  return (
      
    <View style={{flexDirection:"row", alignItems:"center", marginTop:10,backgroundColor:"#eee", borderRadius:30,}}>
            <Ionicons name="location-sharp" size={25} style={{marginLeft:10}} />
             <TextInput onChangeText={setSearchText} style={styles.input} placeholder="Search"/>
            <TouchableOpacity 
                onPress={onChange}
            >
                <Ionicons name="search" size={20} style={{marginRight:10}} />
            </TouchableOpacity>       
    </View>
  )
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop:10 ,
    marginBottom:10,
    marginRight:5,
    marginLeft:5,
    borderWidth: 1,
    padding: 10,
    width:300,
    backgroundColor:"#eee",
    borderRadius:30,
    borderColor: "#eee"
  },
});