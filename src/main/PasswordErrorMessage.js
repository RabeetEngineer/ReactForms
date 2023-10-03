import React from 'react'

const PasswordErrorMessage = ({password}) => {
    if(password.isTouched && password.value.length < 8){
        return(
            <span className='error'>
                password must be atleast 8 characters long
            </span>
        );
    }
  return (
    null
  )
}

export default PasswordErrorMessage