import { useParams } from "react-router-dom";
import StudentForm from "./studentform"
import Axios from "axios";
import { useEffect, useState } from "react";

function EditStudent() {
    const { id } = useParams();

    const [data, setData] = useState({ name: "", email: "", rollno: "" });
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://crud-studentform.onrender.com/studentRoute/update-student/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, email, rollno } = res.data;
                    setData({ name, email, rollno });
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
    }, [id]);

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name: newData[0], email: newData[1], rollno: newData[2] }
        Axios.put("https://crud-studentform.onrender.com/studentRoute/update-student/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully");
                else
                    Promise.reject();
            })
            .catch((err) => alert(err))
            event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue={data.name} emailValue={data.email}
                rollnoValue={data.rollno}>
                Update student
            </StudentForm>
        </form>
    )
}
export default EditStudent;
