import './App.css';
import Counter from './ContadorState';
import AutoIncrementCounter from './ContadorEffect';

import FormularioState from './Demo01State';
import FormularioEffect from './Demo01Effect';
import FormularioRef from './Demo01UseRef';
import FormularioMemo from './Demo01Memo';

function App() {
const registro = [
  {id: 1, nome: "João"},
  {id: 2, nome: "Maria"},
  {id: 3, nome: "José"},
];

  return (
    <div className="App">
      <FormularioState />
      <Counter />

      <FormularioEffect />
      <AutoIncrementCounter />

      <FormularioRef />

      <FormularioMemo data={registro} />

    </div>
  );
}

export default App;
