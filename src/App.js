import Showinfo from "./Showinfo/Showinfo";
import Edit from "./Edit/Edit";
import { useState } from "react";
import "./Edit/Edit.css"

function App() {
  const [edit, setEdit] = useState(true) //useState close or Open Edit Component
  //function nhan du lieu tu cac input ben Edit ve
  const [dataget, setDataget] = useState({})
  function getData(data) {
    //data la {fullname, sex, age, color, desc} se duoc truyen den usestate dataget va truyen den showinfo
    setDataget(data)
  }
  return (
    <div className="App">
      {/* Neu Edit la true (duoc quyenchinh sua thi componentEdit duoc hien, nguoc lai component Showinfo duoc hien) */}
      {edit ? <Edit
        edit1={edit}
        setEdit1={setEdit}
        sendData={getData}
      />
        :
        <Showinfo edit2={edit}
          setEdit2={setEdit}
          sendData2={dataget}
        />}
    </div>
  );
}

export default App;
