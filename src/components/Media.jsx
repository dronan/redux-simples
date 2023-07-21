import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

const Media = props => {
    const { min, max } = props
    const resultado = ( min + max ) / 2
    
    return (
        <Card title="Media de Números" green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{resultado}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

// connect is a function "()" that returns another function "()()"
export default connect(mapStateToProps)(Media)