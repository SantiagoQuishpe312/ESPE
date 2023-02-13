export const environment = {
  production: false,
  appApiUrl: 'http://localhost:8080/api/v1',
  // configApiUrl: 'https://silabo-config-test.espe.edu.ec/api/v1',
  configApiUrl: 'http://localhost:9090/api/v1',
  espematicoApiUrl: 'https://espematico-api.espe.edu.ec/reporteWs',
  imageApiUrl: 'https://image-api.espe.edu.ec/imagen/',
  sso: {
    serverUrl: 'https://srvcas.espe.edu.ec',
    clientId: 'F_13VTNPdVHPSstUZtYmldfl2UYa',
    clientSecret: 'avomzz_CU6tkSloVpHvTgbbs1fAa',
    issuer: '/oauth2endpoints/token',
    redirectUri: window.location.origin,
    postredirectUrL: window.location.origin,
    scope: 'openid profile email',
    logout: '/oidc/logout',
    tokenEndpoint: '/oauth2/token',
    userinfoEndpoint: '/oauth2/userinfo',
    authorizationEndpoint: '/oauth2/authorize',
    jwksEndpoint: '/oauth2/jwks',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'code',
    revocationEndpoint: '/oauth2/revoke',

  }
};
