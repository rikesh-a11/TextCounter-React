import React from "react";

export default function About(props) {

  // const [mystyle,setMystyle] = useState({
  //       color: "black",
  //       backgroundColor: "white",
        
  //    })
  let mystyle = {
    color: props.mode === 'dark'?'white':'#1b1745',
    backgroundColor :props.mode === 'dark'?'#1b1745':'white'
  }
  return (
    <>
      <div className="container" style={mystyle}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
              <strong> Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                TextUtiles gives you a way to analyze  tour text quickly and efficiently.Be it word count,Character count
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
               <strong> Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              >
              <div className="accordion-body" style={mystyle}>
             TextUtiles is a free character counter tool that provides instant character count and statistics for a given text. Textutiles 
              reports the number of words and characters. Thus it is suitable to use.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
               This word counter software works on any browser such as chrome,brave,firefox,opera etc.It suits to count the words 
                while writing blogs,Sop,books,excel documents,essays etc.
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
