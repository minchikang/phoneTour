const express = require('express');
const router = express.Router();
const request = require('request');
const urlencode = require('urlencode'); 
const dotenv = require('dotenv');
dotenv.config();

router.get('/', function(req, res, next) {
    let url = process.env.API_URL;
    let serviceKey = process.env.API_KEY;
    let queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + serviceKey; /* Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
    queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /* */
    queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('test'); /* */
    queryParams += '&' + encodeURIComponent('areaCode') + '=' + encodeURIComponent('1'); /* */
    // queryParams += '&' + encodeURIComponent('startYmd') + '=' + encodeURIComponent('20210513'); /* */
    // queryParams += '&' + encodeURIComponent('endYmd') + '=' + encodeURIComponent('20210513'); /* */
    queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /* */
    console.log(url+queryParams);
    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        console.log('Status', response.statusCode);
        // console.log('Headers', JSON.stringify(response.headers));
        // console.log('Reponse received', body);
        const items = JSON.parse(body);
        console.log(items.response.body.items);
        

    });
});

module.exports = router;