import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/jobfinder-logo.png";
import "./Splash.css";
const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);
    return () => clearTimeout(timer);
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
