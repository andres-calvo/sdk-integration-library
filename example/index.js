import { AucoSDK } from '../dist/auco-sdk-integration.esm.js';

let config = {
  iframeId: 'myIframe',
  sdkType: 'upload',
  language: 'es',
  events: {
    onSDKClose: () => {},
    onSDKReady: () => {},
  },
  sdkData: {
    flowType: 'upload-document',
    userAttributes: {
      email: 'andres.calvo@aucod',
      name: 'Andres Calvo',
    },
  },
  env: 'DEV',
  customOrigin: 'http://localhost:3001',
};
window.onload = function() {
  console.log(AucoSDK);
  const unsus = AucoSDK(config);
  setTimeout(() => unsus(), 5000);
};
