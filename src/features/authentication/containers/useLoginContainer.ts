import { UnprotectedScreenName } from '@core/enums';
import { UnprotectedScreenProps } from '@core/types';
import { useAppDispatch } from '@hooks';
import { authActions } from '@store/slices/auth';
import { commonActions } from '@store/slices/common';

const useLoginContainer = ({ navigation }: UnprotectedScreenProps<UnprotectedScreenName.Login>) => {
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(
      authActions.setToken({
        accessToken: 'fakeAccessToken',
        refreshToken: 'fakeRefreshToken',
      }),
    );
  };

  const changeLanguage = () => {
    dispatch(commonActions.changeLanguage('en-US'));
  };

  const navigateToRegister = () => navigation.navigate(UnprotectedScreenName.Register);

  return { handleLogin, navigateToRegister, changeLanguage };
};

export default useLoginContainer;
