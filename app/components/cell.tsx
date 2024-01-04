import { set } from 'mongoose';
import {Dispatch,SetStateAction} from 'react'
type cellProps={
    id:number;
    go:string;
    setGo: Dispatch<SetStateAction<string>>
    Boxes:string[];
    setBoxes: Dispatch<SetStateAction<string[]>>;
    Box:string;
    winningMessage:string;
}
const Cell =({go ,setGo , id, Boxes, setBoxes ,Box ,winningMessage}:cellProps)=>{
    const handleClick=(e)=>{
        if(winningMessage){
            return;
        }
            const notTaken=!Boxes[id]

         if (notTaken){
            if (go==="circle"){
            handleBoxChange("circle")
            setGo("cross")
            }
            else if (go==="cross"){
            handleBoxChange("cross")
            setGo("circle")
    }}
}
    const handleBoxChange=(boxToChange:string)=>{
            let copyBoxes=[...Boxes]
            copyBoxes[id]=boxToChange
            setBoxes(copyBoxes)
    }
    return <div className="Boxes" onClick={handleClick}>
        <div className={Box}>{Box ? (Box ==="circle" ? "o" :"x"):""}</div>
        
    </div>
}
export default Cell ;