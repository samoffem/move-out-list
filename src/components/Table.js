import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {listData, updateData} from '../store/action'
import {data} from '../data'

const Table = () => {
    const [modal, setModal] = useState(false)
    const [num, setNum] = useState()
    const [id, setId] = useState()
    const [error, setError] = useState()
    const tableData = useSelector(state=>state.data) || []
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listData(data))
    },[])
    const handleModal = ()=>{
        setModal(false)
        setError("")
    }

    const flipRoom = (id)=>{
        setModal(true)
        setId(id)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(typeof num)
        dispatch(updateData(id, num));
        setNum("")
    }
    return (
        <div className="container">
            <div className="wrapper">
                {modal && 
                    <div className="modal">
                        <button onClick={handleModal} className="close-modal">Close Modal</button>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <label>Update number of rooms</label>
                                <input value={num} onChange={(e)=>setNum(e.target.value)} type="text" placeholder="Enter a number"></input>
                                <button className="update-btn">Update</button>
                            </form>
                            {error && <div className="error">{error}</div>}
                        </div>
                    </div>
                 }
                <h2 className="headline-text">Move-out List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Move-out Date</th>
                            <th>ID</th>
                            <th>Address</th>
                            <th>Rooms</th>
                            <th>Location</th>
                            <th>Last Occupant</th>
                            <th>UID</th>
                            <th>Balance</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableData.map(item=>
                            <tr key={item.id}>
                                <td>{item.move_out_date}</td>
                                <td>{item.id}</td>
                                <td>{item.Address}</td>
                                <td>{item.Room}</td>
                                <td>{item.location}</td>
                                <td>{item.last_occupant}</td>
                                <td>{item.uid}</td>
                                <td>${item.balance}</td>
                                <td><button onClick={()=>flipRoom(item.id)} className="flip-btn">Flip Room</button></td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
