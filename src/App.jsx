import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    Aos.init({
      // You can pass options here
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for animations
      once: true, // Whether animation should happen only once or every time you scroll
    });
  }, []);

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
