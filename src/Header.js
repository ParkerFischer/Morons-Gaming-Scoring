import React from "react";
import { NavLink } from "react-router-dom";

import img from "./img/morons-logo-gs.jpeg";
import "./Main.css";


export default function Header(){


return (
<>
<div class="jumbotron bg-light px-1 py-0">

<NavLink to='/' ><a href="" ><img src={img} style={{ width: "5%" }} alt=''/></a></NavLink>
</div>
</>

)

}
