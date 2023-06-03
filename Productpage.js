// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
// } from "react-native";
// import React from "react";
// import React,{userState} from "react";
// import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
// import { navbtn, navbtnin, navbtnout, colors, btn2 } from "../globals/style";
// import {firebase} from '../../Firebase/FirebaseConfig'
// import { StyleSheet,Text,View,Image,TouchableOpacity,ScrollView } from "react-native/types";

// const Productpage = ({ navigation, route }) => {
//   const data = route.params;
//   //console.log('product page data',data)
//   if (route.params === undefined) {
//     navigation.navigate("Home");
//   }
// const [quantity,setQuantity] =useState('1');
// const [addonquantity,setAddonquantitty] =useState('0');
//   const addtocart = () => {

//     //console.log ('add to cart')
//     const docRef =firebase.firestore().collection('UserCart').doc(firebase.auth().app
//      currentUser.uid);
//      const data1 ={data,addonquantity : addonquantity,Foodquantity :quantity}
//      //console.log('data1',data1)
//      docRef.get().then((doc)=>{
//       if(doc.exists){
// docRef.update ({
//   cart:firebase.firestore.FieldValue.arrayUnion(data1)

//   }
// )
// alert("Added to cart")

//       }
//       else{
//         docRef.set({

//         cart:[data1],
//         })
//         alert('Added to cart')
//       }

//      }
//      )

//   }
//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity
//         onPress={() => navigation.navigate("Home")}
//         style={navbtnout}
//       >
//         <View style={navbtn}>
//           <AntDesign name="back" size={24} color="black" style={navbtnin} />
//         </View>
//       </TouchableOpacity>
//       <View style={styles.container1}>
//         <View style={styles.s1}>
//           <Image
//             source={{
//               uri: data.foodImageUrl,
//             }}
//             style={styles.cardimgin}
//           />
//         </View>
//         <View style={styles.s2}>
//           <View style={styles.s2in}>
//             <Text style={styles.head1}>{data.foodName}</Text>
//             <Text style={styles.head2}>{data.foodPrice}/=</Text>
//           </View>
//           <View style={styles.s3}>

//             <Text style={styles.head3}>About Food</Text>
//             <Text style={styles.head4}>{data.foodDescription}</Text>
//             <View style={styles.s3in}>
//               {data.foodType == "veg" ? (
//                 <MaterialCommunityIcons
//                   name="food-drumstick-off"
//                   size={24}
//                   color="#00334d"
//                 />
//               ) : (
//                 <MaterialCommunityIcons
//                   name="food-drumstick"
//                   size={24}
//                   color="#00334d"
//                 />
//               )}
//               <Text style={styles.head5}>{data.foodType}</Text>
//             </View>

//         </View>
//         <View style={style.container2}>

//                 <Text Style={styles.txt1}>Location</Text>
//         <Text style={styles.txt2}> {data.restaurentName}</Text>

//           <View style={styles.container2in}>
//              <Text style={styles.txt3}>{data.restrauntAddressBuilding}</Text>
//          <View style={styles.dash}></View>
//                             <Text style={styles.txt3}>{data.restrauntAddressStreet}</Text>
//                             <View style={styles.dash}></View>
//                             <Text style={styles.txt3}>{data.restrauntAddressCity}</Text>
//                         </View>
//                     </View>
//                 </View>
//         </View>

//         <View style={styles.btncont}>
//           <TouchableOpacity style={btn2} onPress={() =>}>
//             <Text style={styles.btntxt}>Add to Cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={btn2}>
//             <Text style={styles.btntxt}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//     </ScrollView>
//   );
// };
// export default Productpage;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     width: "100%",
//   },
//   container1: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   s1: {
//     width: "100%",
//     height: 300,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cardimgin: {
//     width: "100%",
//     height: "100%",
//   },
//   s2: {
//     width: "100%",
//     padding: 20,
//   },
//   s2in: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   head1: {
//     fontSize: 30,
//     fontFamily: "Poppins_500Medium",
//     color: colors.text1,
//     width: 200,
//     marginRight: 10,
//   },
//   head2: {
//     fontSize: 30,
//     fontFamily: "Poppins_400Regular",
//     color: colors.text3,
//   },
//   s3: {
//     backgroundColor: colors.text1,
//     padding: 20,
//     borderRadius: 20,
//     marginVertical: 10,
//   },
//   head3: {
//     fontSize: 25,
//     fontFamily: "Poppins_300Light",
//     color: colors.col1,
//   },
//   head4: {
//     marginVertical: 10,
//     fontSize: 18,
//     fontFamily: "Poppins_400Regular",
//     color: colors.col1,
//   },
//   s3in: {
//     backgroundColor: colors.col1,
//     padding: 10,
//     borderRadius: 10,
//     width: 130,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   head5: {
//     color: colors.text1,
//     fontSize: 15,
//     fontFamily: "Poppins_400Regular",
//     marginLeft: 10,
//   },
//   btncont: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//     flexDirection: "row",
//   },
//   btntxt: {
//     backgroundColor: colors.text1,
//     color: colors.col1,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     fontSize: 20,
//     fontFamily: "Poppins_400Regular",
//     borderRadius: 10,
//     width: "90%",
//     textAlign: "center",
//   },
// });
// container2: {
//   width: '90%',
//   backgroundColor: colors.col1,
//   padding: 20,
//   borderRadius: 20,
//   alignSelf: 'center',
//   marginVertical: 10,
//   elevation: 10,
//   alignItems: 'center',
// },
// txt1: {
//   color: colors.text1,
//   fontSize: 20,
//   fontWeight: '200',

// },
// txt2: {
//   color: colors.text3,
//   fontSize: 30,
//   fontWeight: '200',
//   marginVertical: 10,

// },
// container2in: {
//   flexDirection: 'row',
//   alignItems: 'center'
// },
// txt3: {
//   color: colors.text1,
//   fontSize: 18,
//   width:'30%'
// },
// dash: {
//   width: 1,
//   height: 20,
//   backgroundColor: colors.text1,
//   marginHorizontal: 10,
// },
// import React, { useState } from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
// } from "react-native";
// import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
// import {
//   navbtn,
//   navbtnin,
//   navbtnout,
//   colors,
//   btn2,
//   hr80,
//   incdecbtn,incdecinput,incdecout
// } from "../globals/style";
// import { firebase } from "../../Firebase/FirebaseConfig";

// const Productpage = ({ navigation, route }) => {
//   const data = route.params;

//   if (route.params === undefined) {
//     navigation.navigate("Home");
//   }

//   const [quantity, setQuantity] = useState("1");
//   const [addonquantity, setAddonQuantity] = useState("0");

//   const addtocart = () => {
//     const docRef = firebase
//       .firestore()
//       .collection("UserCart")
//       .doc(firebase.auth().currentUser.uid);

//     const data1 = {
//       data,
//       addonquantity: addonquantity,
//       Foodquantity: quantity,
//     };

//     docRef.get().then((doc) => {
//       if (doc.exists) {
//         docRef.update({
//           cart: firebase.firestore.FieldValue.arrayUnion(data1),
//         });
//         alert("Added to cart");
//       } else {
//         docRef.set({
//           cart: [data1],
//         });
//         alert("Added to cart");
//       }
//     });
//   };

  
//   const increaseAddonQuantity = () => {
//     setaddonquantity((parseInt(addonquantity) + 1).toString())
// }
// const decreaseAddonQuantity = () => {
//     if (parseInt(addonquantity) > 0) {
//         setaddonquantity((parseInt(addonquantity) - 1).toString())
//     }
// } 
// const increaseAddonQuantity = () => {
//   setaddonquantity((parseInt(addonquantity) + 1).toString())
// }
// const decreaseAddonQuantity = () => {
//   if (parseInt(addonquantity) > 0) {
//       setaddonquantity((parseInt(addonquantity) - 1).toString())
//   }
// } 

//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity
//         onPress={() => navigation.navigate("Home")}
//         style={navbtnout}
//       >
//         <View style={navbtn}>
//           <AntDesign name="back" size={24} color="black" style={navbtnin} />
//         </View>
//       </TouchableOpacity>
//       <View style={styles.container1}>
//         <View style={styles.s1}>
//           <Image
//             source={{
//               uri: data.foodImageUrl,
//             }}
//             style={styles.cardimgin}
//           />
//         </View>
//         <View style={styles.s2}>
//           <View style={styles.s2in}>
//             <Text style={styles.head1}>{data.foodName}</Text>
//             <Text style={styles.head2}>{data.foodPrice}/=</Text>
//           </View>
//           <View style={styles.s3}>
//             <Text style={styles.head3}>About Food</Text>
//             <Text style={styles.head4}>{data.foodDescription}</Text>
//             <View style={styles.s3in}>
//               {data.foodType == "veg" ? (
//                 <MaterialCommunityIcons
//                   name="food-drumstick-off"
//                   size={24}
//                   color="#00334d"
//                 />
//               ) : (
//                 <MaterialCommunityIcons
//                   name="food-drumstick"
//                   size={24}
//                   color="#00334d"
//                 />
//               )}
//               <Text style={styles.head5}>{data.foodType}</Text>
//             </View>
//           </View>
//           <View style={styles.container2}>
//             <Text style={styles.txt1}>Location</Text>
//             <Text style={styles.txt2}> {data.restaurentName}</Text>
//             <View style={styles.container2in}>
//               <Text style={styles.txt3}>{data.restrauntAddressBuilding}</Text>
//               <View style={styles.dash}></View>
//               <Text style={styles.txt3}>{data.restrauntAddressStreet}</Text>
//               <View style={styles.dash}></View>
//               <Text style={styles.txt3}>{data.restrauntAddressCity}</Text>
//             </View>
//           </View>
//         </View>
//       </View>


//       {data.foodAddonPrice && <View style={styles.container3}>
//                         <View style={hr80}></View>

//                         <Text style={styles.txt3}>Add Extra </Text>
//                         <View style={styles.c3in}>
//                             <Text style={styles.text4}>{data.foodAddon}</Text>
//                             <Text style={styles.text4}>₹{data.foodAddonPrice}/-</Text>
//                         </View>

//                         <View style={incdecout}>

//                             <Text onPress={() => increaseAddonQuantity()} style={incdecbtn}>+</Text>
//                             <TextInput value={addonquantity} style={incdecinput} />
//                             <Text onPress={() => decreaseAddonQuantity()} style={incdecbtn}>-</Text>

//                         </View>
//                         {/* <View style={hr80}></View> */}

//                     </View>}

//       <View style={styles.container3}>
//                         <View style={hr80}></View>

//                         <Text style={styles.txt3}>Food Quantity</Text>
//                         <View style={incdecout}>

//                             <Text onPress={() => increaseQuantity()} style={incdecbtn}>+</Text>
//                             <TextInput value={quantity} style={incdecinput} />
//                             <Text onPress={() => decreaseQuantity()} style={incdecbtn}>-</Text>

//                         </View>
//                         <View style={hr80}></View>
//                     </View>
//                     <View style={styles.container4}>
//                         {/* <View style={hr80}></View> */}

//                         <View style={styles.c4in}>
//                             <Text style={styles.txt2}>Total Price</Text>
//                             {data.foodAddonPrice ?
//                                 <Text style={styles.txt3}>₹{
//                                     ((parseInt(data.foodPrice) * parseInt(quantity))
//                                         + parseInt(addonquantity) * parseInt(data.foodAddonPrice)).toString()

//                                 }/-</Text>

//                                 :
//                                 <Text style={styles.txt3}>₹{
//                                     ((parseInt(data.foodPrice) * parseInt(quantity))).toString()
//                                 }/-</Text>
//                             }
//                         </View>

//                         <View style={hr80}></View>
//                     </View>  <View style={styles.container4}>
//                         {/* <View style={hr80}></View> */}

//                         <View style={styles.c4in}>
//                             <Text style={styles.txt2}>Total Price</Text>
//                             {data.foodAddonPrice ?
//                                 <Text style={styles.txt6}>{
//                                     ((parseInt(data.foodPrice) * parseInt(quantity))
//                                         + parseInt(addonquantity) * parseInt(data.foodAddonPrice)).toString()

//                                 }/-</Text>

//                                 :
//                                 <Text style={styles.txt6}>₹{
//                                     ((parseInt(data.foodPrice) * parseInt(quantity))).toString()
//                                 }/-</Text>
//                             }
//                         </View>

//                         <View style={hr80}></View>
//                     </View>






//       <View style={styles.btncont}>
//         <TouchableOpacity style={btn2} onPress={addtocart}>
//           <Text style={styles.btntxt}>Add to Cart</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={btn2}>
//           <Text style={styles.btntxt}>Buy Now</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default Productpage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     width: "100%",
//   },
//   container1: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   s1: {
//     width: "100%",
//     height: 300,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cardimgin: {
//     width: "100%",
//     height: "100%",
//   },
//   s2: {
//     width: "100%",
//     padding: 20,
//   },
//   s2in: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   head1: {
//     fontSize: 30,
//     fontFamily: "Poppins_500Medium",
//     color: colors.text1,
//     width: 200,
//     marginRight: 10,
//   },
//   head2: {
//     fontSize: 30,
//     fontFamily: "Poppins_400Regular",
//     color: colors.text3,
//   },
//   s3: {
//     backgroundColor: colors.text1,
//     padding: 20,
//     borderRadius: 20,
//     marginVertical: 10,
//   },
//   head3: {
//     fontSize: 25,
//     fontFamily: "Poppins_300Light",
//     color: colors.col1,
//   },
//   head4: {
//     marginVertical: 10,
//     fontSize: 18,
//     fontFamily: "Poppins_400Regular",
//     color: colors.col1,
//   },
//   s3in: {
//     backgroundColor: colors.col1,
//     padding: 10,
//     borderRadius: 10,
//     width: 130,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   head5: {
//     color: colors.text1,
//     fontSize: 15,
//     fontFamily: "Poppins_400Regular",
//     marginLeft: 10,
//   },
//   btncont: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//     flexDirection: "row",
//   },
//   btntxt: {
//     backgroundColor: colors.text1,
//     color: colors.col1,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     fontSize: 20,
//     fontFamily: "Poppins_400Regular",
//     borderRadius: 10,
//     width: "90%",
//     textAlign: "center",
//   },
//   container2: {
//     width: "90%",
//     backgroundColor: colors.col1,
//     padding: 20,
//     borderRadius: 20,
//     alignSelf: "center",
//     marginVertical: 10,
//     elevation: 10,
//     alignItems: "center",
//   },
//   txt1: {
//     color: colors.text1,
//     fontSize: 20,
//     fontWeight: "200",
//   },
//   txt2: {
//     color: colors.text3,
//     fontSize: 30,
//     fontWeight: "200",
//     marginVertical: 10,
//   },
//   container2in: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   txt3: {
//     color: colors.text1,
//     fontSize: 18,
//     width: "30%",
//   },
//   dash: {
//     width: 1,
//     height: 20,
//     backgroundColor: colors.text1,
//     marginHorizontal: 10,
//   },
// });
// container3: {
//   width: '90%',
//   alignSelf: 'center',
//   alignItems: 'center',
// },
// txt5: {
//   color: colors.text1,
//   fontSize: 18,
//   //width: "30%",
// },
// c3in: {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   width: '100%',
// },

// text4: {
//   color: colors.text3,
//   fontSize: 20,
//   marginHorizontal: 10,
// },

// container4 : {
//   width: '90%',
//   alignSelf: 'center',
//   alignItems: 'center',
// },

// c4in: {
//   flexDirection: 'row',
//   justifyContent: 'space-evenly',
//   alignItems: 'center',
//   width: '100%',
// }

// txt6: {
//   color: colors.text1,
//   fontSize: 35,
//   //width: "30%",
// },
// })

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  navbtn,
  navbtnin,
  navbtnout,
  colors,
  btn2,
  hr80,
  incdecbtn,
  incdecinput,
  incdecout,
} from "../globals/style";
import { firebase } from "../../Firebase/FirebaseConfig";

const Productpage = ({ navigation, route }) => {
  const data = route.params;

  if (route.params === undefined) {
    navigation.navigate("Home");
  }

  const [quantity, setQuantity] = useState("1");
  const [addonquantity, setAddonQuantity] = useState("0");

  const addtocart = () => {
    const docRef = firebase
      .firestore()
      .collection("UserCart")
      .doc(firebase.auth().currentUser.uid);

    const data1 = {
      data,
      addonquantity: addonquantity,
      Foodquantity: quantity,
    };

    docRef.get().then((doc) => {
      if (doc.exists) {
        docRef.update({
          cart: firebase.firestore.FieldValue.arrayUnion(data1),
        });
        alert("Added to cart");
      } else {
        docRef.set({
          cart: [data1],
        });
        alert("Added to cart");
      }
    });
  };

  const increaseAddonQuantity = () => {
    setAddonQuantity((parseInt(addonquantity) + 1).toString());
  };

  const decreaseAddonQuantity = () => {
    if (parseInt(addonquantity) > 0) {
      setAddonQuantity((parseInt(addonquantity) - 1).toString());
    }
  };

  const increaseQuantity = () => {
    setQuantity((parseInt(quantity) + 1).toString());
  };

  const decreaseQuantity = () => {
    if (parseInt(quantity) > 0) {
      setQuantity((parseInt(quantity) - 1).toString());
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={navbtnout}
      >
        <View style={navbtn}>
          <AntDesign name="back" size={24} color="black" style={navbtnin} />
        </View>
      </TouchableOpacity>
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image
            source={{
              uri: data.foodImageUrl,
            }}
            style={styles.cardimgin}
          />
        </View>
        <View style={styles.s2}>
          <View style={styles.s2in}>
            <Text style={styles.head1}>{data.foodName}</Text>
            <Text style={styles.head2}>{data.foodPrice}/=</Text>
          </View>
          <View style={styles.s3}>
            <Text style={styles.head3}>About Food</Text>
            <Text style={styles.head4}>{data.foodDescription}</Text>
            <View style={styles.s3in}>
              {data.foodType == "veg" ? (
                <MaterialCommunityIcons
                  name="food-drumstick-off"
                  size={24}
                  color="#00334d"
                />
              ) : (
                <MaterialCommunityIcons
                  name="food-drumstick"
                  size={24}
                  color="#00334d"
                />
              )}
              <Text style={styles.head5}>{data.foodType}</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <Text style={styles.txt1}>Location</Text>
            <Text style={styles.txt2}> {data.restaurentName}</Text>
            <View style={styles.container2in}>
              <Text style={styles.txt3}>{data.restrauntAddressBuilding}</Text>
              <View style={styles.dash}></View>
              <Text style={styles.txt3}>{data.restrauntAddressStreet}</Text>
              <View style={styles.dash}></View>
              <Text style={styles.txt3}>{data.restrauntAddressCity}</Text>
            </View>
          </View>
        </View>
      </View>

      {data.foodAddonPrice && (
        <View style={styles.container3}>
          <View style={hr80}></View>
          <Text style={styles.txt3}>Add Extra </Text>
          <View style={styles.c3in}>
            <Text style={styles.text4}>{data.foodAddon}</Text>
            <Text style={styles.text4}>₹{data.foodAddonPrice}/-</Text>
          </View>
          <View style={incdecout}>
            <Text onPress={increaseAddonQuantity} style={incdecbtn}>
              +
            </Text>
            <TextInput value={addonquantity} style={incdecinput} />
            <Text onPress={decreaseAddonQuantity} style={incdecbtn}>
              -
            </Text>
          </View>
        </View>
      )}

      <View style={styles.container3}>
        <View style={hr80}></View>
        <Text style={styles.txt3}>Food Quantity</Text>
        <View style={incdecout}>
          <Text onPress={increaseQuantity} style={incdecbtn}>
            +
          </Text>
          <TextInput value={quantity} style={incdecinput} />
          <Text onPress={decreaseQuantity} style={incdecbtn}>
            -
          </Text>
        </View>
        <View style={hr80}></View>
      </View>

      <View style={styles.container4}>
        <View style={styles.c4in}>
          <Text style={styles.txt2}>Total Price</Text>
          {data.foodAddonPrice ? (
            <Text style={styles.txt3}>
              ₹
              {(
                parseInt(data.foodPrice) * parseInt(quantity) +
                parseInt(addonquantity) * parseInt(data.foodAddonPrice)
              ).toString()}/-
            </Text>
          ) : (
            <Text style={styles.txt3}>
              ₹
              {(
                parseInt(data.foodPrice) * parseInt(quantity)
              ).toString()}/-
            </Text>
          )}
        </View>
        <View style={hr80}></View>
      </View>

      <View style={styles.container4}>
        <View style={styles.c4in}>
          <Text style={styles.txt2}>Total Price</Text>
          {data.foodAddonPrice ? (
            <Text style={styles.txt6}>
              {(
                parseInt(data.foodPrice) * parseInt(quantity) +
                parseInt(addonquantity) * parseInt(data.foodAddonPrice)
              ).toString()}/-
            </Text>
          ) : (
            <Text style={styles.txt6}>
              ₹
              {(
                parseInt(data.foodPrice) * parseInt(quantity)
              ).toString()}/-
            </Text>
          )}
        </View>
        <View style={hr80}></View>
      </View>

      <View style={styles.btncont}>
        <TouchableOpacity style={btn2} onPress={addtocart}>
          <Text style={styles.btntxt}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btn2}>
          <Text style={styles.btntxt}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container2: {
    marginTop: 20,
  },
  container2in: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container3: {
    marginTop: 20,
  },
  c3in: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  container4: {
    marginTop: 20,
  },
  c4in: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  btncont: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  btntxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  txt1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txt2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  txt3: {
    fontSize: 14,
  },
  txt4: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  txt6: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  hr80: {
    height: 0.5,
    backgroundColor: '#000000',
    opacity: 0.5,
    marginTop: 10,
  },
  dash: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#000000',
    opacity: 0.5,
    marginHorizontal: 5,
    marginTop: 7,
  },
  incdecout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  incdecbtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    fontSize: 20,
  },
  incdecinput: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    fontSize: 14,
    width: 40,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});
