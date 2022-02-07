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
    let dummySortString = () => {
        setText('3,7,24,1,4,512,16,238,102,9,01,034,0304,99,919,77');
    };
    const sortingSortFunc = () => {
        let sort_asc_first_number = text.toLowerCase().split(',');
        let sort_desc_first_number = text.toLowerCase().split(',');
        let str_asc = text.toLowerCase().split(',').map(Number);
        let str_desc = text.toLowerCase().split(',').map(Number);

        sort_asc_first_number.sort();

        sort_desc_first_number.sort((a, b) => { return a > b ? -1 : a < b ? 1 : 0 })

        str_asc.sort(function (a, b) {
            if (a > b) return 1;
            if (a < b) return -1; //dont interchange position as to arrange in asc order and first element 'a' is already less then second element 'b'
            return 0
        });

        str_desc.sort(function (a, b) { return b - a });

        setText('original_string => ' + text + '\nsort_asc_first_number(type string) => ' + sort_asc_first_number + '\nsort_desc_first_number(type string) => ' + sort_desc_first_number + '\nstr_asc(type Number) => ' + str_asc + '\nstr_desc(type Number) => ' + str_desc)
    }

    function sortingForLoop() {
        let str = text.split(',');
        let for_each = str.forEach((element, index) => {
            if ((element % 2) !== 0) {
                console.log(element % 2)
                str.push('222');
            } else {
                console.log(element)
            }
        })
        console.log(str)
        let str_new = text.split(',');
        console.log(for_each)
        console.log('before map : ')
        let for_map = str_new.map((element, index) => {
            if ((element % 2) !== 0) {
                console.log(element % 2)
                str_new.push('222');
            } else {
                console.log(element)
            }
            return str_new;
        })
        console.log(str_new)
        console.log(for_map)
        setText('Oops!! Please check your console, may be some error. ')
    }

    function dummyArrayObject() {
        // const json_data = [{"first_name":"sandeep","last_name":"malhotra","age":25},{"first_name":"kunal","last_name":"sharma","age":19},{"first_name":"ankit","last_name":"kumar","age":23},{"first_name":"sunny","last_name":"singh","age":19}]
        let obj_data = [{ first_name: 'sandeep', last_name: 'malhotra', age: 25 }, { first_name: 'kunal', last_name: 'sharma', age: 19 }, { first_name: 'ankit', last_name: 'kumar', age: 23 }, { first_name: 'sunny', last_name: 'singh', age: 19 }];
        setText(JSON.stringify(obj_data));
    }

    function filterLoop() {
        let arrObj = JSON.parse(text);
        /** Get first_name value from above objects whose age is greater then 22*/
        const output = arrObj.filter((element) => element.age > 22).map((finalElement) => finalElement.first_name + ' ' + finalElement.last_name);
        let func_exec_str = "arrObj.filter((element) => element.age > 22).map((finalElement) => finalElement.first_name + ' ' + finalElement.last_name)";
        setText('Given Arr of Objects : \n' + text + '\n\n Result : \n' + JSON.stringify(output) + '\n\n Function to filter : ' + func_exec_str );

    }

    let reduceLoop = () => {
        let arrObj = JSON.parse(text);
        /**get age-wise count in associative array */
        let output = arrObj.reduce((accumulator, current) => {if(accumulator[current.age]){accumulator[current.age]++}else{accumulator[current.age]=1} return accumulator}, {});
        let func_exec_str = `arrObjj.reduce((max,curr)=>{
            if(max[curr.age]){
                max[curr.age]++;
            }else{
                max[curr.age] = 1;
            }
            return max;
        } , {})`;
        setText('Given Arr of Objects : \n' + text + '\n\n Result : \n' + JSON.stringify(output) + '\n\n Function to reduce : ' + func_exec_str);
    }

    /**NOT WORKING : To check how to use document.querySelector */
    // document.querySelector('#dummyArrayObject').onClick = () => {
    //     console.log('hey')
    //     let obj_data = [{first_name:'sandeep',last_name:'malhotra',age:25},{first_name:'kunal',last_name:'sharma',age:19},{first_name:'ankit',last_name:'kumar',age:23},{first_name:'sunny',last_name:'singh',age:19}];
    //     setText(JSON.stringify(obj_data));
    // }

    // let doc_id = document.querySelector('#dummyArrayObject');
    // doc_id.addEventListener('click', function() {
    //     console.log('hey')
    // })

    return (
        <>
            <div className="container my-3">
                <h3>{data.heading}</h3>
                <div className="form-group mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleChange} rows="8"></textarea>
                </div>
                <div className='col-sm-12'>
                    <button className='btn btn-danger px-3 col-sm-1' onClick={() => setText(prevText)}>Undo</button>
                    <span className='px-5 col-sm-2' >{text.split(' ').length} words and {text.length} characters</span>
                    <span className='px-5 col-sm-2' > Estimated Time to Read : {(0.008 * text.split(' ').length).toFixed(4)} minutes</span>
                    <button className='btn btn-danger px-3 col-sm-1' style={{ float: 'right' }} onClick={() => setText('Enter text here')}>Reset</button>
                </div>
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
                <div className='my-3'>
                    <button className='btn col-sm-4' onClick={dummySortString}>Dummy string</button>
                    <button className='btn col-sm-4 btn-primary' onClick={sortingSortFunc}>Sort by js sort()</button>
                    <button className='btn col-sm-2' onClick={sortingForLoop}>Sort by forEach </button>
                </div>
                <div className='my-3'>
                    <button className='btn btn-primary col-sm-2' onClick={dummyArrayObject}>
                        Dummy Array Object
                    </button>
                    <button className='btn col-sm-2' onClick={filterLoop}>
                        Filter obj get name of age less then 22
                    </button>
                    <button className='btn btn-primary col-sm-2' onClick={reduceLoop}>
                        Reduce Loop
                    </button>
                </div>
            </div>
        </>
    )
}

export default TextForm