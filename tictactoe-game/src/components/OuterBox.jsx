import React, { useState } from 'react'
import SmallBox from './SmallBox'


function OuterBox() {
    const [value, setValue] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);

    const handleClick = (index) => {
        if (value[index] !== null) return;
        const updatedValue = [...value];
        if (isX) {
            updatedValue[index] = 'X';
        }
        else {
            updatedValue[index] = 'O';
        }
        setValue(updatedValue);
        setIsX(!isX);
    }

    const isWinner = () => {
        let winners = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let winner of winners) {
            let [a, b, c] = winner;
            if (value[a] !== null && value[a] === value[b] && value[a] === value[c]) {
                return true;
            }
        }
    }

    const noWinner = () => {
        for (let val of value) {
            if (val === null) {
                return false;
            }
        }
        return true;
    }

    const againPlay = () => {
        setValue(Array(9).fill(null));
    }

    return (
        <div>
            <h1 className=' text-white text-6xl font-mono text-center mt-5'>Tic Tac Toe</h1>
            <div className=' flex justify-center align-middle mt-5'>
                {isWinner() ? (<>
                    <div className=' justify-center align-middle'>
                        <div>
                            <h1 className=' text-white font-mono text-center mb-4 text-3xl font-bold'> {isX ? 'O' : 'X'} is winner </h1>
                        </div>
                        <div className='flex justify-center align-middle h-80 w-96'>
                            <img src="https://images.pexels.com/photos/8127309/pexels-photo-8127309.jpeg?auto=compress&cs=tinysrgb&w=600" alt="congrats image" />
                        </div>
                        <div className=' flex justify-center align-middle mt-5'>
                            <button onClick={againPlay} className=' font-bold bg-blue-400 ml-5 rounded-lg p-2 hover:bg-blue-500'>Play Again</button>
                        </div>
                    </div>
                </>) : (
                    <>
                        {noWinner() ? (<>
                            <h1 className=' text-2xl font-bold'> Game tied </h1>
                            <button onClick={againPlay} className=' font-bold bg-slate-300 ml-5 rounded-lg p-2 hover:bg-slate-400'>Play Again</button>
                        </>) : (< div className=' bg-slate-300 rounded-xl p-12 w-96'>
                            <h1 className=' text-center text-4xl mb-4'>{isX ? 'X' : 'O'} turn</h1>
                            <div className='flex justify-evenly align-middle'>
                                <SmallBox onClick={() => handleClick(0)} value={value[0]} />
                                <SmallBox onClick={() => handleClick(1)} value={value[1]} />
                                <SmallBox onClick={() => handleClick(2)} value={value[2]} />
                            </div>
                            <div className='flex justify-evenly align-middle'>
                                <SmallBox onClick={() => handleClick(3)} value={value[3]} />
                                <SmallBox onClick={() => handleClick(4)} value={value[4]} />
                                <SmallBox onClick={() => handleClick(5)} value={value[5]} />
                            </div>
                            <div className='flex justify-evenly align-middle'>
                                <SmallBox onClick={() => handleClick(6)} value={value[6]} />
                                <SmallBox onClick={() => handleClick(7)} value={value[7]} />
                                <SmallBox onClick={() => handleClick(8)} value={value[8]} />
                            </div>
                        </div>)}
                    </>
                )}

            </div >
        </div>
    )
}

export default OuterBox