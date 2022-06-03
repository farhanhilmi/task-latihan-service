import createNewOrder from '../Service/orderService.js';

const createOrder = async (req, res, next) => {
  try {
    const { products } = req.body;
    console.log('products', products);
    await createNewOrder(products, req.user.userId);

    res
      .status(201)
      .json({ success: true, message: 'order created successfully' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ success: false, message: err.message });
    } else {
      next(err);
    }
  }
};

export default createOrder;
