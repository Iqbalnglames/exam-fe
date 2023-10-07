import { useState } from "react";

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  const tutup = () => {
    setShowToast(false);
    localStorage.removeItem("toastStatus");
  };

  return (
    <>
      {showToast ? (
        <div className="alert alert-success fixed left-3 top-4 text-white z-20 w-72">
          <span>Jawaban berhasil dikirim</span>
          <button onClick={tutup} className="btn btn-active btn-ghost">Tutup</button>
        </div>
      ) : null}
    </>
  );
};

export default Toast;
