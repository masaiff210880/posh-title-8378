import React from 'react'
import { Routes,Route } from 'react-router-dom';
// import Home from '../Pages/Home';
import StoreLocation from '../Pages/StoreLocation';
import Star from '../Pages/Star';
import Discount from '../Pages/Discount';
import GetApp from '../Pages/GetApp';
import TrackOrder from '../Pages/TrackOrder';
import Loylity from '../Pages/Loylity';
import Sale from '../Pages/HeaderPage/Sale';
import MakeUp from '../Pages/HeaderPage/MakeUp';
import SkinCare from '../Pages/HeaderPage/SkinCare';
import FragRance from '../Pages/HeaderPage/FragRance';
import HairCare from '../Pages/HeaderPage/HairCare';
import Tool from '../Pages/HeaderPage/Tool';
import Brands from '../Pages/HeaderPage/Brands';
import Cart from '../Pages/HeaderPage/Cart';
import Login from '../Pages/Login'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            {/* <Route path='/' element={<Home/>}/> */}
            <Route path='/store-location' element={<StoreLocation/>}/>
            <Route path='/star' element={<Star/>}/>
            <Route path='/discount' element={<Discount/>}/>
            <Route path='/get-app' element={<GetApp/>}/>
            <Route path='/track-order' element={<TrackOrder/>}/>
            <Route path='/loyalty' element={<Loylity/>}/>
            {/* Header Routes */}
            <Route path='/sale' element={<Sale/>}/>
            <Route path='/makeup' element={<MakeUp/>}/>
            <Route path='/skincare' element={<SkinCare/>}/>
            <Route path='/gragrance' element={<FragRance/>}/>
            <Route path='/haircare' element={<HairCare/>}/>
            <Route path='/tools' element={<Tool/>}/>
            <Route path='/brands' element={<Brands/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes