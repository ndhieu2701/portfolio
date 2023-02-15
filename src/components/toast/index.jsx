import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./toast.css";

const Toast = ({ message }) => {
  const theme = useSelector((state) => state.themes.themes);
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 3000);

  const cancelToast = () => {
    setShow(false);
  };

  const messages = {
    OK: "Gửi email thành công!",
    Failed: "Gửi email thất bại!",
  };

  return (
    show && (
      <div className={`toast-container ${theme}`}>
        <p className="toast-message">
          {message === "OK"
            ? messages.OK
            : message === "Failed"
            ? messages.Failed
            : message}
        </p>
        <div className={`toast-cancel ${theme}`} onClick={cancelToast}>
          <i className="bx bx-x"></i>
        </div>
      </div>
    )
  );
};

export default Toast;
