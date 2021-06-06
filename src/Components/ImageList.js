import React from "react"
import './ImageList.css'
import ImageCard from './ImageCard'
const ImageList=(props)=>{
    //map function is used to modify an array without changing the value of the actual array
   const images= props.images1.map((image)=>{
        return <ImageCard key={image.id} image={image}/>
    });
    return <div className="image-list">{images}</div>
};


export default ImageList;