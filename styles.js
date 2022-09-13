import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  // landing page
  landingPage: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 40,
  },
  landingPageTextCtn: {
    alignItems: 'flex-end',
  }, 
  landingPageHeader: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 40,
  },
  landingPageSubHeader: {
    marginTop: 20,
    textAlign: 'right',
  },
  landingPageButtons: {
    marginTop: 100,
    marginBottom: 50,
  },

  // modal ctn
  container: {
    paddingTop: 50,
    height: 700, 
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  signUpHeader: {
    fontSize: 25,
    color: '#212121',
    fontWeight: 'bold'
  },
  signUpSubHeader: {
    fontSize: 12,
    color: '#7E7E7E',
    marginBottom: 10
  },

  // input fields
  inputField: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    width: '85%',
    borderRadius: 30,
  },
  inputFieldLabelCtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '85%'
  },
  inputFieldLabel: {
    color: 'lightgray',
    textAlign: 'left',
    marginBottom: 5,
    marginTop: 15
  },
  passwordFieldLabelCtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%'
  },

  // buttons
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '85%',
  },  
  blueButton: {
    padding: 10,
    backgroundColor: '#4E69F9',
    borderRadius: 30,
    marginBottom: 10,
  },
  blueButtonText: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  whiteButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  whiteButtonText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  disabledButton: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 30,
    marginBottom: 10,
  },

  // profile picture
  profilePictureCtn: {
    marginTop: 40,
  },

  // password
  passwordDisclaimerCtn: {
    width: '50%',
    marginTop: 60,
  },
  passwordDisclaimerText: {
    textAlign: 'center',
    color: 'lightgray',
  }
}); 