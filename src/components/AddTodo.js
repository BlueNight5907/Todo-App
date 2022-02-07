import React, { Fragment, useContext,useRef, useState} from 'react';
import { TopContext } from '../contexts/ThemeContext';
import { v4 as uuidv4 } from 'uuid';
import useTodo from '../customhooks/useTodo'

const AddTodo = (props)=>{
    const {
        addTodo
    } = useTodo();
    //Create state variable
    
    const [data,setData] = useState({
        id:'',
        content:'',
        type:'',
        status:false
    })
    const {isOpenModalAdd, changeOpenModalState} = useContext(TopContext)


    //get modalRef
    const modalRef = useRef(null)


    const handleOpenModel = (event)=>{
        if(!isOpenModalAdd){
            modalRef.current.classList.toggle('active')
        }
        else{
            modalRef.current.classList.remove('active')
        }
        changeOpenModalState()
    }

    const handleChange = (event)=>{
        const value = event.target.value;
        setData({
            ...data,
            [event.target.name]: value
        });
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        const newData = {
            ...data,
            id:uuidv4()
        }
        addTodo(newData)
        setData({
            id:'',
            content:'',
            type:'',
            status:false
        })

    }
    const resetData =()=>{
        setData({
            id:'',
            content:'',
            type:'',
            status:false
        })
    }


    return(
        <Fragment>
        <div className="float-button">
            <button onClick={handleOpenModel} className="add-todo"><i className="bx bx-plus"></i></button>
        </div>
        <div className='modal'ref={modalRef}>
            <div className="modal-content box">
                <div className="modal-header">
                    <h4>Add Todo</h4>
                    <button onClick={handleOpenModel} type="button" className="close-modal"><i className="bx bx-x"></i></button>
                </div>
                <div className="modal-body">
                    <form onSubmit = {handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="planning">Planning</label>
                            <textarea type="text" value={data.content} onChange={handleChange} rows="4" name='content' id="planing"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="todo-type">Type</label>
                            <input type="text" value={data.type} onChange={handleChange} id="todo-type" name='type' ></input>
                        </div>
                        <div className="form-group flex-right">
                            <button className="reset" onClick={resetData} type="reset">Reset</button>
                            <button className="submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default AddTodo