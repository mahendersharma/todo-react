function Plan(props){
    return<>
   
    <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
    <button className="btn btn-warning my-2 col-sm-2 offset-1" onClick={()=>{props.sendData(props.id)}}>Remove</button>
   
    </>
}
export default Plan;