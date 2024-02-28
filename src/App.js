import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] =useState(Math.floor(Math.random() * board.length))

const  [bombLocation, setbombLocation] =useState(Math.floor(Math.random() * board.length))


  const handleGamePlay = (currentSquare) => {
    if(currentSquare === bombLocation && bombLocation === treasureLocation){
      board[currentSquare] = "💣"
      setBoard([...board])
    } else if(currentSquare === treasureLocation) {
      board[currentSquare] = "💎"
      setBoard([...board]) 
    } else if (currentSquare === bombLocation){
      board[currentSquare] = "💣"
      setBoard([...board])
    } else{ board[currentSquare] = "🌴"
      setBoard([...board])
    }
    }


    const restartGameButton = () => {
      setTreasureLocation(Math.floor(Math.random() * board.length))
      setbombLocation(Math.floor(Math.random() * board.length))
      setBoard(["?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ])
    }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index) => {
        return <Square square={square}
                       index={index}
                       key={index}
                       handleGamePlay={handleGamePlay}/>
      })}
      </div>
      <div>
        <button onClick={restartGameButton}>Restart Game</button>
      </div>
    </>
  )
}

export default App
