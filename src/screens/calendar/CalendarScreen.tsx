import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'
import { AppColors } from '../../styles/colors';
import { s, vs } from 'react-native-size-matters';
import AppTextInput from '../../components/inputs/AppTextinput';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native';

const CustomTextInput = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
    />
  );
};

const SignUpScreen = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, SetIsVisible5] = useState(false);

    const [week1Status, setIsWeek1] = useState(false);
    const [week2Status, setIsWeek2] = useState(false);
    const [week3Status, setIsWeek3] = useState(false);
    const [week4Status, setIsWeek4] = useState(false);
    
    const [monthStatus, setIsMonth] = useState(false);

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    var [number1, setNumber1] = useState(50);
    var [number2, setNumber2] = useState(150);
    var [number3, setNumber3] = useState(200);
    var [number4, setNumber4] = useState(250);

    const [food1, setFood1] = useState<string[]>([]);
    const [food2, setFood2] = useState<string[]>([]);
    const [food3, setFood3] = useState<string[]>([]);
    const [food4, setFood4] = useState<string[]>([]);
    const [food5, setFood5] = useState<string[]>([]);
    const [food6, setFood6] = useState<string[]>([]);
    const [food7, setFood7] = useState<string[]>([]);
    const [food8, setFood8] = useState<string[]>([]);

    const [time1, setTime1] = useState<string[]>([]);
    const [time2, setTime2] = useState<string[]>([]);
    const [time3, setTime3] = useState<string[]>([]);
    const [time4, setTime4] = useState<string[]>([]);
    const [time5, setTime5] = useState<string[]>([]);
    const [time6, setTime6] = useState<string[]>([]);
    const [time7, setTime7] = useState<string[]>([]);
    const [time8, setTime8] = useState<string[]>([]);
    
    
    const today = new Date();

    function onSubmitStartTime(event: any) {
      if (endTime.trim() !== '') {
        var added= startTime + ': ' + endTime;
        if(!monthStatus){
          if (week1Status) {
            setFood1([...food1, added]);
        }
        if (week2Status) {
            setFood2([...food2, added]);
        }
        if (week3Status) {
            setFood3([...food3, added]);
        }
        if (week4Status) {
            setFood4([...food4, added]);
        }
      } else {
        if (week1Status) {
          setFood5([...food5, added]);
      }
      if (week2Status) {
          setFood6([...food6, added]);
      }
      if (week3Status) {
          setFood7([...food7, added]);
      }
      if (week4Status) {
          setFood8([...food8, added]);
      }
      }
          setStartTime('');
          setEndTime('');
          Keyboard.dismiss();
      
    }
  }

  function onSubmitEndTime(event: any) {
    if (endTime.trim() !== '') {
      var added= startTime + ': ' + endTime;
      if(!monthStatus){
        if (week1Status) {
          setFood1([...food1, added]);
      }
      if (week2Status) {
          setFood2([...food2, added]);
      }
      if (week3Status) {
          setFood3([...food3, added]);
      }
      if (week4Status) {
          setFood4([...food4, added]);
      }
    } else {
      if (week1Status) {
        setFood5([...food5, added]);
    }
    if (week2Status) {
        setFood6([...food6, added]);
    }
    if (week3Status) {
        setFood7([...food7, added]);
    }
    if (week4Status) {
        setFood8([...food8, added]);
    }
    }
        setStartTime('');
        setEndTime('');
        Keyboard.dismiss();
    
  }
}
function weekCheck() {
  if (!week1Status && !week2Status && !week3Status && !week4Status) {
    return "Please select a week";
}
}

    
    function monther() {
      var month;
      if (!monthStatus) {
        month = today.getMonth() + 1;
      }
      else {
        month = today.getMonth() + 2;
      }
      
        if (month === 1) return 'January';
        if (month === 2) return 'February';
        if (month === 3) return 'March';
        if (month === 4) return 'April';
        if (month === 5) return 'May';
        if (month === 6) return 'June';
        if (month === 7) return 'July';
        if (month === 8) return 'August';
        if (month === 9) return 'September';
        if (month === 10) return 'October';
        if (month === 11) return 'November';
        if (month === 12) return 'December';
    
    }
    function monther2() {
      var month;
      if (!monthStatus) {
        month = today.getMonth() + 2;
      }
      else {
        month = today.getMonth() + 1;
      }
        if (month === 1) return 'January';
        if (month === 2) return 'February';
        if (month === 3) return 'March';
        if (month === 4) return 'April';
        if (month === 5) return 'May';
        if (month === 6) return 'June';
        if (month === 7) return 'July';
        if (month === 8) return 'August';
        if (month === 9) return 'September';
        if (month === 10) return 'October';
        if (month === 11) return 'November';
        if (month === 12) return 'December';
    }

    function monthSwitch() {
      if (!monthStatus) {
        setIsMonth(true);
      }
      else {
        setIsMonth(false);
      }
      
    }

    function week1Press() {
      setIsWeek1(true);
      setIsWeek2(false);
      setIsWeek3(false);
      setIsWeek4(false);

    }
    
    function week2Press() {
      setIsWeek1(false);
      setIsWeek2(true);
      setIsWeek3(false);
      setIsWeek4(false);
    }

    function week3Press() {
      setIsWeek1(false);
      setIsWeek2(false);
      setIsWeek3(true);
      setIsWeek4(false);

    }

    function week4Press() {
      setIsWeek1(false);
      setIsWeek2(false);
      setIsWeek3(false);
      setIsWeek4(true);

    }

    function week1True() {
      setIsWeek1(true);
      setIsWeek2(false);
      setIsWeek3(false);
      setIsWeek4(false);

    }

    function week2True() {
      setIsWeek1(false);
      setIsWeek2(true);
      setIsWeek3(false);
      setIsWeek4(false);

    }

    function week3True() {
      setIsWeek1(false);
      setIsWeek2(false);
      setIsWeek3(true);
      setIsWeek4(false);
    }

    function week4True() {
      setIsWeek1(false);
      setIsWeek2(false);
      setIsWeek3(false);
      setIsWeek4(true);
    }

    function visible1() {
      setIsVisible1(true);
      setIsVisible2(false);
      setIsVisible3(false);
      setIsVisible4(false);
      if (isVisible1) {
        setIsVisible1(false);
        setNumber1(50);
        setNumber2(150);
        setNumber3(200);
        setNumber4(250);
      } else {
      setNumber1(50);
      setNumber2(250);
      setNumber3(300);
      setNumber4(350);
      }
    }

    function visible2() {
      setIsVisible1(false);
      setIsVisible2(true);
      setIsVisible3(false);
      setIsVisible4(false);
      if (isVisible2) {
        setIsVisible2(false);
        setNumber1(50);
        setNumber2(150);
        setNumber3(200);
        setNumber4(250);
      }
      else {
      setNumber1(50);
      setNumber2(150);
      setNumber3(300);
      setNumber4(350);
      }
    }

    function visible3() {
      setIsVisible1(false);
      setIsVisible2(false);
      setIsVisible3(true);
      setIsVisible4(false);
      if (isVisible3) {
        setIsVisible3(false);
        setNumber1(50);
        setNumber2(150);
        setNumber3(200);
        setNumber4(250);
      } else {
      setNumber1(50);
      setNumber2(150);
      setNumber3(200);
      setNumber4(350);
      }
    }

    function visible4() {
      setIsVisible1(false);
      setIsVisible2(false);
      setIsVisible3(false);
      setIsVisible4(true);
      if (isVisible4) {
        setIsVisible4(false);
        setNumber1(50);
        setNumber2(150);
        setNumber3(200);
        setNumber4(250);
      } else {
      setNumber1(50);
      setNumber2(150);
      setNumber3(200);
      setNumber4(250);
      }
    }

    function visible5() {
      if (!isVisible5) {
      SetIsVisible5(true);
      }
      else {
        SetIsVisible5(false);

      }
    }
    function AllHide() {
      setIsVisible1(false);
      setIsVisible2(false);
      setIsVisible3(false);
      setIsVisible4(false);
      setNumber1(50);
      setNumber2(150);
      setNumber3(200);
      setNumber4(250);
      setIsWeek1(false);
      setIsWeek2(false);
      setIsWeek3(false);
      setIsWeek4(false);
    }

  return (
    <AppSaveView>
        <HomeHeader>
        </HomeHeader>
        <View style={styles.almostBottom}>
            <View style={styles.inputRow}>
                <Text style={styles.leftText}>Meal</Text>
                <CustomTextInput
                    style={styles.signInButton}
                    placeholderTextColor="gray"
                    placeholder="Cheese Burger"
                    value={startTime}
                    onChangeText= {(text) => setStartTime(text)}
                    onSubmitEditing={onSubmitStartTime}
                    secureTextEntry={false}
                    keyboardType="default"
                    returnKeyType="done"
                />
            </View>
            
            <View style={styles.inputRow}>
                <Text style={styles.leftText}>Time</Text>
                <CustomTextInput
                    style={styles.signInButton}
                    placeholderTextColor="gray" 
                    placeholder="1:00 PM - 2:00 PM, Monday"
                    value={endTime}
                    onChangeText= {(text) => setEndTime(text)}
                    onSubmitEditing={onSubmitEndTime}
                    secureTextEntry={false}
                    keyboardType="default"
                    returnKeyType="done"
                />
            </View>
        </View>
            <View style={styles.almostTop}>
              <TouchableOpacity onPress={() => {visible5()}}>
                    <View style={styles.triangle} />
                </TouchableOpacity>
                <Text style={{fontSize: s(16), color: AppColors.white}}>
                    {monther()}
                </Text>
              
            </View>
            {isVisible5 && (
                            <View style={styles.almostTop1}>

              <TouchableOpacity onPress={() => {monthSwitch(), AllHide()}}>
              
                <Text style={{fontSize: s(16), color: AppColors.myMealcolor}}>
                    {monther2()}
                </Text>
          
            </TouchableOpacity>
            </View>
            )}

      <View>

    <View style={{
        position: "absolute",
        marginTop: vs(20),
        marginBottom: vs(20),
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        top: vs(number1),
        backgroundColor: AppColors.myMealcolor,
        borderRadius: 10,
        padding: s(10),
        flexDirection: 'row',

        width: '75%',}}>
          <TouchableOpacity onPress={() => {visible1(), week1Press(), week1True()}}>
                    <View style={styles.triangle} />
          </TouchableOpacity>

        <Text style={{ fontSize: s(16), color: AppColors.white  }}>
            Week One
        </Text>
    </View>
      </View>
      <View style={{
        position: "absolute",
        marginTop: vs(20),
        marginBottom: vs(20),
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        top: vs(number2),
        backgroundColor: AppColors.myMealcolor,
        borderRadius: 10,
        padding: s(10),
        flexDirection: 'row',
        width: '75%',}}>
          <TouchableOpacity onPress={() => {visible2(), week2Press(), week2True()}}>
                    <View style={styles.triangle} />
          </TouchableOpacity>
        <Text style={{ fontSize: s(16), color: AppColors.white  }}>
            Week Two
        </Text>
    </View>
    <View style={{
        position: "absolute",
        marginTop: vs(20),
        marginBottom: vs(20),
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        top: vs(number3),
        backgroundColor: AppColors.myMealcolor,
        borderRadius: 10,
        padding: s(10),
        flexDirection: 'row',
        width: '75%',}}>
           <TouchableOpacity onPress={() => {visible3(), week3Press(), week3True()}}>
                    <View style={styles.triangle} />
          </TouchableOpacity>

        <Text style={{ fontSize: s(16), color: AppColors.white  }}>
            Week Three
        </Text>
    </View>
    <View style={{
        position: "absolute",
        marginTop: vs(20),
        marginBottom: vs(20),
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        top: vs(number4),
        backgroundColor: AppColors.myMealcolor,
        borderRadius: 10,
        padding: s(10),
        flexDirection: 'row',
        width: '75%',}}>
          <TouchableOpacity onPress={() => {visible4(), week4Press(), week4True()}}>
                    <View style={styles.triangle} />
          </TouchableOpacity>
        <Text style={{ fontSize: s(16), color: AppColors.white }}>
            Week Four
        </Text>
    </View>

      {isVisible1 && !monthStatus &&(
        <View style={[styles.hiddenBox, { top: vs(number1 + 85) }]}>
          {food1.map((item, index) => (
            <View key={index} style={{ marginBottom: vs(10) }}>
              <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{item}</Text>
                {time1[index] && (
                <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{time1[index]}</Text>
               )}
        </View>
))}
        

  </View>
      )}
      {isVisible2 && !monthStatus &&(
        <View style={[styles.hiddenBox, { top: vs(number2 + 35) }]}>
          {food2.map((item, index) => (
            <View key={index} style={{ marginBottom: vs(10) }}>
              <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{item}</Text>
                {time2[index] && (
                <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{time2[index]}</Text>
               )}
        </View>
            ))}
  </View>
      )}
      {isVisible3 && !monthStatus &&(
        <View style={[styles.hiddenBox, { top: vs(number3 + 35) }]}>
          {food3.map((item, index) => (
            <View key={index} style={{ marginBottom: vs(10) }}>
              <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{item}</Text>
                {time3[index] && (
                <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{time3[index]}</Text>
               )}
        </View>
        ))}
   </View>
      )}
      {isVisible4 && !monthStatus &&(
        <View style={[styles.hiddenBox, { top: vs(number4 + 35) }]}>
          {food4.map((item, index) => (
            <View key={index} style={{ marginBottom: vs(10) }}>
              <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{item}</Text>
                {time4[index] && (
                <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{time4[index]}</Text>
               )}
        </View>
        ))}
  </View>
      )}
            {isVisible1 && monthStatus &&(
        <View style={[styles.hiddenBox, { top: vs(number1 + 85) }]}>
          {food5.map((item, index) => (
            <View key={index} style={{ marginBottom: vs(10) }}>
              <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{item}</Text>
                {time5[index] && (
                <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{time5[index]}</Text>
               )}
        </View>
))}
        

  </View>
      )}
      {isVisible2 && monthStatus &&(
        <View style={[styles.hiddenBox, { top: vs(number2 + 35) }]}>
          {food6.map((item, index) => (
            <View key={index} style={{ marginBottom: vs(10) }}>
              <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{item}</Text>
                {time6[index] && (
                <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{time6[index]}</Text>
               )}
        </View>
            ))}
  </View>
      )}
      {isVisible3 && monthStatus &&(
        <View style={[styles.hiddenBox, { top: vs(number3 + 35) }]}>
          {food7.map((item, index) => (
            <View key={index} style={{ marginBottom: vs(10) }}>
              <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{item}</Text>
                {time7[index] && (
                <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{time7[index]}</Text>
               )}
        </View>
        ))}
   </View>
      )}
      {isVisible4 && monthStatus &&(
        <View style={[styles.hiddenBox, { top: vs(number4 + 35) }]}>
          {food8.map((item, index) => (
            <View key={index} style={{ marginBottom: vs(10) }}>
              <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{item}</Text>
                {time8[index] && (
                <Text style={{ fontSize: s(16), color: AppColors.myMealcolor }}>{time8[index]}</Text>
               )}
        </View>
        ))}
  </View>
      )}
          <Text style={{ alignSelf: "center", fontSize: s(16), color: AppColors.myMealcolor, marginTop: vs(360) }}>
        {weekCheck()}
    </Text>

    </AppSaveView>
  );
};



export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: AppColors.white,
    borderRadius: 5,
    padding: s(10),
    color: AppColors.white,
    width: '100%',
  },

  signInButton: {
    color: AppColors.myMealcolor,
    flex: 1,
    backgroundColor: AppColors.white,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vs(5),
    width: '100%',
  },
  
  leftText: {
    width: s(60),
    fontSize: s(18),
    marginRight: s(8),
    color: AppColors.white,
  },
  
  almostBottom: {
    position: "absolute",
    marginTop: vs(20),
    marginBottom: vs(20),
    alignItems: "center",
    justifyContent: "center",
    bottom: vs(1),
    left: 10,
    right: 10,
    fontSize: s(16),
    backgroundColor: AppColors.myMealcolor,
    borderRadius: 10,
    padding: s(10),
    color: AppColors.white,
  },

  almostTop: {
    position: "absolute",
    marginTop: vs(20),
    marginBottom: vs(20),
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "center",
    flexDirection: 'row',
    top: vs(40),
    fontSize: s(16),
    backgroundColor: AppColors.myMealcolor,
    borderRadius: 10,
    padding: s(10),
    width: '50%'
  },
  almostTop1: {
    position: "absolute",
    marginTop: vs(55),
    marginBottom: vs(20),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: vs(40),
    fontSize: s(16),
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: s(10),
    width: '50%',
    color: AppColors.myMealcolor,
    borderColor: AppColors.myMealcolor,
    borderWidth: 1,
    zIndex: 10
  },

  triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderTopWidth: 15,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: AppColors.white,
      marginRight: s(10),
    },

    hiddenBox: {
      position: "absolute",
      marginTop: vs(20),
      marginBottom: vs(20),
      alignItems: "flex-start",
      justifyContent: "flex-start",
      alignSelf: "center",
      backgroundColor: AppColors.white,
      height: 150,
      borderRadius: 10,
      padding: s(10),
      flexDirection: 'column',
      width: '75%',
      borderColor: AppColors.myMealcolor,
      borderWidth: 1,
      color: AppColors.myMealcolor,
    }
    
    
});