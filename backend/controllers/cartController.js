import userModel from "../models/userModel.js";

// add to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById({ _id: userId });
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
    }

    await userModel.findByIdAndUpdate({ _id: userId }, { cartData });

    res.json({ success: true, message: "Item added to the cart" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// update cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;

    const userData = await userModel.findById({ _id: userId });
    let cartData = await userData.cartData;

    cartData[itemId] = quantity;

    await userModel.findByIdAndUpdate({ _id: userId }, { cartData });

    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// get user cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById({ _id: userId });
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
