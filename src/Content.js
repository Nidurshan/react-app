import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = (items, setItems,handleCheck, handleDelete) => {
    
    // function name() {
    //     return console.log("visit Nidurshan.in");
    // }

    // const [count, setCount] = useState(0);
    // const [name, setName] = useState(() =>  name());

    // function incrementFunction(){
    //     setCount(prevcount => prevcount + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // setCount((count) => {return count + 1});
        // setCount((count) => {return count + 1});
        // setCount((count) => {return count + 1});
    // }

    // function decrementFunction(){
    //     setCount(prevcount => prevcount - 1);
    // }

    //========================================

    // const [name, setName] = useState("Earn");
    // function handleNameChange(){
    //     const names = ["Give", "Earn", "Grow"];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int]);
    // }

    // Map practice
    // const numbers = [-2, -1, 0, 1, 2];
    // const itemss = numbers.filter(n => n >= 0).map(n => ({number:n}));
    // console.log(itemss);
    
    return (
        <main>
            {(items.length) ? (
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
                            <label 
                            onDoubleClick={() => handleCheck(item.id)} 
                            style={(item.checked) ? {textDecoration:"line-through"} : null}
                            >{item.item}</label>
                            <FaTrashAlt roll = "button" tabIndex="0" onClick={() => handleDelete(item.id)}/>
                        </li>
                    ))}
                </ul>
            ) : (<p style={{marginTop:"2rem"}}>Your list is empty</p>)}
        </main>
    )
}

export default Content;