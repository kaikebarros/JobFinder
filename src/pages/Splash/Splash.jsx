import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/jobfinder-logo.png";
import "./Splash.css";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const timer = setTimeout(() => {
          navigate("/dashboard");
          return () => clearTimeout(timer);
        }, 2000);
      } else {
        const timer = setTimeout(() => {
          navigate("/login");
          return () => clearTimeout(timer);
        }, 2000);
      }
    });
  }, []);

  return (
    <>
      <motion.div
        className="splash"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logo} alt="logo JobFinder" className="splash-logo" />
      </motion.div>
    </>
  );
};

export default Splash;
