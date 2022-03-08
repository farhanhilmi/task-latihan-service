import { validateUser, hashPassword } from '../Utils/user.js';
import UserRepository from '../Repository/userRepository.js';

import log from '../Utils/logger.js';
import producer from './kafkaProducer.js';

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

    const userData = {
      ...user,
      password: hashedPassword,
    };
    producer.sendRecord('INSERT', userData);
    return userData;
  } catch (err) {
    log.error(err);
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
    log.error(err);
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
    log.error(err);
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
    const userData = {
      userId: id,
      user: { ...user, password: hashedPassword },
    };
    producer.sendRecord('UPDATE', userData);
    return userData;
  } catch (err) {
    log.error(err);
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
    producer.sendRecord('DELETE', { userId: id });
    return id;
  } catch (err) {
    log.error(err);
    throw new Error(err.message);
  }
};

const deleteAll = async () => {
  try {
    return await UserRepository.deleteAll();
  } catch (err) {
    log.error(err);
    throw new Error(err.message);
  }
};

// eslint-disable-next-line object-curly-newline
export default {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  deleteAll,
};
