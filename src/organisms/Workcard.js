 import React from "react";
 import Image from '../atoms/Image'
 import Text from "../atoms/Text"; 
 import { Link } from "react-router-dom";


 const WorkCard=({title,year,type,img, description}) =>{
    return (
        <div className="flex flex-col md:flex-row gap-6 items-start border-b pb-6">
             <Image
             src={img}
             alt={title}
             className="w-full md:w-[246px] h-auto rounded lg object-cover"/>
      
         
          <div className="flex-1">
               <Text type="title" className="hover:underline text-darkBlue">{title}</Text>
           
          <div className="flex gap-2">
               <p className="mt-1 bg-backdesign text-white rounded-xl px-2"> {year} </p>
              <p className="mt-1 text-gray-500 leading-relaxed" >{type}</p>
          </div>

          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{description}</p> 
       </div>
     
        </div>
    )
 }
 export default WorkCard;
