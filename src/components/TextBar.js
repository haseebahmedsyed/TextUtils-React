import React, { useState } from 'react'

export default function TextBar(props) {

    const [Text , setText] = useState("")
    const [Colors , setColors] = useState({color:'red'});

    const lenofTxt=(a)=>
    {
        let array = a.split(' ');
        let k = 0;
        for(let i = 0 ; i<array.length ; i++)
        {
            if(array[i]!=''){
                k+=1;
            }
        }
        return k;
    }

    function handleOnClick(){
        // console.log("clicked")
        setText(Text.toUpperCase())
        props.showAlert("Converted to UpperCase" , "success");
        
    };
    function handleLowClick(){
        // console.log("clicked")
        setText(Text.toLowerCase());
        props.showAlert("Converted to LowerCase" , "success");
        
    };


    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        let myCopy = document.getElementById('exampleFormControlTextarea1');
        myCopy.select();
        // navigator.clipboard.writeText(Text); both correct
        navigator.clipboard.writeText(myCopy.value);
        props.showAlert("Copied to ClipBoard" , "success");
    }

    function handleExtraSpaces(){
        let newText = Text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed" , "success");
    }


    return (
        <>

            <div >
                <div className="mb-3" >
                   <label htmlFor="exampleFormControlTextarea1" style={props.mode==='light'? {color:'black'}:{color:'white'}} className="form-label">Example textarea</label>
                    <textarea className="form-control" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'grey',color:'white'}}  onChange={handleOnChange} value={Text} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            <div/>
            <div></div>
                <button className='btn btn-primary mx-3'  onClick={handleOnClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-3'  onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-3'   onClick={()=>{ setColors({color:"green"})}}>Change Color</button>
                <button className='btn btn-primary mx-3'   onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-3'   onClick={handleExtraSpaces}>Remove Spaces</button>
            </div>

            <div className="container my-3">
                  <h2  style={props.mode==='light'? {color:'black'}:{color:'white'}}>Text Summary</h2>
                  <p  style={props.mode==='light'? {color:'black'}:{color:'white'}}>{lenofTxt(Text)} words and {Text.split(' ').join('').length} characters</p>
            </div>

        </>
    )
}
