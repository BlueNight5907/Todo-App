import React, {useContext} from 'react';
import { TopContext } from '../contexts/ThemeContext';
const TodoHeader = ()=>{
    const {isLight, toggleTheme} = useContext(TopContext)
    //handle click toggle
    const handleClick = (event)=>{
        console.log(event.target)
        if(isLight){
            document.body.classList.toggle('dark')
        }
        else{
            document.body.classList.remove('dark')
        }
        toggleTheme()
        
    }
    return (

        <div className="header">
            <div className="header-title">
                Todo
            </div>
            <div className="darkmode-toggle" onClick = {handleClick}>
                Darkmode
                <span className={["darkmode-switch"+(!isLight?' active':'')]} ></span>
            </div>
        </div>
    )
}
export default TodoHeader
