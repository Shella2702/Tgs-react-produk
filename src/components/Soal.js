import { useState } from "react";

function Soal(){
    const [count, setCount] = useState(0)

    const tambah = () => {
        if(count >= 0) {
            setCount(count + 1);
        }
    }

    const minus = () => {
        if (count > 0){
            setCount(count - 1);
        } else (setCount(0))
    }

    return (
        <center><div>
            <h1> jawaban No 1</h1>
            <button onClick={tambah}>+</button>
            <span>    {count}    </span>
            <button onClick={minus}>-</button>
        </div> </center>
    )
}

export default Soal