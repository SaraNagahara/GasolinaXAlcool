import './App.css'
import { useState } from 'react'



interface infoProps{
  titulo: string,
  alcool: string | number,
  gasolina: string | number
}

export default function App(){

  const [inputAlcool, setInputAlcool] = useState(0);
  const [inputGasolina, setInputGasolina] = useState(0);

  const [info, setInfoProps] = useState<infoProps>()

  function pegarDados(){
  let calculo = (inputAlcool / inputGasolina);

    if(calculo <= 0.7){
    
    setInfoProps({
      titulo: "Compensa utilizar Álcool",
      alcool: converterMoeda(inputAlcool),
      gasolina: converterMoeda(inputGasolina)
    })
    }else{
      setInfoProps({
      titulo: "Compensa utilizar Gasolina",
      alcool: converterMoeda(inputAlcool),
      gasolina: converterMoeda(inputGasolina)
    })
    }
  }

  function converterMoeda(valor: number){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  }

  return(
    <div className='div-principal'>
      <figure>
        <img src="/src/assets/logo.png" alt="imagem de um posto de gasolina" id="posto-logo"/>
      </figure>
      <label htmlFor="alcool">Preço Do Álcool:
        <input type="text" 
        name="alcool" 
        id="alcool" 
        typeof='number' 
        placeholder='R$2,30'
        value={inputAlcool}
         onChange={(e) => setInputAlcool(Number(e.target.value))}
        />
      </label>
      <label htmlFor="gasolina">Preço Da Gasolina:
        <input 
        type="text" 
        name="gasolina" 
        id="gasolina"  
        typeof='number'
        placeholder='R$4,20'
        value={inputGasolina}
        onChange={(e) => setInputGasolina(Number(e.target.value))}
        />
      </label>
      <button type='submit' onClick={pegarDados}>Verificar</button>
      {info && Object.keys(info).length > 0 && (
      <div id='cor-fundo'>
        <h3>{info?.titulo}</h3>
        <p>Álcool: {info?.alcool}</p>
        <p>Gasolina: {info?.gasolina}</p>
      </div>
       )}
      <footer>
        <small>© Sara Nagahara - Web Developer</small>
      </footer>
    </div>
    
  )
}