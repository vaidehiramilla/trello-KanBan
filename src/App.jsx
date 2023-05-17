import React from 'react'
import DashBoard from './component/DashBoard'

import { Route, Routes  } from 'react-router'
import DialogBox from './component/DialogBox/DialogBox'
import Images from './component/BackgroundImage/Images'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'



function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleSelectImage = (image) => {
    setSelectedImage(image.img);
    navigate('/');
  };
// const persistor = persistStore(store)
  return (
    <>
   
      <Routes>
       <Route path='/' element={<DashBoard selectedImage={selectedImage}  />} />
       <Route path='/task/:id/' element={<DialogBox/>} />
        <Route path='/changeImage' element = {<Images  handleSelectImage={handleSelectImage} />} />
      </Routes>
     
    </>
  )
}

export default App
