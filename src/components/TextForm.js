import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        
        let newText = text.toUpperCase();
        setText (newText)
        props.showAlert("converted to upper case","success")
    }

    const handleLonClick = ()=> {
       
        
        let newText = text.toLowerCase();
        setText (newText)
        props.showAlert("converted to lower case",'success')
    }
    const handleClearClick = ()=> {
        
        let newText ='';
        setText (newText)
        props.showAlert("Text is cleared","success")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopyClick = () => {
        
     navigator.clipboard.writeText(text);
     props.showAlert("copied to cliboard!","success")

    }
    
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space is removed","success")
    }
    
    const [text, setText] = useState('');   // remember this 
    // text = "new text";     //wrong way to change text
    // setText("new text");    //correct way to change text
    return (
        <>
        <div className='container my-3' style={{color: props.mode === 'dark'?'white':'#040835'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#181738':'white', color: props.mode === 'dark' ? 'white' : '#040835'}} id="mybox" rows="8"  > </textarea>
            </div>
            <button disabled={text.length===0} className="btn mx-1 my-1 btn-primary" onClick={handleUpClick} >covert to uppercase</button>
            <button disabled={text.length===0} className="btn mx-1 my-1 btn-primary" onClick={handleLonClick} >covert to Lowercase</button>
            <button disabled={text.length===0} className="btn mx-1 my-1 btn-primary" onClick={handleClearClick} >Clear text</button>
            <button disabled={text.length===0} className="btn mx-1 my-1 btn-primary" onClick={handleCopyClick} >Copy text</button>
            <button disabled={text.length===0} className="btn mx-1 my-1 btn-primary" onClick={handleExtraSpace} >Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : '#040835'}}>
            <h2>your text summary</h2>
            <p> <b>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</b></p>
            <p>{ 0.008* text.split(" ").filter((element) => {return element.length !== 0}).length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
            <br />
            <h2>Total Words : {text.split(/\s+/).filter((element) => {return element.length !== 0}).length}</h2>
        </div>
    </>
  )
}
