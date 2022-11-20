const { WriteError, LogToFile } = require('../error/writeError');
const { catchAsync, userRoleLevel, getRequest } = require('../utils/utils');

exports.loggedIn = catchAsync(async (req, res, next) => {
  try {
    new LogToFile(req.originalUrl);
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
  // new LogToFile(req.user);
  new LogToFile(req.user || {}, req, 'User Document');

  if (!req.user || userRoleLevel(req.user.role) < 2)
    return next(new Error('You are not permited to this page OR system is down, try loggin in again'));
  res.locals.admin = req.user;
  next();
});
