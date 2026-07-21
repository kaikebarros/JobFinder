import { FiBriefcase, FiHeart, FiHome, FiUser } from "react-icons/fi";
import "./Dashboardcss/Footer.css";

function Footer() {
  return (
    <>
    <div className="footer">
      <button>
        {" "}
        <FiHome />
      </button>
      <button>
        {" "}
        <FiBriefcase />
      </button>
      <button>
        <FiHeart />
      </button>
      <button>
        <FiUser />
      </button>
      </div>
    </>
  );
}

export default Footer;
