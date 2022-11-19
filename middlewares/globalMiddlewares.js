const WriteError = require('../error/writeError');
const { catchAsync, userRoleLevel, getRequest } = require('../utils/utils');

exports.loggedIn = catchAsync(async (req, res, next) => {
  try {
    const response = await getRequest(req, '/users/loggedin');
    const user = response.data;
    user.roleLevel = userRoleLevel(user.role);

    res.locals.user = user;
    req.user = user;

    next();
  } catch (error) {
    next();
  }
});

exports.permitAdmins = catchAsync(async (req, res, next) => {
  // error can happen when user recently changed their password
  console.log(req.user);
  new WriteError(req.user || {}, req, 'User Document');

  if (!req.user || userRoleLevel(req.user.role) < 2)
    return next(new Error('You are not permited to this page OR system is down, try loggin in again'));
  res.locals.admin = req.user;
  next();
});
