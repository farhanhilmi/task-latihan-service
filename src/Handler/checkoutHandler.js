import checkoutService from '../Service/checkoutService.js';

const checkoutOrder = async (req, res, next) => {
  try {
    const { orderId } = req.body;

    if (!orderId) throw new Error('orderId is required!');

    await checkoutService(orderId);

    res.status(201).json({ success: true, message: 'success' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ success: false, message: err.message });
    } else {
      next(err);
    }
  }
};

export default checkoutOrder;
