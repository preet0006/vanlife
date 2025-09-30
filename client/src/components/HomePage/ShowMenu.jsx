import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const ShowMenu = ({isOpen}) => {

  const navigate = useNavigate()

  


  return (
  <div className="w-full h-full bg-[#F9F7F4] flex flex-col">

      

        <div className="flex w-full h-16 p-6  max-w-screen justify-between">
        <h5 className="text-3xl cursor-pointer" onClick={()=>isOpen(false)}><IoCloseSharp /></h5>
        <img className="h-12 object-cover w-12 rounded-3xl" src="/vanlogo.webp " alt="" />

        <div className="">   
     <button onClick={()=>navigate("/build")} className="group p-2 px-6 rounded-full border cursor-pointer bg-white overflow-hidden">
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-3">
     Build your Van
      </span>
      </button>

         </div>
        </div>
          

         <div className="flex">
           
       <div className="flex  text-4xl text-gray-500 flex-col px-10 py-6 space-y-1 ">
       
         <h3>Our Models</h3>
         <h3>Meet Us</h3>
         <h3>Owners</h3>
         <h3>Services</h3>
         <h3>Try a Noovo</h3>
        
         <hr className="w-56" />

         <div className="mt-8 space-y-1  text-3xl">
            <h3>Blog</h3>
            <h3>Events</h3>
            <h3>Our Mission</h3>
            <h3>Owner Resources</h3>
            <h3>Reviwes</h3>
            <h3>FAQ</h3>
            <h3>Contact Us</h3>
            <p className="mt-6 text-[16px]">+9301-3483-31q</p>
            <p className="text-xs ml-3">contact@gmail.com</p>


         </div>


      </div>

      <div className="flex flex-col  absolute p-6 mt-4 right-10 ">
        <div className="flex space-x-12 ">

        <div className="rounded-4xl w-md">
        <img className=" object-cover rounded-xl" src="./showmenu.webp" alt="" />

        </div>
       
        <div className="w-md">
        <img  className="rounded-xl object-cover"src="./showmenu2.webp" alt="" />
        </div>

       
       </div>

         <div className="w-4xl overflow-hidden rounded-3xl mt-4 ">
            <img className="rounded-4xl translate-y-[-100px]" src="/showmenu3.webp " alt="" />
         </div>

      
      </div>


      </div> 
       
    
      


    </div>
  )
}

export default ShowMenu