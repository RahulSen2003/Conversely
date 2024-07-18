import { useState } from "react"
import './App.css'
function App() {

  const [matrix,setMatrix] = useState(Array(9).fill('white'));
  const [clickedIndexes,setClickedIndexes] = useState([]);
  
  const handleClick = (index) => {
    const newMatrix = [...matrix];
    const newClickedIndexes = [...clickedIndexes];
    if(index===8){
      newClickedIndexes.forEach((clickedIndexes,i)=>{
        setTimeout(() => {
          newMatrix[clickedIndexes] = 'orange';
          setMatrix([...newMatrix]);
        }, i*500);
      });
    }
    else{
      newMatrix[index] = 'green';
      newClickedIndexes.push(index);
      setMatrix(newMatrix);
      setClickedIndexes(newClickedIndexes);
    }
  }


  return (
    <div className="grid">
     {
      matrix.map((color,index)=>(
        <div key={index}
        className="box"
        style={{backgroundColor: color}}
        onClick={()=>handleClick(index)}
        >

        </div>
      ))
     }
    </div>
  )
}

export default App
