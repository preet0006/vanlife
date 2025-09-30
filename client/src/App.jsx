

import HomePage from "./pages/HomePage"
import {Route,Routes} from 'react-router-dom'
import InventoryPage from "./pages/InventoryPage"
import BuildPage from "./pages/BuildPage"
import InventoryCardDetails from "./components/Inventory/InventoryCardDetails"
import PlusPage from "./pages/PlusPage"
import ReservePage from "./components/ReservePage/ReservePage"



const App = () => {
  return (
   <div className="flex flex-col max-w-screen m-auto ">
 
       

     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/inventory" element={<InventoryPage/>}/>
      <Route path="/details/:id" element={<InventoryCardDetails/>}/>
       <Route path="/build" element={<BuildPage/>}/>
       <Route path="/plus"element={<PlusPage/>}/>
      <Route path="/reserve" element={<ReservePage />} />


     </Routes>

   </div>
  )
}

export default App