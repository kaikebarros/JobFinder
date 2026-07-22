import { FiBriefcase, FiHeart, FiHome, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Dashboardcss/Footer.css";
function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <button onClick={()=> navigate("/dashboard")}>
          {" "}
          <FiHome />
        </button>
        <button onClick={() => navigate("/vagas")} >
          {" "}
          <FiBriefcase />
        </button>
        <button onClick={()=> navigate("/favoritos")}>
          <FiHeart />
        </button>
        <button onClick={()=> navigate("/profile")}>
          <FiUser />
        </button>
      </div>
    </>
  );
}

export default Footer;
