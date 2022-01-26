import React, {useState} from "react";
import './ChangeText.css'

function ChangeText({AllText}) {
    const [text,setText] = useState(false);
    const listItems = AllText.split('.').map((i) => i !== '' ? <li key={1}>{i}</li> : null );
    console.log(listItems);

    // const lastElement = listItems.pop();

    const showText = ()=>{
    setText(!text)
    }

    return (
        <div className={'mainText'}>
            <ul>
            <p className={'paragraph'} style={text === false ? {height:'25px', overflow: 'hidden'}: {height: '126px'}}>
                {listItems}
            </p>
            </ul>
            <button onClick={showText} className={'butt'}> {text ? 'hide' : 'show' }</button>
        </div>

    );
}


export default ChangeText;