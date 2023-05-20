import { useEffect } from "react";
const DynamicTitle=(title)=>{
    title? title= '|'+title : ''
    useEffect(()=>{
        document.title = `LWToys${title}`;   
},[])
}
 

export default DynamicTitle;