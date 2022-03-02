import { validateUser, hashPassword } from '../Utils/user.js';
import UserRepository from '../Repository/userRepository.js';

/**
 *
 * @param {Object} user
 * @returns {Object} new user
 */
const createUser = async (user) => {
  try {
    const { error } = validateUser(user);
    if (error) {
      throw new Error(error.details.map((err) => err.message));
    }

    const hashedPassword = await hashPassword(user.password);

    return await UserRepository.create({
      ...user,
      password: hashedPassword,
    });
  } catch (err) {
    console.log('err', err);
    throw new Error(err.message);
  }
};

/**
 *
 * @returns all users data
 */
const getAllUsers = () => {
  try {
    return UserRepository.getAll();
  } catch (err) {
    console.log('err', err);
    throw new Error(err.message);
  }
};

/**
 *
 * @param {String} id user id
 * @returns {Object} user data
 */
const getUserById = async (id) => {
  try {
    return await UserRepository.getById(id);
  } catch (err) {
    console.log('err', err);
    throw new Error(err.message);
  }
};

/**
 *
 * @param {String} id user id
 * @param {Object} user
 * @returns {Object} updated user data
 */
const updateUser = async (id, user) => {
  const { error } = validateUser(user);
  if (error) {
    throw new Error(error.details.map((err) => err.message));
  }
  try {
    const hashedPassword = await hashPassword(user.password);
    return await UserRepository.updateById(id, {
      ...user,
      password: hashedPassword,
    });
  } catch (err) {
    console.log('err', err);
    throw new Error(err.message);
  }
};

/**
 *
 * @param {String} id user id
 * @returns {Object} user data
 */
const deleteUser = async (id) => {
  try {
    return await UserRepository.deleteById(id);
  } catch (err) {
    console.log('err', err);
    throw new Error(err.message);
  }
};

// eslint-disable-next-line object-curly-newline
export default { createUser, getAllUsers, getUserById, updateUser, deleteUser };
