const axios = require('axios');

//We export the function
exports.handler = async function(event, context) {
    //Fetch request details from event object
    // const {path, httpMethod, headers, queryStringParameters, body} = event

    const search = event.queryStringParameters.search;
    const targetURL = `https://api.helium.io${search}`

    try {
        const response = await axios.get(targetURL);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        }
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error);
        }
    }






    // return some JSON data with a status of 200
    // return {
    //   statusCode: 200,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     path,
    //     httpMethod,
    //     headers,
    //     queryStringParameters,
    //     body: body ? JSON.parse(body) : "none"
    //   })
    // }
  }