import { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {
  let [a,b] = useState(0);
  let [modal,setModal] = useState(false)
  let [myData,setData] = useState(
    ["안녕하세요","만나서반갑네요","고맙습니다."]
    )
  function han(){
    b(a+1);
  }
  return (
    <div className="App">
      <div>{a}</div>
     <button onClick={han}>test</button>
     <button onClick={()=>{setModal(true)}}>열기</button>

     {
        // myData.map(function(a,i){
        //   return(
        //     <div>{myData[i]}</div>
        //   )
        // })

       myData.map(function(a,i){
        return(
          <div key={i}>{a}</div>
        )
       })
     }
    
     {
      modal==true ? <Modal props={()=>setModal(false)}></Modal>:null
     }
     



    </div>
  );
}

function Modal({props}){
  return(
    <div className="modal" >
      <h2>제목</h2>
      <p>test</p>
      <button onClick={props}>닫기</button>
    </div>


  )
}



export default App;
