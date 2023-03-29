import './App.css';
import { useState } from 'react';

function App() {

  const [suma, setSuma] = useState(0);
  const [pvm, setPvm] = useState(21);
  const [pvmSum, setPvmSum] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

const skaiciuoti = (propsas) => {
  if(propsas.name === 'totalSum') {
    setTotalSum(+propsas.value);
    general(+propsas.value);
}
if(propsas.name === 'suma') {
  setSuma(+propsas.value);
  setPvmSum((+propsas.value / 100) * pvm);
  setTotalSum(+propsas.value + ((+propsas.value / 100) * pvm));
}
}

const choosePvm = (procentas) => {
  setPvm(procentas);
  setPvmSum( (+suma/100) * pvm);
  setTotalSum( suma + ((suma / 100) * pvm) );
}

const general = (value) => {
  let koef = 0;

  if(pvm === 21) {
      koef = 1.21;
  } else if(pvm === 9) {
      koef = 1.09;
  } else {
      koef = 1.05;
  }
  setPvm(value - value / koef);
  setTotalSum(value / koef);
};
  return (
    <>
    <div className="header">
    <h1>PVM Skaičiuoklė</h1>
    </div>

    <div className="container">
      <div className="pvm-counter">
        <div className="pvm-percentage">
          <label>PVM tarifas %</label>
          <select onChange={(e) => { choosePvm(e.target.value) }}>
            <option value={21}>21%</option>
            <option value={9}>9%</option>
            <option value={5}>5%</option>
          </select>
        </div>
        <div className="suma">
          <label>Suma (be PVM)</label>
          <input type="text" name="suma" onChange={(e) => skaiciuoti(e.target)} value={+suma.toFixed(2)}></input>
        </div>
        <div className="pvm-suma">
          <label>PVM Suma</label>
          <input type="text" value={+pvmSum.toFixed(2)}></input>
        </div>
        <div className="total-suma">
          <label>Bendra suma (su PVM)</label>
          <input name="totalSum" value={+totalSum.toFixed(2)} onChange={(e) => skaiciuoti(e.target)}></input>
        </div>
      </div>
    </div>
    <div className="alert">
        <p className="align-middle">Įveskite sumą be PVM arba bendrą sumą (su PVM)</p>
      </div>
    </>
  );

}

export default App;
