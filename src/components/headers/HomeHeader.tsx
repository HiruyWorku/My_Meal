import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/colors'
import {vs, s} from 'react-native-size-matters'
import { IMAGES } from '../../constants/images-paths'

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo}/>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.myMealcolor,
        alignItems:"center",
        justifyContent:"center",
        paddingBottom: vs(10)
    },
    logo:{
        height: vs(40),
        width: s(40)
    }
})