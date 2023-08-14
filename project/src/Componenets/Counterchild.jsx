import React, {} from "react";
import "./Counter.css";
class Counterchild extends React.Component {
    render () {
        console.log(this.props);
    const {count,addcount,subcount} =this.props
    return (
        <div className="body">
        <div className="inputbox">
        <div className="app">
           <h1>  {count} </h1>
           </div>
            <div className="btn">
                <button onClick={addcount}>Increment</button>
                <button onClick={subcount}>Decrement</button>
            </div>
            </div>
        </div>
    )
}
}
export default Counterchild;

