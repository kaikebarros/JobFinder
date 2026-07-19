import "./Dots.css";
function Dots({active}) {
  return (
    <>
      <div className="dots">
       <span> <div className={active === 1? "dot active":"dot"} ></div></span>
       <span> <div className={active === 2? "dot active":"dot"} ></div></span>
       <span> <div className={active === 3? "dot active":"dot"} ></div></span>
       <span> <div className={active === 4? "dot active":"dot"} ></div></span>



      </div>
    </>
  );
}

export default Dots;