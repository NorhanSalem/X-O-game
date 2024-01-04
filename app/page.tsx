'use client'
import { effect } from 'vue'
import Cell from './components/cell'
import { useEffect, useState } from 'react'

    const gameWin=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]
export default function Home() {
  const [Boxes,setBoxes]=useState(["","","","","","","","",""])
  const [go,setGo]=useState("circle")
  const [winningMessage,setWinningMessage]=useState("")
  useEffect(()=>{
    gameWin.forEach((combo)=>{
    const circleWim=combo.every((Box) => Boxes[Box]==="circle")
    const crossWim=combo.every((Box) => Boxes[Box]==="cross")

    if(circleWim){
        setWinningMessage("Circle wins!")
    }
    else if(crossWim){
        setWinningMessage("Cross wins!")
    }
  }
    )
    
  },[Boxes])
  useEffect(()=>{
    if(Boxes.every((Box)=> Box !=="" &&!winningMessage)){
      setWinningMessage("Draw ! ")
    }
  },[Boxes,winningMessage])
  return (
    <div className='container'>
      <div className='gameBox'>
        {Boxes.map((Box,index)=>(
          <Cell id={index} 
          go={go} 
          setGo={setGo} 
          key={index} 
          Boxes={Boxes} 
          setBoxes={setBoxes} 
          Box={Box}
          winningMessage={winningMessage} />
        ))}
      </div>
      <div>
        {winningMessage}
      </div>
        {!winningMessage && <div>{`It's ${go} turn `}</div>}
      
   </div>
  )
}
