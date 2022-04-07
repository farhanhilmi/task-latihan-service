import getAllProduct from '../Service/productService.js';

const getProducts = async (req, res, next) => {
  try {
    const products = await getAllProduct();

    res.status(200).json({ success: true, message: 'ok', data: products });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ success: false, message: err.message, data: [] });
    } else {
      next(err);
    }
  }
};

export default getProducts;
