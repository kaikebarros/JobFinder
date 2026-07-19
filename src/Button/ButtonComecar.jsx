import "./Button.css";
 const BotaoComecar = ({onClick}) => {
  return (
    <>
      <button className="btn-comecar"
      type="button" onClick={onClick}>Começar</button>
    </>
  );
};


export default BotaoComecar