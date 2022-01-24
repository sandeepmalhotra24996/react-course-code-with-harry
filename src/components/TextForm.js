// import React from 'react'
import {useState} from 'react'


function TextForm(data) {
    const [text, setText] = useState('Enter text here')
    return (
        <>
            <div className="container my-3">
                <h3>{data.heading}</h3>
                    {/* <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div> */}
                    <div className="form-group mb-3">
                        <textarea className="form-control" id="myBox"  value={text} onChange={(e)=>setText(e.target.value)} rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={()=>setText(text.toLocaleUpperCase())}>Convert to uppercase </button>

            </div>
        </>
    )
}

export default TextForm