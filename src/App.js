
import './App.css';
import carData from "./api/cars.json";
import CarComponent from './components/CarComponent';


function App() {
  
  return (
    <div className='car-container'>
    {carData.map((data)=>{
        return  (<CarComponent data={data}/>)
    })}
    </div>
  );
}

export default App;
