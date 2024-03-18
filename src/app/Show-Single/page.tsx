import React,{FC} from "react"



const ShowSingleData:FC=()=>{
return(
<div className="ms-5 mt-5">
    <div className="w-96 h-auto bg-white  border-2 rounded-lg shadow-lg text-black p-5">
   <p>Pizza</p>
   <p>Price</p>
   <p>Quantity</p>
   
<div className="flex gap-3 items-end pt-20">

    <button className="bg-gray-300 w-20 rounded-md text-black h-15">Edit</button>
    <button className="bg-gray-300 w-20 rounded-md text-black h-15">Delete</button>
</div>
    </div>
    

</div>


)
}

export default ShowSingleData