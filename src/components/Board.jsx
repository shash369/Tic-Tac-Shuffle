import React, { useState } from 'react'

function Board() {
  const [board,setBoard]=useState(Array(9).fill(null)) ;
  const [currTurn,setCurrTurn]=useState('X');
  const [moves, setMoves] = useState([]);
  const [winner, setWinner] = useState(null);
  const [removedMoves,setremovedMoves]=useState(0);

  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
   ];
   const checkWinner=(currBoard) => {
        for (let pattern of winPatterns) {
            const [a,b,c] = pattern;
            if (currBoard[a]&&currBoard[a]===currBoard[b] && currBoard[a]===currBoard[c]) {
            return currBoard[a]; // returns 'X' or 'O'
            }
        }
        return null; // no winner yet
    }

  const handleReset=()=>{
    setBoard(Array(9).fill(null));
    setMoves([]);
    setCurrTurn('X');
    setWinner(null);
    setremovedMoves(0)
  };


  const handleClick=(id)=>{
    if(board[id]!=null||winner)return;

    const newBoard=[...board];
    newBoard[id]=currTurn;
    const newMoves=[...moves, id];
    // if more than 6 moves, remove the oldest one
    // setremovedMoves(prev => {
    //     const newCount=prev+1;
    //     return newCount >6?0:newCount;
    // });


    if (newMoves.length>6){
      const oldestID=newMoves.shift(); // remove first element (oldestID move)
      newBoard[oldestID] = null; // clear that cell from the board
      setremovedMoves(prv=>prv+1);
    }

    setBoard(newBoard);
    setMoves(newMoves);

    const win=checkWinner(newBoard);

    if(win){
        setWinner(win);
    } else {
        setCurrTurn(currTurn === 'X' ? 'O' : 'X');
    }
  }

  const handleResetClick=()=>{
    handleReset();
  }


  return (
        <div className='flex flex-col items-center justify-center p-4 h-screen'>
                <h1 className='font-bold text-2xl sm:text-3xl mb-2 text-center'>Tic-Tac Shuffle</h1>
                <h2 className="text-lg sm:text-xl font-semibold bg-blue-500 text-white px-4 py-2 rounded-xs mb-3 text-center">
                    Current Turn: {currTurn === 'X' ? 'Player 1' : 'Player 2'}
                </h2>

                <div className='grid grid-cols-3 gap-2 sm:gap-3'>
                    {board.map((cell, id) => (
                    <button
                        key={id}
                        onClick={() => handleClick(id)}
                         className={`w-16 h-16 sm:w-20 sm:h-20 border-3 border-gray-400 text-xl sm:text-2xl font-bold flex items-center justify-center rounded-lg
                                 text-white
                                  ${cell==='X'?'bg-red-400 ':cell==='O'?'bg-blue-400 ':'bg-amber-200'}`
                        }
                    >
                        {cell}
                    </button>
                    ))}
                </div>

                <div className='flex flex-col sm:flex-row items-center justify-between mt-3 w-full max-w-sm'>
                    <button
                    onClick={handleResetClick}
                    className='text-white bg-red-500 px-4 py-2 sm:px-6 sm:py-2 rounded-xs font-bold shadow-lg cursor-pointer hover:bg-red-400 mb-2 sm:mb-0 w-full sm:w-auto text-center'
                    >
                    Reset
                    </button>
                    <p className='bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-xs font-bold cursor-default text-center w-full sm:w-auto'>
                    Removed: {removedMoves}
                    </p>
                </div>

                {winner && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm z-50">
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl text-center mx-4">
                        <h1 className="text-2xl sm:text-4xl font-bold text-green-500 mb-4">
                        {winner === 'X' ? 'Player 1 Wins! 🎉' : 'Player 2 Wins! 🎉'}
                        </h1>
                        <button
                        onClick={handleReset}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-2 rounded-xl font-bold cursor-pointer"
                        >
                        Play Again
                        </button>
                    </div>
                    </div>
                )}
        </div>

        )
  }
export default Board