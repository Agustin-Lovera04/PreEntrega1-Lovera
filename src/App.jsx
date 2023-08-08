import './App.css'
import ItemListContainer from './components/itemListContainer';
import NavBar from './components/navBar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <div className='containerMain'>
          <div className='subHeader'>
            <h1 className='tituloPresentacion fw-bolder text-light'>RUGBY SHOP</h1>
          </div>
          <div className="contenidoPpal">
            <h2>BIENVENIDOS A LA TIENDA VIRTUAL NUMERO 1 EN VENTAS</h2>
            <div className='containerItems'>
              <ItemListContainer greeting="BOTINES IMPORTADOS" />
              <ItemListContainer greeting="LO MEJOR EN PROTECCION" />
              <ItemListContainer greeting="CAMISETAS TOP 14" />
              <ItemListContainer greeting="SHORTS ALTA RESISTENCIA-ENTRENAMIENTO" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
