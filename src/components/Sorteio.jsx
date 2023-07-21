import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {

    const { min, max } = props

    // random number between min and max
    const random = parseInt(Math.random() * (max - min)) + min


    return (
        <Card title="Sorteio de Números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong> { random } </strong>
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
export default connect(mapStateToProps)(Sorteio)