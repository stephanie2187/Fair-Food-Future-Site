import React from 'react'
import { motion, useAnimation, useInView } from "framer-motion";

export default function Title() {
    return (
        <div className = "head-text">
            <div className = "crop-field">
                <img src='./crop_field.jpeg' alt = "Crop Field Image" id="crop_field_img"></img>
            </div>
            <div 
                class='text-on-image'
                
            >
                <h3> Fair Food Future </h3>
            </div>
        </div>
    )
} 