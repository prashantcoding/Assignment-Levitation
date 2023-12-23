const checkPassword = (password) => {
   
    const minLength = 8;
  
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  
    
    const isLengthValid = password.length >= minLength;
    const isUpperCaseValid = hasUpperCase;
    const isLowerCaseValid = hasLowerCase;
    const isNumbersValid = hasNumbers;
    const isSpecialCharactersValid = hasSpecialCharacters;

   

    if(!isLengthValid || !isUpperCaseValid || !isLengthValid || !isNumbersValid || !isLowerCaseValid ||!isSpecialCharactersValid){
        return false;
    }
    return true
    
  };

  module.exports={checkPassword}
  
  // Example usage
  
