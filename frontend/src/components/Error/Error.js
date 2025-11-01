import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { clearError, selectErrorMessage } from "../../redux/sclices/errorSlice";

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage); // отображение ошибки
      dispatch(clearError()); // очистка сообщения
    }
  }, [errorMessage, dispatch]);

  return <ToastContainer position="top-right" autoClose={2000} />; // отображение компонента с помощью ToastContainer
};

export default Error;
