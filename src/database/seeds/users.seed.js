import { hashPassword } from '../../Utils/user.js';

export default [
  {
    name: 'eden hazard',
    username: 'eden',
    password: await hashPassword('12345'),
    gender: 'male',
    address: 'madrid',
  },
];
