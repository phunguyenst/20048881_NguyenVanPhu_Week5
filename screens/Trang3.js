import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState} from "react";

import { TextInput } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
export default function Trang3({}) {
    const natigation = useNavigation()
    const [image ,setImage] = useState(require("../assets/vs_blue.jpg"))
    const [text, setText] = useState("xanh")
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{ height: 132, width: 112 }}
          resizeMode="contain"
          source={image}
        ></Image>
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            Điện thoại Vsmart Joy 3
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            Hàng chính hãng
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            Màu: <span style={{fontWeight:"bold"}}>{text}</span>
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            Cung cấp bởi: <span style={{fontWeight:"bold"}}>Tiki Tradding</span>
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            1.690.000
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#C4C4C4", flex: 4 }}>
        <Text style ={{margin:20, fontSize: 18, fontWeight:"400"}}>Chọn một màu bên dưới: </Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            style={{marginBottom:10, backgroundColor: "#C5F1FB", width: 85, height: 80 }}
            onPress={()=>{
                setImage(require("../assets/vs_silver.jpg"))
                setText("bạc")
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{marginBottom:10,  backgroundColor: "#F30D0D", width: 85, height: 80 }}
            onPress={()=>{
                setImage(require("../assets/vs_red.jpg"))
                setText("đỏ")
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{marginBottom:10,  backgroundColor: "#000", width: 85, height: 80 }}
            onPress={()=>{
                setImage(require("../assets/vs_black.jpg"))
                setText("đen")
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{marginBottom:10,  backgroundColor: "#234896", width: 85, height: 80 }}
            onPress = {()=>{
                setImage(require("../assets/vs_blue.jpg"))
                setText("xanh")
            }}
          ></TouchableOpacity>
        </View>
        <View style = {{flex: 1, alignItems:"center", marginTop:30}}>
            <TouchableOpacity style = {{backgroundColor: "#234896", height: 50, width: 370, borderRadius: 10
                
            }}
            onPress={()=>{
                natigation.navigate("screen1", image)
            }}
            >
                <Text style ={{textAlign:"center", margin:"auto", color:"#fff", fontSize: "20px"}}>XONG</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
