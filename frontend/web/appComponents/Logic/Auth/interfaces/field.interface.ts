import {InputHTMLAttributes} from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
    error?: FieldError
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps


export interface IField extends TypeInputPropsField{}