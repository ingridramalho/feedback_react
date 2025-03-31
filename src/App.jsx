import { useState } from "react"
import iconStar from "./images/icon-star.svg"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  function handleAlterarNotaAvaliacao(nota) {
    setNotaAvaliacao(nota)
  }

  function handleSubmit() {
    if (notaAvaliacao !== 0) {
      setSubmited(true)
      return
    }

    alert("Please, choose a note!")
  }

  return(
    submited === false ? (
      <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass">
        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
          <img src={iconStar} alt="ícon star" />
        </div>

        <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>

        <p className="text-light-grey text-sm leading-1 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className="flex justify-between mb-6">
          <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white" onClick={()=> handleAlterarNotaAvaliacao(1)}/>
          <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white" onClick={()=> handleAlterarNotaAvaliacao(2)}/>
          <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white" onClick={()=> handleAlterarNotaAvaliacao(3)}/>
          <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white" onClick={()=> handleAlterarNotaAvaliacao(4)}/>
          <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-grey focus:bg-medium-grey focus:text-white" onClick={()=> handleAlterarNotaAvaliacao(5)}/>
        </div>

        <button onClick={handleSubmit} className="bg-orange w-full py-3 uppercase text-sm rounded-3xl tracking-1 font-bold">Submit</button>
    </div>
    ) : (
      <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass">
        <p>{notaAvaliacao}</p>
      </div>
    )
  )
}