import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import React,{userState} from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { navbtn, navbtnin, navbtnout, colors, btn2 } from "../globals/style";
import {firebase} from '../../Firebase/FirebaseConfig'
import { StyleSheet,Text,View,Image,TouchableOpacity,ScrollView } from "react-native/types";

const Productpage = ({ navigation, route }) => {
  const data = route.params;
  //console.log('product page data',data)
  if (route.params === undefined) {
    navigation.navigate("Home");
  }
const [quantity,setQuantity] =useState('1');
const [addonquantity,setAddonquantitty] =useState('0');
  const addtocart = () => {

    //console.log ('add to cart')
    const docRef =firebase.firestore().collection('UserCart').doc(firebase.auth().app
     currentUser.uid);
     const data1 ={data,addonquantity : addonquantity,Foodquantity :quantity}
     //console.log('data1',data1)
     docRef.get().then((doc)=>{
      if(doc.exists){
docRef.update ({
  cart:firebase.firestore.FieldValue.arrayUnion(data1)
  
  }
)
alert("Added to cart") 


      }
      else{
        docRef.set({


        cart:[data1],
        })
        alert('Added to cart')
      }

     }
     )
   

  }
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
        <View style={style.container2}> 
  
                <Text Style={styles.txt1}>Location</Text>
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

        <View style={styles.btncont}>
          <TouchableOpacity style={btn2} onPress={() =>}>
            <Text style={styles.btntxt}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btn2}>
            <Text style={styles.btntxt}>Buy Now</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};
export default Productpage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  container1: {
    flex: 1,
    backgroundColor: "#fff",
  },
  s1: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardimgin: {
    width: "100%",
    height: "100%",
  },
  s2: {
    width: "100%",
    padding: 20,
  },
  s2in: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  head1: {
    fontSize: 30,
    fontFamily: "Poppins_500Medium",
    color: colors.text1,
    width: 200,
    marginRight: 10,
  },
  head2: {
    fontSize: 30,
    fontFamily: "Poppins_400Regular",
    color: colors.text3,
  },
  s3: {
    backgroundColor: colors.text1,
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  head3: {
    fontSize: 25,
    fontFamily: "Poppins_300Light",
    color: colors.col1,
  },
  head4: {
    marginVertical: 10,
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    color: colors.col1,
  },
  s3in: {
    backgroundColor: colors.col1,
    padding: 10,
    borderRadius: 10,
    width: 130,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  head5: {
    color: colors.text1,
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
    marginLeft: 10,
  },
  btncont: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  btntxt: {
    backgroundColor: colors.text1,
    color: colors.col1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
    borderRadius: 10,
    width: "90%",
    textAlign: "center",
  },
});
container2: {
  width: '90%',
  backgroundColor: colors.col1,
  padding: 20,
  borderRadius: 20,
  alignSelf: 'center',
  marginVertical: 10,
  elevation: 10,
  alignItems: 'center',
},
txt1: {
  color: colors.text1,
  fontSize: 20,
  fontWeight: '200',

},
txt2: {
  color: colors.text3,
  fontSize: 30,
  fontWeight: '200',
  marginVertical: 10,

},
container2in: {
  flexDirection: 'row',
  alignItems: 'center',
},
txt3: {
  color: colors.text1,
  fontSize: 18,
  width:'30%'
},
dash: {
  width: 1,
  height: 20,
  backgroundColor: colors.text1,
  marginHorizontal: 10,
},