import React, {useCallback} from 'react'
import {NumberFormatValues, NumericFormat} from 'react-number-format'
import {TextInput} from '@sanity/ui'
import {FormFieldProps, PatchEvent, set, unset} from 'sanity'

type CurrencyInputProps = FormFieldProps & {
  value: number | undefined
  onChange: (event: PatchEvent) => void
}

const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>((props, ref) => {
  const {value, onChange} = props

  const handleChange = useCallback(
    (values: NumberFormatValues) => {
      const {floatValue} = values
      onChange(PatchEvent.from(floatValue === undefined ? unset() : set(floatValue)))
    },
    [onChange],
  )

  const isAllowed = useCallback((values: NumberFormatValues) => {
    const {formattedValue} = values
    const numberOfDigits = formattedValue.replace(/\D/g, '').length
    return numberOfDigits <= 10
  }, [])

  return (
    <NumericFormat
      getInputRef={ref}
      value={value}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$"
      decimalScale={2}
      customInput={TextInput}
      onValueChange={handleChange}
      isAllowed={isAllowed}
    />
  )
})

CurrencyInput.displayName = 'CurrencyInput'

export default CurrencyInput
