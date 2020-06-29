import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';

const socialAccountsConfig = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('766271108501-0ua5neplagq5pib3ra2o2pbp3bmk8ji0.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2898965933491614')
  }
]);

export function provideConfig() {
  return socialAccountsConfig;
}
