import { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { styles } from './styles.js'
export default function App() {
  // modal control
  const modalizeRef = useRef(null);
  const openModal = () => {
    modalizeRef.current?.open();
  };

  // states
  const [stepIndex, setStepIndex] = useState(0)
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
 
  // slides
  const headers = ['Sign up for Pepper', 'Profile Picture', 'Password']
  const SignUp = 
  <>
    <Text style={styles.signUpSubHeader}>Start earning in minutes.</Text>
    <View style={styles.inputFieldLabelCtn}>
      <Text style={styles.inputFieldLabel}>
          email
      </Text>
    </View>
    <TextInput 
      autoCapitalize="none"
      style={styles.inputField} 
      placeholder="johndoe@gmail.com" 
      value={email}
      onChangeText={text => setEmail(text)}
    />
    <View style={styles.inputFieldLabelCtn}>
      <Text style={styles.inputFieldLabel}>
          username
      </Text>
    </View>
    <TextInput 
      autoCapitalize="none"
      style={styles.inputField} 
      placeholder="johndoe.pepper"
      value={username}
      onChangeText={text => setUsername(text)}
    />
  </>

  const ProfilePicture = 
  <View style={styles.profilePictureCtn}>
    <Image source={require('./assets/profile_picture.png')} />
    <Button title="Pick an Image"></Button>
  </View>

  const Password = 
  <>
    <View style={styles.passwordFieldLabelCtn}>
      <Text style={styles.inputFieldLabel}>
          password
      </Text>
      <Text style={styles.inputFieldLabel}>
          minimum 5 characters
      </Text>
    </View>
    <TextInput 
      autoCapitalize="none"
      style={styles.inputField} 
      value={password}
      onChangeText={text => setPassword(text)}
      secureTextEntry={true}
    />
    <View style={styles.inputFieldLabelCtn}>
      <Text style={styles.inputFieldLabel}>
          confirm password
      </Text>
    </View>
    <TextInput 
      autoCapitalize="none"
      style={styles.inputField} 
      value={confirmPassword}
      onChangeText={text => setConfirmPassword(text)}
      secureTextEntry={true}
    />
    <View style={styles.passwordDisclaimerCtn}>
      <Text style={styles.passwordDisclaimerText}>
        Disclaimer{"\n"}Your password cannot be reset due to the nature of non-custodial products. Please backup your mnemonic in your settings in a secure place.
      </Text>
    </View>
  </>
  
  const slidesArr = [SignUp, ProfilePicture, Password]

  // slide index logic 
  const onContinuePress = () => { 
    setStepIndex(stepIndex < 2 ? stepIndex + 1 : stepIndex)
  } 
  const onBackPress = () => setStepIndex(stepIndex > 0 ? stepIndex - 1 : stepIndex)
  
  // form validation
  const disableButton = (stepIndex === 0 && (email.length === 0 || username.length === 0))|| (stepIndex === 2 && (password !== confirmPassword || password.length < 5))

  // should log on every form input change
  console.log('-- VARS --')
  console.log("email: ", email)
  console.log("username: ", username)
  console.log("password: ", password)

  return (
    <>
      <View style={styles.landingPage}>
        <View style={styles.landingPageTextCtn}>
          <Text style={styles.landingPageHeader}>Earn all day,{"\n"} every day.{"\n"}24/7/365</Text>
          <Text style={styles.landingPageSubHeader}>Earn yield in DeFi pools and track your investments in just a couple clicks</Text>
        </View> 
        <View style={styles.landingPageButtons}>
          <TouchableOpacity onPress={openModal}>
            <View style={styles.blueButton}>
              <Text style={styles.blueButtonText}>Create an account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.whiteButton}>
              <Text style={styles.whiteButtonText}>Or Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modalize ref={modalizeRef} modalHeight={700}>
        <View style={styles.container}>
          <Text style={styles.signUpHeader}>{headers[stepIndex]}</Text>
          { slidesArr[stepIndex] }
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={onContinuePress} >
              <View style={disableButton ? styles.disabledButton : styles.blueButton}>
                <Text style={styles.blueButtonText}>Continue</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onBackPress}>
              <View style={styles.whiteButton}>
                <Text style={styles.whiteButtonText} >Back</Text>
              </View>
            </TouchableOpacity> 
          </View>
        </View>
      </Modalize>
    </>
  );
}