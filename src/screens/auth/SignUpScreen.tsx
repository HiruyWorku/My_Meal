import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AppSaveView from "../../components/views/AppSaveView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextinput";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import AppText from "../../components/texts/AppText";
import { useNavigation } from "@react-navigation/native";
import SignInScreen from "./SignInScreen";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView} from 'react-native';

  


const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);
  const [isSelected7, setSelection7] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.logoWrapper}>
        <Image source={IMAGES.appLogo} style={styles.logo} />
        <Image source={IMAGES.apptext} style={styles.logotext} />
      </View>
      <AppTextInput 
        placeholder="User Name" 
        value={userName}
        onChangeText={setUserName}
        secureTextEntry={false}
        keyboardType="default"
      />

      <AppTextInput 
        placeholder="Email" 
        value={email}
        onChangeText={setEmail}
        secureTextEntry={false}
        keyboardType="email-address"
      />

      <AppTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        keyboardType="default"
      />
      <View style={styles.filterBox}>  
        <TouchableOpacity
          onPress={() => {
            setIsVisible(!isVisible);
          }}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Ionicons name="menu" size={30} color={AppColors.primaryColor} />
          <Text>Filters</Text>
        </TouchableOpacity>
      </View>
      {isVisible && (
 <View style={styles.revealedBox}>
 <View style={styles.checkboxRow}>

<View style={styles.checkbox}>
 <TouchableOpacity style={styles.checkbox}
 onPress={() => {setSelection(!isSelected)}
 }>
<Ionicons name={isSelected ? 'checkbox' : 'square-outline'} size={30} color={AppColors.primaryColor}>
</Ionicons>
<Text>Vegan</Text>
 </TouchableOpacity>
 </View>
 
 <View style={styles.checkbox}>
 <TouchableOpacity style={styles.checkbox}
 onPress={() => {setSelection1(!isSelected1)}
 }>
<Ionicons name={isSelected1 ? 'checkbox' : 'square-outline'} size={30} color={AppColors.primaryColor}>
</Ionicons>
<Text>Vegetarian</Text>
 </TouchableOpacity>
 </View>

 <View style={styles.checkbox}>
 <TouchableOpacity style={styles.checkbox}
 onPress={() => {setSelection2(!isSelected2)}
 }>
<Ionicons name={isSelected2 ? 'checkbox' : 'square-outline'} size={30} color={AppColors.primaryColor}>
</Ionicons>
<Text>Kosher</Text>
 </TouchableOpacity>
 </View>

 <View style={styles.checkbox}>
 <TouchableOpacity style={styles.checkbox}
 onPress={() => {setSelection3(!isSelected3)}
 }>
<Ionicons name={isSelected3 ? 'checkbox' : 'square-outline'} size={30} color={AppColors.primaryColor}>
</Ionicons>
<Text>Halal</Text>
 </TouchableOpacity>
 </View>

 <View style={styles.checkbox}>
 <TouchableOpacity style={styles.checkbox}
 onPress={() => {setSelection4(!isSelected4)}
 }>
<Ionicons name={isSelected4 ? 'checkbox' : 'square-outline'} size={30} color={AppColors.primaryColor}>
</Ionicons>
<Text>Carnivore</Text>
 </TouchableOpacity>
</View>

 <View style={styles.checkbox}>
 <TouchableOpacity style={styles.checkbox}
 onPress={() => {setSelection5(!isSelected5)}
 }>
<Ionicons name={isSelected5 ? 'checkbox' : 'square-outline'} size={30} color={AppColors.primaryColor}>
</Ionicons>
<Text>Dairy Free</Text>
 </TouchableOpacity>
 </View>

 <View style={styles.checkbox}>
 <TouchableOpacity style={styles.checkbox}
 onPress={() => {setSelection6(!isSelected6)}
 }>
<Ionicons name={isSelected6 ? 'checkbox' : 'square-outline'} size={30} color={AppColors.primaryColor}>
</Ionicons>
<Text>Gluten Free</Text>
 </TouchableOpacity>
 </View>

<View style={styles.checkbox}>
 <TouchableOpacity style={styles.checkbox}
 onPress={() => {setSelection7(!isSelected7)}
 }>
<Ionicons name={isSelected7 ? 'checkbox' : 'square-outline'} size={30} color={AppColors.primaryColor}>
</Ionicons>
<Text>Peanut Free</Text>
 </TouchableOpacity>
 </View>
 </View>
</View>)}
<AppButton 
      title="Create New Account" 
      onPress={() => {
        console.log('Create New Account pressed');
      }}
    />

    <AppButton 
      title="Go To Sign In"
      style={styles.signInButton}
      textColor={AppColors.primaryColor}
      onPress={() => (navigation as any).navigate("SignInScreen")}
    />
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginTop: vs(20),
  },
  logotext: {
    height: s(75),
    width: s(280),
  },
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primaryColor,
  },
  logoWrapper: {
    alignItems: "center",
    marginBottom: vs(20),
  },
  forgottext: {},
  forgotPass: {
    alignSelf: "flex-start",
    marginTop: vs(10),
    marginLeft: s(10),
    color: AppColors.primaryColor,
  },
  filterBox: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft: vs(10),
  },
  revealedBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: vs(20),
    marginHorizontal: sharedPaddingHorizontal,
    padding: s(10),
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  checkbox: {
    marginBottom: vs(10),
    flexDirection: 'row',
  },
  checkboxRow: {
    alignItems: 'flex-start',
    marginBottom: vs(10),
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: s(10),        
  },
});
