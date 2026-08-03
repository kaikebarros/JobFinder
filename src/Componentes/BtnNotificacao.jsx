import { FiBell } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "../pages/Dashboard/Dashboardcss/Header.css";
export const BtnNotificacao = ({onClick}) => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <button
        className="btn-notificacao"
        
        onClick={onClick}
      >
        <FiBell />
      </button>
    </>
  );
};
