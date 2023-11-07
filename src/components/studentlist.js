import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";

function StudentList() {
    const [arr, setArr] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-studentform.onrender.com/studentRoute")
            .then((res) => {
                if (res.status === 200)
                    setArr(res.data)
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [])

    const ListItems = () => {
        return arr.map((val, ind) => {  //arr=[{_id,name,email,rollNo},{},{},{},...]
            return <StudentListRow key={ind} obj={val} />
        })
    }
    return (
        <div>
            <h1 class="text-center my-2">All Student Details</h1>
            <table style={{ marginLeft:"20%",maxWidth:"70%"}} class="table table-success table-bordered table-striped">
                <thead>
                    <tr>
                        <th class="text-center">Name</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Roll Number</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
        </div>

    )
}
export default StudentList;
