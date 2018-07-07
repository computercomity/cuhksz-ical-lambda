import * as jwt from 'jsonwebtoken';

function encodeQueryData(data) {
    let ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
 }

/**
 * Generate data needed by CUHK-Shenzhen Weixiao Platform
 * @param {string} userToken: user token
 * @param {array} extraData: data needed in array
 * @return {object} jwt signed token
 */
export function buildData(userToken, extraData) {
    let data = {token: userToken};
    let secret = process.env.appSecret || 'secret';
    data = Object.assign(data, extraData);
    console.log(data);
    let token = jwt.sign(data, secret, {expiresIn: '5m'});
    return token;
};
/**
 * Build URL for Weixiao
 * @param  {string} route: route
 * @param  {string} userToken: user token
 * @param  {array} data: extra data
 * @return {string}: url to visit
 */
export function buildUrl(route, userToken, data) {
    let queryComponent = encodeQueryData({
        client_id: process.env.appId,
        data: buildData(userToken, data),
    });
    return process.env.appUrl + route + '?' + queryComponent;
}

/**
 * Fetch data by GET
 * @param  {string} route
 * @param  {string} userToken
 * @param  {array} data
 * @param  {function} callback
 */
export function get(route, userToken, data, callback) {
    let url = appUrl + route;

}
