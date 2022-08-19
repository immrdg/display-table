// import logo from './logo.svg';
import './App.css';
import Product from "./Product";
import Table from "./Table";

function App() {
  var products=[new Product(1,"Charger",800),
                new Product(2,"Phone",16000),
                new Product(3,"PowerBank",1600),
                new Product(4,"Head Phones",2500)]
  function renderTable(){
    return (
        <Table key={"1"} products={products}/>
    )
  }
  return (

    <div className="App">
      <header className="App-header">
        {
          products.length>0?renderTable():null
        }
      </header>
    </div>
  );
}

export default App;
