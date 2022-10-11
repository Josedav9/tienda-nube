import { ToastContainer } from "react-toastify";
import Navigation from "./presentation/routes/Navigation";
import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
