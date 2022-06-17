/* eslint-disable no-undef */
// eslint-disable-next-line import/no-unresolved
import userService from '../service/userService.js';
// import { hashPassword, verifyPassword } from '../Utils/user.js';

describe('User Service | User Login', () => {
  it('should store a new product with correct property', async () => {
    const loginData = {
      username: 'eden',
      password: '12345',
    };
    const user = await userService.login(loginData);
    expect(user.accessToken).toBeTruthy();
  });

  // it('should return an error message due to missing field', async () => {
  //   const newProduct = {
  //     name: 'apple',
  //     quantity: 50,
  //     // description: 'ladkald',
  //     price: 10000,
  //   };
  //   const products = await addNewProduct(newProduct);
  //   const throwError = () => {
  //     throw new TypeError(products);
  //   };
  //   expect(throwError).toThrow(`Error: description is a required field`);
  // });

  // it('should return an error message due to wrong input type', async () => {
  //   const newProduct = {
  //     name: 'apple',
  //     quantity: '50k',
  //     description: 'ladkald',
  //     price: 10000,
  //   };
  //   const products = await addNewProduct(newProduct);
  //   const throwError = () => {
  //     throw new TypeError(products);
  //   };
  //   expect(throwError).toThrow(`Error: quantity should be a type of 'number'`);
  // });
});
