import * as cuhksz from '../cuhksz';

exports.handler = function(event, context, callback) {
  callback(null, {
    // statusCode: 302,
    // headers: { location: cuhksz. }
    body: JSON.stringify({url: cuhksz.buildUrl('a', 'a')})
  });
};
