// import React from 'react'
import { useEffect, useRef, useState } from 'react'


function TextForm(data) {
    const [text, setText] = useState('Enter text here')
    const prevTextRef = useRef()
    useEffect(() => {
        prevTextRef.current = text
    });
    const prevText = prevTextRef.current

    let handleChange = (event) => {
        setText(event.target.value)
    }
    function handleClick() {
        let text_in_state_to_uc = text.toLocaleUpperCase()
        setText(text_in_state_to_uc)
    }

    function convertFirstLetterStringUc() {
        let splitStringArr = text.toLowerCase().split(' ')
        for (let i = 0; i < splitStringArr.length; i++) {
            splitStringArr[i] = splitStringArr[i].charAt(0).toUpperCase() + splitStringArr[i].substring(1)
        }
        let finalStr = splitStringArr.join(' ')
        setText(finalStr)
    }

    let convertFirstLetterWordUc = () => {
        let string = text.toLowerCase();
        string = string.charAt(0).toUpperCase() + string.slice(1); // slice will pop 1 index from start index
        setText(string);
    }

    function convertFirstLetterWordLc() {
        let string = text.toUpperCase();
        setText(string[0].toLowerCase() + string.slice(1))
    }

    const convertFirstLetterStringLc = () => {
        let str = text.toUpperCase().split(' ')
        str = str.map(word => word.charAt(0).toLowerCase() + word.slice(1)).join(' ')
        setText(str);
    }

    var convertToCamelCase = () => {
        let string = text.toLowerCase().split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join('') // remove space and do camel case
        string = string.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') // remove underscore and camelCase
        setText(string)
    }

    function undoCamelCaseSpace() {
        let string = text.split(/(?=[A-Z])/).join(' ')
        setText(string)
    }

    function undoCamelCaseUnderScore() {
        // let string = text.split(/(?=[A-Z])/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('_')
        // OR as we are splitting caps letter so just join all array elements with _
        setText(text.split(/(?=[A-Z])/).join('_'))
    }

    return (
        <>
            <div className="container my-3">
                <h3>{data.heading}</h3>
                <div className="form-group mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleChange} rows="8"></textarea>
                </div>
                <div className='col-sm-12'>
                    <button className='btn btn-danger px-3' onClick={() => setText(prevText)}>Undo</button>
                    <button className='btn btn-danger px-3' style={{ float: 'right' }} onClick={() => setText('Enter text here')}>Reset</button>
                </div>
                {/* <span>Convert to :- </span> */}
                <div className='my-3 col-sm-12'>
                    <button className="btn btn-primary col-sm-4" onClick={handleClick}>Uppercase </button>
                    <button className='btn col-sm-4' onClick={convertFirstLetterWordUc}>First Letter of 1st Word UC</button>
                    <button className='btn btn-primary col-sm-4' onClick={convertFirstLetterStringUc}>First Letter of String UC</button>
                </div>
                <div className='my-3'>
                    <button className="btn col-sm-4" onClick={function () { setText(text.toLowerCase()) }}>Lowercase</button>
                    <button className='btn btn-primary col-sm-4' onClick={convertFirstLetterWordLc}>First Letter of 1st Word LC</button>
                    <button className='btn col-sm-4' onClick={convertFirstLetterStringLc}>First Letter of String LC</button>
                </div>
                <div className='my-3'>
                    <button className='btn btn-primary col-sm-4' onClick={convertToCamelCase}>CamelCase(_, space)</button>
                    <button className='btn col-sm-4' onClick={undoCamelCaseSpace}>Undo CamelCase(SPACE)</button>
                    <button className='btn btn-primary col-sm-4' onClick={undoCamelCaseUnderScore}>Undo CamelCase(UNDERS_)</button>
                </div>
            </div>
        </>
    )
}

export default TextForm