import React from 'react'

export default function Showinfo(props) { //props la mot doi so cua component, la mot object 
    //function open Edit component
    function showEdit() {
        props.setEdit2(!props.edit2)
    }

    //du lieu nhan duoc tu Edit-App-Showinfo
    console.log(props.sendData2)
    return (


        <div className="showinfo">
            <div className="info">
                <img
                    src={props.sendData2.srcimg}
                    alt="khong hien thi duoc" />
                <div className="infomation">

                    <div> <span>Name: </span><span>{props.sendData2.fullname}</span></div>
                    <div><span>Sex: </span><span>{props.sendData2.sex}</span></div>
                    <div><span>Age: </span><span>{props.sendData2.age}</span></div>
                    <div><span>Description: </span><span>{props.sendData2.desc}</span></div>
                </div>
            </div>
            <button className="editbtn" onClick={showEdit}>Edit</button>
        </div>
    )
}
