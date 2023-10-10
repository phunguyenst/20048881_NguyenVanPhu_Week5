import {StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState} from 'react'
import { Entypo, Feather, AntDesign  } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default function screen1(router){
   const navigation = useNavigation()
   const [image , setImage] = useState(require('../assets/vs_blue.jpg'))

//    useEffect(()=>{
//         setImage(router.params);
//    },[router.params])
    return(
        <View style = {styles.container}>
            
            <View style= {{flex: 3, alignItems:"center", justifyContent:"center", marginTop: 30}}>
                <Image source={image} style={{height: 361, width:301}}/>
            </View>
          
           
            <View style = {{flex: 2, flexDirection: "column", padding:10, marginTop:20}}>
            <Text style = {{marginLeft: 20, fontWeight:'450', fontSize:16}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style = {{flexDirection : "row",marginLeft:20,alignItems:"center"}}>
                        <View style = {{flexDirection: "row"}}>
                            <Entypo name="star" size={28} color="yellow" />
                            <Entypo name="star" size={28} color="yellow" />
                            <Entypo name="star" size={28} color="yellow" />
                            <Entypo name="star" size={28} color="yellow" />
                            <Entypo name="star" size={28} color="yellow" />
                        </View>
                        <View style= {{marginLeft:20}}>
                            <Text style= {{marginRight:20}}>(Xem 828 đánh giá)</Text>
                        </View>
                </View>
                <View style = {{flexDirection: "row", marginLeft:25, alignItems:"center"}}>

                    <Text style = {{textDecorationLine: 'line-through', color: 'gray', marginRight:30}}>1.990.000đ</Text>
                    <Text style = {{fontWeight:'bold', fontSize: 18}}>1.690.000đ</Text>
                </View>
                <View style = {{flexDirection: "row", marginLeft:25, alignItems:"center"}}>
                    <Text style= {{color:"red", fontWeight:"bold"}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Feather name="help-circle" size={24} color="black" style ={{marginLeft:10}}/>
                </View>
                <View >
                    {/* <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:20, borderRadius:10,textAlign:"center"}}
                        placeholder="4 MÀU-CHỌN MÀU"
                        right = {
                            <TextInput.Icon
                            icon = "chevron-right"
                            size="24px"
                            color="black"
                            />
                        }
                        onPress = {()=>{
                            navigation.navigate('screen3')
                        }}
                    >

                    </TextInput> */}
                    <TouchableOpacity style = {{height: 40, borderColor: 'yellow', borderWidth: 1, margin:20, borderRadius:10,textAlign:"center"}}
                    
                    onPress = {()=>{
                            navigation.navigate('screen2')
                        }}
                    >
                        <Text style = {{color:"#333", fontWeight:"bold", fontSize:18, textAlign: "center", margin:"auto"}}
                        >4 MÀU-CHỌN MÀU</Text>
                        <AntDesign name="right" size={24} color="black" style = {{position:"absolute", top:5, right:0}}/>
                    </TouchableOpacity>
                </View>
            </View>
          
           <View style ={{flex:1, alignItems:"center"}}>
            <TouchableOpacity style = {{backgroundColor:"#EE0A0A", height:47, width:350, alignItems:"center", borderRadius:10}}>
                <Text style = {{color:"white", fontWeight:"bold", fontSize:18}}>CHỌN MUA</Text>
               
            </TouchableOpacity>
           </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:"center"
       
        
        
    }
})