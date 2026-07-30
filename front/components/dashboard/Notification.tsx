"use client";

import { FiBell } from "react-icons/fi";


export default function Notification(){

return(

<div className="relative cursor-pointer">

<FiBell size={24}/>


<span
className="
absolute
-top-2
-right-2
bg-red-500
text-white
text-xs
rounded-full
px-2
"
>
3
</span>


</div>

);

}