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

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <AppSaveView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={IMAGES.appLogo} style={styles.logo} />
        <Image source={IMAGES.apptext} style={styles.logotext} />
      </View>

      <AppTextInput placeholder="Email" onChangeText={setEmail} />
      <AppTextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => navigation.navigate("MainAppBottomTabs")}/>
      <AppButton
        title="Sign Up"
        style={styles.registerButton}
        textColor={AppColors.primaryColor}
        onPress={() => navigation.navigate("SignUpScreen")}
      />
      <AppText style={styles.forgotPass}> Forgot Password?</AppText>
    </AppSaveView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
  },
  logotext: {
    height: s(75),
    width: s(280),
  },
  registerButton: {
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
});
