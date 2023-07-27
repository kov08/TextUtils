import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    // console.log(useState("Enter the text here2"))
    // setText("New Text");    // Correct way to change the satate value from the hook
    
    const handleUPClick=()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)    
        props.showAlert("Converted to upper case!!!","success")
    }
     
    const handleLOClick=()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText) 
        props.showAlert("Converted to lower case!!!","success")
    }

    // const handleSymClick=()=>{
    //     // console.log("Upper case was clicked" + text);
    //     let newText = text.match
    //     // <div class="text-bg-primary p-3">Primary with contrasting color</div>
    //     setText(newText) 
    // }

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }

    const Cleartext=(event)=>{
        // console.log("on change");
        setText("")
        props.showAlert("Text Cleared!!!","success")
    }
    
    return (
            <>
            
    <div className="container" style={{color: props.mode==='dark'?'white':'#012f5d'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            {/* <label htmlFor="Mytext" className="form-label">Input Data</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#012f5d'}} id="Mytext" rows="7"></textarea>
            
            
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUPClick} >Convert to Uppercase    </button>
            <button className="btn btn-primary mx-2" onClick={handleLOClick} >Convert to Lowercase    </button>
            <button className="btn btn-primary mx-2" onClick={Cleartext} >Clear Text    </button>
            {/* <button className="btn btn-primary mx-2" onClick={handleSymClick} >Form Text  </button> */}
    </div>

    <div className="container"   mx-3= "true" my-3="true" style={{color: props.mode==='dark'?'white':'#012f5d'}}>
            <h2>Text Summary </h2>
            <p>{text.split(" ").length} words and {text.length} Character.</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>   Preview</h2>
    <p>{text.length>0?text : "Enter text to get preview"}</p>
    </div>

    </>)

}

TextForm.defaultProps = {
    heading : "Set heading here"   
  }