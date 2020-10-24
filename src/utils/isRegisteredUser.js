const { User } = require('../repositories');

const isRegisteredUser = async (userId) => {
  const isRegistered = await User.findOne({
    where: { id: userId }
  });
  return isRegistered ? true : false;
};

module.exports = isRegisteredUser;