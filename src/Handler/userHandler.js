import userService from '../Service/userService.js';

const postUser = async (req, res, next) => {
  // eslint-disable-next-line object-curly-newline
  const user = req.body;
  try {
    const newUser = await userService.createUser(user);

    res.status(200).json({ success: true, message: 'success', data: newUser });
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).json({ success: false, message: err.message, data: [] });
    } else {
      next(err);
    }
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json({ success: true, message: 'success', data: users });
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).json({ success: false, message: err.message, data: [] });
    } else {
      next(err);
    }
  }
};

const getById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await userService.getUserById(userId);

    res.status(200).json({ success: true, message: 'success', data: user });
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).json({ success: false, message: err.message, data: [] });
    } else {
      next(err);
    }
  }
};

const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const user = req.body;
  try {
    const updatedUser = await userService.updateUser(userId, user);

    res
      .status(200)
      .json({ success: true, message: 'success', data: updatedUser });
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).json({ success: false, message: err.message, data: [] });
    } else {
      next(err);
    }
  }
};

const deleteUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await userService.deleteUser(userId);

    res.status(200).json({ success: true, message: 'success', data: user });
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      res.status(400).json({ success: false, message: err.message, data: [] });
    } else {
      next(err);
    }
  }
};

// eslint-disable-next-line object-curly-newline
export default { postUser, getUsers, getById, updateUser, deleteUserById };