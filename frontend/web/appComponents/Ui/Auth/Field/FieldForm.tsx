import { FC, forwardRef } from "react";
import styles from '../../../../styles/appComponents/UiApp/Auth/Fields/FieldForm.module.scss'
import { IField } from "../../../Logic/Auth/interfaces/field.interface";


const FieldForm = forwardRef<HTMLInputElement, IField> (
    ({ error, type = 'text', style, ... rest }, ref) => {
        return(    
            <div className={styles.input} style={style}>
                <input ref={ref} type={type} {... rest}/>
                {error && <div className={styles.error}>{error.message}</div>}
            </div>
        
        )
    }
)
    
FieldForm.displayName = 'Field'

export default FieldForm
