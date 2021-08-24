import React, {  useState } from 'react';
// import './Product.css'
import classes from './Product.module.css'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'

function Product() {
    const [activeSelect , SetActiveSelect] = useState(false)
 
    return (
        <div className="product">
            {/* <div ref={exampleDiv} className="example"></div> */}
            {/* <div className={active ? "box activeBox" : "box"}></div>
            <button onClick={() => setActive(!active)}>Set active</button> */}
            <div className={classes.select} onClick={ () =>  SetActiveSelect(!activeSelect)} >
                Categorias{activeSelect ?  <FiChevronDown/> :  <FiChevronUp/>}
            </div>
            <ul className={activeSelect ? classes.activeUl : classes.notActiveUl} >
                <li> <input type="checkbox" /> option1</li>
                <li> <input type="checkbox" /> option2</li>
                <li> <input type="checkbox" /> option3</li>
                <li> <input type="checkbox" /> option4</li>
            </ul>
        </div>
    )
}

export default Product
