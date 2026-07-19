import { FaGithub, FaGoogle } from "react-icons/fa";
export function ContGoogle({onClick}){
  return<>
  <button className="btn-pular"
  onClick={onClick}> <FaGoogle/> Continuar com o Google</button>
  
  </>

}

export function ContGithub({onClick}){
  return<>

  <button className="btn-pular"
  onClick={onClick}>
    
    <FaGithub/>
 Continuar com o GitHub</button>
  
  </>
   
}

