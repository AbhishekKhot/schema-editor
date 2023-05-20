import { useEffect, useState } from 'react'
import './style.css'
import ObjectNode from '../object-node'
import StringNode from '../string-node'

export default function SchemaEditor() {
    const [schema, setSchema] = useState({
        type: 'object',
        name: 'schema',
        properties: [],
        validations: []
    })

    useEffect(() => {
        console.log(schema)
    }, [schema])

    return (
        <div className='schema-editor-container'>
            <ObjectNode schema={schema} setSchema={setSchema} />
            <>
                {schema.properties.map((obj, index) => {
                    switch (obj.type) {
                        case "object":
                            return <ObjectNode schema={schema} setSchema={setSchema} key={index} />
                        case "string":
                            return <StringNode schema={schema} setSchema={setSchema} key={index} />
                        case "number":
                            return <NumberNode key={index} />
                        case "boolean":
                            return <BooleanNode key={index} />
                        case "array":
                            return <ArrayNode key={index} />
                        default:
                            return null
                    }
                })
                }
            </>
        </div>
    )
}
