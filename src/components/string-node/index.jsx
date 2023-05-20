import React, { useState, useEffect } from 'react'
import './style.css'

export default function StringNode({ schema, setSchema }) {
    const [nodeName, setNodeName] = useState("")
    const [showValidationsContainer, setShowValidationsContainer] = useState(false)
    const [validations, setValidations] = useState([])

    function addValidations(validationType) {
        switch (validationType) {
            case "MIN":
                setValidations([...validations, { type: "MIN" }])
                break;
            case "MAX":
                setValidations([...validations, { type: "MAX" }])
                break;
            case "LENGTH":
                setValidations([...validations, { type: "LENGTH" }])
                break;
            case "MATCH":
                setValidations([...validations, { type: "MATCH" }])
                break;
            default:
                return null
        }
    }

    function removeValidation(index) {
        validations.splice(index, 1)
        setValidations([...validations])
    }

    return (
        <div className='string-node-container'>
            <div className='string-input-container'>
                <input type="text" value={nodeName} onChange={(e) => setNodeName(e.target.value)} />
                <div>STRING</div>
            </div>
            <div>
                {validations.map((object, index) => (
                    <ul>
                        <li className='validation-container' key={index}>
                            <div>{object.type}</div>
                            <input type={object.type == "number" ? "number" : "text"} />
                            <div className='remove-validation' onClick={() => removeValidation(index)}>X</div>
                        </li>
                    </ul>
                ))
                }
            </div>
            <div className='add-validations-container'>
                <button onClick={() => setShowValidationsContainer((prev) => !prev)}>+ add validations</button>
                {showValidationsContainer &&
                    <ul className='validations-type-container'>
                        <li className='select-item' onClick={() => addValidations("MIN")}>MIN</li>
                        <li className='select-item' onClick={() => addValidations("MAX")}>MAX</li>
                        <li className='select-item' onClick={() => addValidations("LENGTH")}>LENGTH</li>
                        <li className='select-item' onClick={() => addValidations("MATCH")}>MATCH</li>
                    </ul>
                }
            </div>
        </div>
    )
}
