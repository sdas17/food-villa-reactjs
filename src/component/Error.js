import { useRouteError } from "react-router-dom";
const Error =()=>{
    const demo =useRouteError();
    console.log(demo);
    return (
        <div className="no page render">
            <h2>oop</h2>
            <p>no connected🤔🤔🤔🤔</p>
            <h2>{demo.status + " " + demo.statusText}</h2> 

        </div>
    )
}
export default Error;