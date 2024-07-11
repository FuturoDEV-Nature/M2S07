import { forwardRef } from 'react'

export const Input = forwardRef(({ label, prefix, ...rest }, ref) => {
    return (
        <div className="form-control">
            {
                label && (<label htmlFor={rest.id}>{label}</label>)
            }
            {/* {label && (<label htmlFor="">{label}</label>)} */}
            {/* <span>focus: {isFocus ? 'Em foco' : 'sem foco'}</span>
            <span>Display: {value}</span> */}
            <div style={{ width: '100%', display: 'flex', gap: 8 }}>
                {prefix && <span>{prefix}</span>}
                <input 
                    ref={ref}
                    {...rest}
                />
            </div>
        </div>
    )
})

Input.displayName = 'Input'
