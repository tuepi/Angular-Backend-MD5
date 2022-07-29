// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000',
  firebaseConfig : {
    apiKey: "AIzaSyBJxBRkoV7rvs_gJanvLvuWxfGa7_JO_6A",
    authDomain: "product-angular-md5.firebaseapp.com",
    databaseURL : 'https://product-angular-md5-default-rtdb.firebaseio.com',
    projectId: "product-angular-md5",
    storageBucket: "product-angular-md5.appspot.com",
    messagingSenderId: "329725687442",
    appId: "1:329725687442:web:f778274b207c557c21d84b",
    measurementId: "G-SL903HF5ZE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
