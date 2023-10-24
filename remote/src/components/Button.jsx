
import "./Button.css"

import { useState } from "react"
import ImageGallery from 'react-image-gallery';

export const Button = () => {
  const [state, setState] = useState(0);
  const items = [{
      original: 'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck,_stretching.jpg',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/7/74/White_domesticated_duck,_stretching.jpg'
  }];
  return (
    <div>
      <ImageGallery items={items} />

      <button id='click-btn' className='shared-btn' onClick={() => setState((s) => s + 1)}>Click me: {state}</button>
    </div>
  )
}

export default Button
