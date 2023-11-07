import {Link} from "react-router-dom";
function Nav(){
    return(
       <div class="navbar  bg-info">
<Link to="/" style={{fontFamily:"Lilita"}} class="navbar-brand px-2" ><a href="https://www.amazon.in/" className="text-dark text-decoration-none">Crud operations</a></Link>

<Link to="/create-student" style={{fontFamily:"One&family"}} class="nav-link " >Create-student</Link>
<Link to="/student-list" class="nav-link px-2">Student list</Link>
</div>

    )
}
export default Nav;