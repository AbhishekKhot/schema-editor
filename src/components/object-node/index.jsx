import React, { useEffect, useState } from 'react'
import './style.css'

export default function ObjectNode({ schema, setSchema }) {
    const [nodeName, setNodeName] = useState("")
    const [showNodeTypeContainer, setShowNodeTypeContainer] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (nodeName.trim() === "") {
                return
            }
            console.log(nodeName.trim())
        }, 500);
        return () => clearTimeout(timeout);
    }, [nodeName]);

    function handleAddNewNode(nodeType) {
        switch (nodeType) {
            case 'object':
                schema?.properties.push({
                    type: 'object',
                    name: `object node ${schema.properties.length}`,
                    properties: [],
                    validations: [],
                })
                setSchema({ ...schema })
                break;
            case 'string':
                schema.properties.push({
                    type: 'string',
                    name: `string node ${schema.properties.length}`,
                    validations: [],
                })
                setSchema({ ...schema })
                break;
            default:
                return false
        }
    }

    return (
        <div className='object-node-container'>
            <div className='object-input-container'>
                <input type="text" value={nodeName} onChange={(e) => setNodeName(e.target.value)} />
                <div>OBJECT</div>
            </div>
            <div className='add-property-container'>
                <button onClick={() => setShowNodeTypeContainer((prev) => !prev)}>+ add property</button>
                {showNodeTypeContainer &&
                    <ul className='node-type-container'>
                        <li className='select-item' onClick={() => handleAddNewNode("object")}>OBJECT</li>
                        <li className='select-item' onClick={() => handleAddNewNode("string")}>STRING</li>
                        <li className='select-item' onClick={() => handleAddNewNode("number")}>NUMBER</li>
                        <li className='select-item' onClick={() => handleAddNewNode("boolean")}>BOOLEAN</li>
                        <li className='select-item' onClick={() => handleAddNewNode("array")}>ARRAY</li>
                    </ul>
                }
            </div>
        </div>
    )
}
