const axios = require('axios');

exports.catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

//
exports.userRoleLevel = (role) => {
  const roles = ['user', 'employee', 'admin', 'superadmin', 'ssadiq'];
  if (roles.includes(role)) return roles.indexOf(role) + 1;
  else return -1;
};

//
exports.getRequest = async function (req, u) {
  try {
    const url = `${process.env.api_url}${u}`;
    const response = await axios({
      method: 'get',
      url,
      Cookies: true,
      withCredentials: true,
      headers: {
        Cookie: `${process.env.login}=${req.cookies[process.env.login]}`,
      },
    });

    return response.data;
  } catch (error) {
    // console.log('🔥', error);
    throw error.response.data;
  }
};

exports.stringifyQuery = function (query) {
  // query.limit = 50;
  const queryString = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `?${queryString}`;
};
