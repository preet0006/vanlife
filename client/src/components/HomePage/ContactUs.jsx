import { useEffect } from "react"
import { IoCloseSharp } from "react-icons/io5";


const ContactUs = ({isOpen}) => {
  



 


  return (
   




    <div className='w-full flex justify-center items-center h-full'>
        <div className="flex relative bg-white w-full rounded-3xl md:max-w-[500px] flex-col px-4 md:px-12  md:py-14 space-y-2">
            <div className="flex flex-col pb-6 gap-2">
            <h4 className="text-[28px]">Send Us a Message</h4>
            <p className="text-gray-400  text-xs">Got questions? Need to chat with an expert</p>

            </div>
            <div className="absolute top-4 right-6">
                <p className="text-2xl font-bold cursor-pointer " onClick={()=>isOpen(false)}><IoCloseSharp /></p>

            </div>
         
            <div className="flex justify-center w-full flex-col gap-2">
                <button className="bg-gray-100 cursor-grabbing rounded-xl py-4">Schedule a Call</button>
                <button className=" bg-gray-100 cursor-grabbing rounded-xl py-4 ">Send Us a Call</button>
                <button className="bg-gray-100 cursor-grabbing rounded-xl py-4">Come Visit Us</button>   
            </div>
            <div className="flex justify-center cursor-copy items-center mt-2">
            <p>Call Us on <span>4040=3443-2933</span></p>
            </div>
         

        </div>

    </div>
      
  )
}

export default ContactUs