import './App.css';
import f from './profile.jpg'
import Welcome from './profile/Welcome';
function App() {
  const handleName=(x)=>{
 return alert(`welcome , ${x}`)
  }
  return (
    <div className="a">
   <div className="container">
  <div className="card">
    <div className="image">
    <div className="App" style={{textAlign: 'center'}}>
     <Welcome fullName='bendaweb faicel'
      bio='sportif' profession='developer' handleName={handleName}>
         <img src={f} alt="profile"/>
     </Welcome>
    </div>
    </div><br/><br/>
    <div className="content">
      <h3>Press the button to show full name</h3>
    </div>
  </div>    
</div>
</div>
     
      
   
  );
}


export default App;
