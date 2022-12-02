import { icons } from '@assets';
import { Icon, IconTextInput, PressArea, Spacer, Text, Button } from '@components/core';
import { StyleCallbackParams } from '@core/interfaces';
import { useStyle } from '@hooks';
import { globalStyles } from '@themes';
import { alphaHexColor } from '@utilities';
import { withHook } from '@utilities/screen';
import { View } from 'react-native';
import { useLoginContainer } from '../containers';

const LoginScreen = withHook(
  useLoginContainer,
  ({ handleLogin, navigateToRegister, changeLanguage }) => {
    const styles = useStyle(createStyles);

    return (
      <View style={[globalStyles.flexFill, styles.container]}>
        <IconTextInput
          placeholder="Email"
          IconLeftComponent={<Icon source={icons.bottomTab.profile} />}
          containerStyle={styles.input}
        />
        <Spacer h={20} />
        <IconTextInput
          placeholder="Password"
          IconLeftComponent={<Icon style={styles.iconLock} source={icons.login.lock} />}
          containerStyle={styles.input}
        />
        <View style={styles.flexEnd}>
          <PressArea style={styles.forgetPassword} onPress={navigateToRegister}>
            <Text style={styles.textForgot}>Forgot Password?</Text>
          </PressArea>
        </View>

        <Spacer h={22} />

        <Button onPress={handleLogin} style={styles.buttonLogin} title="Sign In" size="medium" />
        <Spacer h={10} />
        <Button
          iconLeft={icons.header.back}
          style={styles.buttonFacebook}
          titleStyle={styles.titleBtnFb}
          title="Sign In with Facebook"
          size="medium"
        />
        <Spacer h={10} />
        <Button
          onPress={changeLanguage}
          iconLeft={icons.header.back}
          style={styles.buttonGoogle}
          titleStyle={styles.titleBtnGoogle}
          title="Sign In with Google"
          size="medium"
        />
        <View style={[globalStyles.flexCenter, styles.buttonSignUp]}>
          <PressArea style={styles.forgetPassword} onPress={navigateToRegister}>
            <Text style={styles.textSignUp}>Don't have an account? Create here</Text>
          </PressArea>
        </View>
        {/* <PressArea onPress={handleLogin}>
        <Text>LoginScreen</Text>
      </PressArea>

      <Spacer h={32} />

      <PressArea onPress={navigateToRegister}>
        <Text>Go to Register</Text>
      </PressArea> */}
      </View>
    );
  },
);
const createStyles = ({ create, colors }: StyleCallbackParams) =>
  create({
    container: {
      backgroundColor: '#f9fafd',
      justifyContent: 'center',
      paddingHorizontal: 16, // use padding instead of margin
    },
    input: {
      backgroundColor: colors.white,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: colors.lightGray,
    },
    iconLock: {
      tintColor: colors.black,
    },
    buttonLogin: {
      backgroundColor: colors.blue,
      borderRadius: 8,
    },
    forgetPassword: {},
    flexEnd: {
      alignItems: 'flex-end',
      marginTop: 8,
    },
    textForgot: {
      fontWeight: 'bold',
      color: colors.blue,
      textDecorationLine: 'underline',
    },
    textSignUp: {
      fontSize: 17,
      fontWeight: 'bold',
      color: colors.blue,
    },
    buttonSignUp: {
      marginTop: 22,
    },
    buttonFacebook: {
      backgroundColor: alphaHexColor(colors.blue, 0.2),
    },
    titleBtnFb: {
      color: colors.blue,
    },
    buttonGoogle: {
      backgroundColor: alphaHexColor(colors.red, 0.2),
    },
    titleBtnGoogle: {
      color: colors.red,
    },
  });
export default LoginScreen;
