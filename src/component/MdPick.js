import { useEffect } from "react";
import { Animaition } from "../js/Animation";

function MdPick(){

    useEffect(()=>{
        Animaition();
    },[]);
    return(
        <div id="pick">
        <h1>MD's Pick</h1>
        <ul>
            <li><a href="#"><img src={process.env.PUBLIC_URL+'/img/pick01.png'} alt="65 X VA"/><p className="pickTitle">Victor Alexen Collection</p></a></li>
            <li><a href="#"><img src={process.env.PUBLIC_URL+'/img/pick02.png'} alt="CASCADE DRIVE 3"/><p className="pickTitle">CASCADE DRIVE 3rd Gen</p></a></li>
            <li><a href="#"><img src={process.env.PUBLIC_URL+'/img/pick03.png'} alt="SHB-CA1EX"/><p className="pickTitle">CASCADE ACCEL 2025</p></a></li>
        </ul>
    </div>
    )
}
export default MdPick;