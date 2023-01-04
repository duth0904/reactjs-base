import { useState } from 'react'

const useInput = (handleValidate: any) => {
  const [value, setValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const isValidValue = handleValidate(value)
  const isHasValidateError = !isValidValue && isTouched

  const handleOnChange = (event: any) => {
    setValue(event.target.value)
  }

  const handleOnBlur = () => {
    setIsTouched(true)
  }

  const resetInput = () => {
    setIsTouched(false)
    setValue('')
  }

  return {
    inputValue: value,
    handleOnChange,
    handleOnBlur,
    resetInput,
    isHasValidateError,
  }
}

export default useInput
