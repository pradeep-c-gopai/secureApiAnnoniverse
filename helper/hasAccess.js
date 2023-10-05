const jwt_decode = require('jwt-decode');

module.exports.validateToken = async function (token, roles) {
    try {
        // Verify and decode the JWT token
        const decoded = jwt_decode(token); // Replace 'your-secret-key' with your actual secret key

        console.log('\n\n\n\n\n')

        console.log(decoded);

        console.log('\n\n\n\n\n')

        // console.log(decoded)
        // Check if the token has expired
        const currentTime = Math.floor(Date.now() / 1000);

        console.log('\n\n\n\n')
        console.log(decoded.exp, currentTime, "decoded.exp < currentTime: ", decoded.exp < currentTime);
        console.log('\n\n\n\n')

        if (decoded.exp < currentTime) {
            console.log('falseeeeeeeeeeeeeeeee');
            return false;
        }

        console.log('\n', currentTime, '\n', decoded.exp);

        // Create a variable to store the result
        let result;

        // Check if the 'did' key exists
        if ((typeof decoded.userInfo !== 'undefined') && decoded.userInfo.did) {

            result = 1;

        } else if (decoded.email) {

            const emailId = decoded.email;

            const valid = emailId.endsWith('@sakhaglobal.com');

            console.log('emaillllllllllllllllllll: ');

            if (valid) {

                console.log('validddddddddddddddddd: ');

                result = 2;

            }
            else {

                return false;

            }

        } else {

            throw new Error('Token does not contain "did" or "email"');

        }

        // Check if the result is in the roles collection

        console.log('\n\n\n\n');

        console.log('roles.includes(result): ', roles, result, roles.includes(result));

        console.log('\n\n\n\n');

        if (roles.includes(result)) {
            console.log('returning ', true);
            return true;
        } else {
            console.log('returning ', false);
            return false;
        }
    } catch (error) {
        console.error(error.message);
        return false;
    }
}


// const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJkaWQiOiJkaWQ6cG9seWdvbmlkOnBvbHlnb246bXVtYmFpOjJxTFM1eVBOZTdCWHpVV2d3UFBWSkNyWkZpZ3hVMnV4S0ZzcDZ0MzkzUSIsInNlc3Npb24iOiI4Yzc1NDgzOC01OWYwLTQ1NDctODU0Yy00NGU5MTY5MWQwMzUiLCJpc0VtcGxveWVlZSI6MSwibG9naW5UeXBlIjoicG9seWdvbiJ9LCJpYXQiOjE2OTU5ODYxMjMsImV4cCI6MTY5NTk4OTEyM30.IsMDi5szjRQVWnu3tmGSeA46w_g4lqcQZKiIHiJdt7BmfLq0YZW5BUYIIw95cxojDZXNO1uwPpcQ1OMyWtODc5P7AJXJdO5QpGNhY5RImDMkd11BC_J_6YIpOKwXfehaPLwLWnB6EwxEQUXsA_AZZRt1_Zbpn6k0Adjn93IMZJXs0J6SYLK5BerThvJ_898pGY7tc3Vlhzdw4VH9orWywHnZz4c6PZBwqd3AhzIW-JTD89pOqhl5G82HhNC6ejFxj7FdHWyWLFTUNy5PT54FUnE14kn9Y01H-QhxnjqyWZCmbQQL2hiJKrSUNzylDqCl0dNHGNZrVBbwmhJsKjPl8acLU0XXF74we5d87hVzD-byHwlufyvYstJsEoNdhqzJ85iIILIOIOmgttiIZRzmkRwrehIug7zJJvkqjg9kAhK10OoI2YAagwEQShBwHJ8azz3D3cRRNOh6pv-ENbZbcHDJPz0OAgD7SyX7CBRnazkGBenncXsnyFP7rD1pcdAP7X3cI-SnJKCMJIkoqjPenFmkwcmzwAfCvjI9jpDiwDSYs9x2Pszvfpa_HMept4RS-ZtFX3cmomqoxkL-z2L7M3cpmmfZYAHOBwE5A78--1J9inS1KoDUNwqRn6WZL8LA0yzq1-WOIUHqgaVUCfNimUrhBc7GL6Pfidl4smeTzV0';
// const roles = [1, 2, 3, 4];

// if (validateToken(token, roles)) {
//     console.log('Token is valid and has a matching role',);
// } else {
//     console.log('Token is invalid or does not have a matching role');
// }


