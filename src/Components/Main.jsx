import Home from "./Home"
import Navbar from "./Navbar"
import Part from './Part';
import Service from "../app/services/page";


export default function Main(){
    return(
      <div className=" mt-[86px]">
      <Home/>
    
     <Service/>
        
      </div>
 
    )

}