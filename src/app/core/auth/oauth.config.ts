import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

export const authConfig: AuthConfig = {
  issuer: environment.sso.serverUrl.concat(environment.sso.issuer),
  redirectUri: environment.sso.redirectUri,
  clientId: environment.sso.clientId,
  scope: environment.sso.scope,
  tokenEndpoint: environment.sso.serverUrl.concat(environment.sso.tokenEndpoint),
  userinfoEndpoint: environment.sso.serverUrl.concat(environment.sso.userinfoEndpoint),
  // showDebugInformation: environment.sso.showDebugInformation,
  loginUrl: environment.sso.serverUrl.concat(environment.sso.authorizationEndpoint),
  logoutUrl: environment.sso.serverUrl.concat(environment.sso.logout),
  requireHttps: environment.sso.requireHttps,
  // disableAtHashCheck: true,
  // postLogoutRedirectUri: environment.sso.postredirectUrL,
  responseType: environment.sso.responseType,
  revocationEndpoint:environment.sso.serverUrl.concat(environment.sso.revocationEndpoint),
  dummyClientSecret: environment.sso.clientSecret,
  useHttpBasicAuth:true,
  useSilentRefresh: true,
  
  silentRefreshTimeout: 20000,
  timeoutFactor: 0.9, 
  sessionChecksEnabled: false,
  clearHashAfterLogin: true,
  silentRefreshIFrameName: 'sr-iframe',
  silentRefreshMessagePrefix: 'srp',
  silentRefreshShowIFrame: true,  
  // waitForTokenInMsec : 2000,

  
};

