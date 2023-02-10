import { replaceData } from "./cart-slice";
import { showNotification } from "./ui-slice";

export const getCartData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-da343-default-rtdb.firebaseio.com/cartItems.json"
      );

      const data = await res.json();

      return data;
    };
    try {
      const cardData = await fetchHandler();
      dispatch(replaceData(cardData));
    } catch (err) {
      dispatch(
        showNotification({
          open: true,
          message: "Failed to send request",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-da343-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      const data = await res.json();

      dispatch(
        showNotification({
          open: true,
          message: "Request sent successfully",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        showNotification({
          open: true,
          message: "Failed to send request",
          type: "error",
        })
      );
    }
  };
};
