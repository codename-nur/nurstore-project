import Products from "./pages/Products";

function App(){
  return(
    <div style={{background:"#292727", color:"white", minHeight:"100vh", padding: 20}}>
      <h1 style={{color:"rgba(255, 255, 255, 0.77)"}}>NurStore</h1>
      <Products />
    </div>
  );
}

export default App;