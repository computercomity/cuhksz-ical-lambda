import sign from 'jsonwebtoken';

/**
 * Generate data needed by CUHK-Shenzhen Weixiao Platform
 * @param {string} userToken: user token
 * @param {array} extraData: data needed in array
 * @return {string} jwt signed token
 */
export function buildData(userToken, extraData) {
    let data = {token: userToken};
    data = data.concat(extraData);
    let token = sign(data, appSecret, {expiresIn: '5mins'});
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
    let queryComponent = encodeURIComponent({
        client_id: appId,
        data: buildData(userToken, data),
    });
    return appUrl + route + '?' + queryComponent;
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
