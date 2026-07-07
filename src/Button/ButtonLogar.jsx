import "./Button.css";
 const BotaoLogar = ({onClick}) => {
  return (
    <>
      <button className="btn-logar" onClick={onClick}>Já tenho uma conta</button>
    </>
  );
};


export default BotaoLogar