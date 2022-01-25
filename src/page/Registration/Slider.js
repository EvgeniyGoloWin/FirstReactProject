import React, {useState} from 'react';
import './Slider.css'

function Slider({arr}) {
    const [slide,setSlide] = useState(0);
    const conditionSlide = arr.length - 1;
    console.log(conditionSlide)

    const prev = ()=> {
        if(slide !== 0 ){
            setSlide(slide - 1)
        } else if (slide === 0){
            setSlide(conditionSlide)}
    }
    const next = ()=> {
       if(slide < arr.length -1){
           setSlide(slide + 1)}
       else if( slide === conditionSlide ){
           setSlide(0)
       }

    }
    return (
        <div className={"container"} >
            <img  src={arr[slide]} />
           <div>
               <button className={"btn"} onClick={prev}>Prev</ button >
            <button className={"btn"} onClick={next}>Next</ button >
           </div>

        </div>
    );
};

export default Slider;