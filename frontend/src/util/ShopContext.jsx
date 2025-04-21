import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState("");
  const [products, setProducts] = useState([]);

  const [currency, setCurrency] = useState("$");
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate();

  // add to cart logic
  const addToCart = async (productId) => {
    let cartData = structuredClone(cartItem);
    if (cartData[productId]) {
      cartData[productId] += 1;
    } else {
      cartData[productId] = {};
      cartData[productId] = 1;
    }

    setCartItem(cartData);

    if (token) {
      try {
        const response = await axios.post(
          BackendUrl + "api/cart/add",
          { itemId: productId },
          { headers: { token } }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    toast.success("Item Added to the Cart");
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const item in cartItem) {
      try {
        if (cartItem[item] > 0) {
          totalCount += cartItem[item];
        }
      } catch (error) {
        console.log(error);
      }
    }

    return totalCount;
  };

  const updateCartCount = async (item, quantity) => {
    let cartData = structuredClone(cartItem);

    cartData[item] = quantity;

    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(
          BackendUrl + "api/cart/update",
          {
            itemId: item,
            quantity,
          },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalCount = 0;
    for (const item in cartItem) {
      const itemInfo = products.find((product) => product._id === item);
      if (cartItem[item] > 0) {
        try {
          totalCount += itemInfo?.price * cartItem[item];
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(BackendUrl + "api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error("something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        BackendUrl + "api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItem(response.data.cartData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, [token]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItem,
    getCartCount,
    updateCartCount,
    getCartAmount,
    token,
    setToken,
    BackendUrl,
    navigate,
    setCartItem,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
