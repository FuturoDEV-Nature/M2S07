import PropsTypes from 'prop-types'

export function Soma({ numero1, numero2 }) {
    const total = numero1 + numero2

    return <strong>Total da soma é: {total}</strong>
}

Soma.propTypes = {
    numero1: PropsTypes.number,
    numero2: PropsTypes.number.isRequired,
}