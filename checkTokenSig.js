//----------------------------------------------verify clientID----------------------------------------------//

// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client();
// async function verify() {
//     const ticket = await client.verifyIdToken({
//         idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImI5YWM2MDFkMTMxZmQ0ZmZkNTU2ZmYwMzJhYWIxODg4ODBjZGUzYjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDM2MzI1NzU2NDg5LW8xaWludmlsc2tqMDR1OHVmbnJvcDlndW9rdnFlNWYwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAzNjMyNTc1NjQ4OS1vMWlpbnZpbHNrajA0dTh1Zm5yb3A5Z3Vva3ZxZTVmMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjg0MDA0ODI4NjQ0MDYwNDg2NyIsImhkIjoic2FraGFnbG9iYWwuY29tIiwiZW1haWwiOiJwcmFkZWVwa3VtYXIuZ29wYWlAc2FraGFnbG9iYWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTY5NjQxMjkzNCwibmFtZSI6IlByYWRlZXBrdW1hciBDIEdvcGFpIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0l2Si1fUTBLQVpCOURZT25jOEcxdVhrdURTeGRvdEFUN1J5OVFBOVB5RD1zOTYtYyIsImdpdmVuX25hbWUiOiJQcmFkZWVwa3VtYXIgQyIsImZhbWlseV9uYW1lIjoiR29wYWkiLCJsb2NhbGUiOiJlbi1HQiIsImlhdCI6MTY5NjQxMzIzNCwiZXhwIjoxNjk2NDE2ODM0LCJqdGkiOiJlMjc3NDU5MGNiMmE1YWQ1Mjg4OGU2OGUwNDRmNTZlYzBjMjc5MmRmIn0.icons8VYxkOzZssyBYhwO66xSht8JRjODGsZqlv-X5v5jKuV4r_iAjUR_ZE1yTa2XFbNUosrUT73DheubTTvYTPgYYhdNaHc_rAyLnADUgLEBr-XeSEQV7jAdwk-RAspMttjqTQY7KQt0HE9uVS_R-XcYkpmkNjf87Bbu5a2WeBItLPZIRRLJuVjuGlFulEx0Vp-ZSakzjKaPuyh-l-Dxxz9Lnymle0o9EvCfuos2T6XYkMT3xMlrnAGsXVTVexJFHZD3MB5kyCwafY7HtOAYO88AbhDH35jLn0xNE_4Xt8hclSRkThlNc2buVjmIV1pX_ALsong6NaYEPl5vZQuvA',
//         audience: '119560916357-9s1mbl1jd2b6kpjmoanok4efm0fbd0ib.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
//         // Or, if multiple clients access the backend:
//         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//     });
//     const payload = ticket.getPayload();
//     const userid = payload['sub'];
//     // If request specified a G Suite domain:
//     // const domain = payload['hd'];
// }

// verify().catch(console.error);

//----------------------------------------------verify clientID----------------------------------------------//

const jwks = `{
    "keys": [
      {
        "n": "trD9XzkQVbaVs5NeV-PrHMYGm9JsfXKKoPJWuU8zcA5T7sp25j4KvJAPgSdFO1x6AiVtxwKGUBnsr9gnNaiSM3qs_1_iJT09E_iqHUyaTiqf4wkEHA5ABinBkORsjQzZajsbbhtkv4Yw4vF44g2WhchdjLThpBB96px-RV4C0ZK8beA-4cNEYhybYBsEjYDZLWAIKxtt-ZNc01AhM1p5nIDLp6Z05hAJBVazj7Ac3JT_CwgYlY3MvLZSJIQjOZwBRLNl9wJhewiNvfIH3ijbPVKzLEyt5toNqsSyuBZtLr-z4UKv2gsoKFSU-KdkRBnO3ZtqVYIsiZ-09IEN1pL33Q",
        "alg": "RS256",
        "use": "sig",
        "kty": "RSA",
        "e": "AQAB",
        "kid": "b9ac601d131fd4ffd556ff032aab188880cde3b9"
      },
      {
        "n": "0quLYDiZIxssFKreHcXeeUIbgyU-dctbQXTfBTbAKp4Jl_TH-FQt3EfBVbo2P_1bkH-6ofvDSkQDUbigOhN4zx7JwbjAl8P18-dgjxuhF9HRdZA2W54VxBspEuHhqpsFZKoH_409ywbnc0DtAT-OQR3oQ-6ZnJfUOkLvw7o62QSDyscEi_zh8NIAGQnBo98UVVWr6lbR_PIm7l_NZu0LAux-P5Av-CxAxf32Dvl6crfv_I8ME3_fRisfKaVn5qOt_XuSXmygtTtT94lwelCCuutT6VjjIe397j83yR6LDZACOY7aAw8dx_rb3TS-SgvxQoBshj3142B4RFTVwupyQQ",
        "use": "sig",
        "e": "AQAB",
        "kty": "RSA",
        "alg": "RS256",
        "kid": "c6263d09745b5032e57fa6e1d041b77a54066dbd"
      }
    ]
  }`

const parsedJwks = (JSON.parse(jwks));

console.log(parsedJwks.keys[0]);

var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');
var pem = jwkToPem(parsedJwks.keys[0]);

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImI5YWM2MDFkMTMxZmQ0ZmZkNTU2ZmYwMzJhYWIxODg4ODBjZGUzYjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDM2MzI1NzU2NDg5LW8xaWludmlsc2tqMDR1OHVmbnJvcDlndW9rdnFlNWYwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAzNjMyNTc1NjQ4OS1vMWlpbnZpbHNrajA0dTh1Zm5yb3A5Z3Vva3ZxZTVmMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjg0MDA0ODI4NjQ0MDYwNDg2NyIsImhkIjoic2FraGFnbG9iYWwuY29tIiwiZW1haWwiOiJwcmFkZWVwa3VtYXIuZ29wYWlAc2FraGFnbG9iYWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTY5NjQyMTA2OCwibmFtZSI6IlByYWRlZXBrdW1hciBDIEdvcGFpIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0l2Si1fUTBLQVpCOURZT25jOEcxdVhrdURTeGRvdEFUN1J5OVFBOVB5RD1zOTYtYyIsImdpdmVuX25hbWUiOiJQcmFkZWVwa3VtYXIgQyIsImZhbWlseV9uYW1lIjoiR29wYWkiLCJsb2NhbGUiOiJlbi1HQiIsImlhdCI6MTY5NjQyMTM2OCwiZXhwIjoxNjk2NDI0OTY4LCJqdGkiOiJjNzU3MjU3NjA0ZDEwOTJlYWIwYTIxNGU2OGE0YmM4ZmY1MTFmYTdkIn0.DZLSEjq2fM1mSEGQwqeoUxrttJBVmOu8ibzvueOpDrDWXmssmLy_fGOwt4w6LCxz9llDxn23pw1lKTSrsPoqmsp6VYR1H6khecJX6nOfjAjkPM23Wvru1B0z4gY392fcC56Is0iZ4uSnLWsu5Fh6T_CTGPTggx33J8CrPYXenO8ILtUXPsVJr1nKymD8lWS4EkeYdAdwKUsjC71x5IlNUC47wtwa2OYA5YSc5JJ_2rb8qFognp7wyyb5lkWYeb_pOpe35e3bkh9SG0SXrgYsIFDV4hpv4oeHg1k4eYw266nMLWPTd0hrjVfghocdQXGv_Y3-FbeCfvZMCOtuXgI9Vg";
jwt.verify(accessToken, pem, { algorithms: ['RS256'] }, function (err, decodedToken) {

    if(err){
        throw err;
    }
    console.log('\n\n\n');
    console.log(decodedToken);
});











































































//   const jose = require('node-jose');
// const request = require('request-promise');

// // Step 1: Discover the Public Key Endpoint
// const discoveryUrl = 'https://accounts.google.com/.well-known/openid-configuration';

// request(discoveryUrl)
//   .then(metadata => {
//     const metadataObj = JSON.parse(metadata);

//     // Step 2: Retrieve Google's Public Keys
//     const jwksUri = metadataObj.jwks_uri;

//     return request(jwksUri);
//   })
//   .then(keys => {
//     const keysObj = JSON.parse(keys);

//     // Assuming you have an access token
// const accessToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImI5YWM2MDFkMTMxZmQ0ZmZkNTU2ZmYwMzJhYWIxODg4ODBjZGUzYjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMDM2MzI1NzU2NDg5LW8xaWludmlsc2tqMDR1OHVmbnJvcDlndW9rdnFlNWYwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTAzNjMyNTc1NjQ4OS1vMWlpbnZpbHNrajA0dTh1Zm5yb3A5Z3Vva3ZxZTVmMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjg0MDA0ODI4NjQ0MDYwNDg2NyIsImhkIjoic2FraGFnbG9iYWwuY29tIiwiZW1haWwiOiJwcmFkZWVwa3VtYXIuZ29wYWlAc2FraGFnbG9iYWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTY5NjQxODA4NSwibmFtZSI6IlByYWRlZXBrdW1hciBDIEdvcGFpIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0l2Si1fUTBLQVpCOURZT25jOEcxdVhrdURTeGRvdEFUN1J5OVFBOVB5RD1zOTYtYyIsImdpdmVuX25hbWUiOiJQcmFkZWVwa3VtYXIgQyIsImZhbWlseV9uYW1lIjoiR29wYWkiLCJsb2NhbGUiOiJlbi1HQiIsImlhdCI6MTY5NjQxODM4NSwiZXhwIjoxNjk2NDIxOTg1LCJqdGkiOiJhOTMyYmJhNjU1NWE3ZjQwMjc1OWJjODJmN2YzY2IwZjJjYWUwZGQ5In0.lomCBhd0nKMqmXC3zuKEvM7tGhfE62N0IHbeU3KPvJ1M343OGsHYyEEzcXi92znaGvkClVgpxDwiVdpMSbtQGS4u83_dHJCkHnvoPs9nhn70F0F9pgYnOtwlvofN2nxiwiBzGrDkijPMaLUeKGY8VsOMS6KzyunR_sXzohN0MAVAoQ0rBsp1EKQi4i1Huuxzn80UZXzLnSijexRCvvnfCQMobf41D8D0nSVpSBu-YMDeURTc4Y4wnw3e-Mw-HbKhshAhLPnSq_6dIod9JrXJjYue8tToN6P1EhDED6t5XdsQ9c2w2DEY6xtISddPFWQ785fPV_rXv2H4bDJsRby4cQ';

//     // Step 3: Verify the Access Token
//     const decodedToken = jose.util.base64url.decode(accessToken.split('.')[0]);
//     const header = JSON.parse(decodedToken.toString());

//     const kid = header.kid;
//     const publicKey = keysObj.keys.find(key => key.kid === kid);

//     if (!publicKey) {
//       throw new Error('Public key not found for the given key ID (kid)');
//     }

//     const publicKeyObj = jose.JWK.asKey(publicKey, 'json');
//     const keystore = jose.JWK.createKeyStore();
//     keystore.add(publicKeyObj);

//     return jose.JWS.createVerify(keystore).verify(accessToken);
//   })
//   .then(result => {
//     // Access token is valid, and `result` contains the claims
//     const claims = JSON.parse(result.payload.toString());
//     console.log('Access token verification successful:', claims);
//     // Authenticate and authorize the user here
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle the error, e.g., deny access
//   });
