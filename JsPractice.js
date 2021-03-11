//input fields
const firstName= document.getElementById('firstName');
const lastName= document.getElementById('lastName');
const password= document.getElementById('password');
const confirmPassword= document.getElementById('confirmPassword');
const email= document.getElementById('email');
//Form
const form= document.getElementById('myForm');
//Validation colors
const green='4ACAF50';
const red = 'aF44336'; 
//handle form


//validate
function validateFirstName(){
    //check if is empty
      if(checkIfEmpty(firstName)) return;
      //is only letters 
      if(!checkIfOnlyLetters(firstName))
      return true;
}
function validateLastName(){
    //check if is empty
      if(checkIfEmpty(lastName)) return;
      //is only letters 
      if(!checkIfOnlyLetters(lastName))
      return true;
}
function validatePassword(){
    //check if is empty
      if(checkIfEmpty(password)) return;
      //Must be of certain length
      if(!meetLength(password,6,8))return;
      //check password against char set
        if (containChar(password,1)) return;
      return true;
}
function validateconfirmPassword(){
    if (password.className!=='valid') {
        setInvalid(confirmPassword,'Password must be valid');
        return;
    }
        //if they match
        if (password.value!==confirmPassword.value) {
            setInvalid(confirmPassword,'Password must match');
            return;
        }else{
            setValid(confirmPassword);
        }
        return true; 
    }
 function validateEmail(){
     if (checkIfEmpty(email)) return;
     if(!containChar(email,5))return;
      return true;
     
 }


//utility functions
function checkIfEmpty(field){
       if(isEmpty(field.value.trim())){
           //set field invalid
           setInvalid(field, `${field.name} must not be empty`);
            return true;
       }else{
           //set field valid
           setValid(field);
           return false;
       }
}
function isEmpty(value){
    if(value=='')return true;
    return false;
}
function setInvalid(field,message){
     field.className='invalid';
     field.nextElementSibling.innerHTML= message;
     field.nextElementSibling.style.color= red;
}
function setValid(field){
    field.className='valid';
    field.nextElementSibling.innerHTML= '';
    //field.nextElementSibling.style.color= red;
}
function checkIfOnlyLetters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    }else{
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}
function meetLength(field,minL,maxL){
    if (field.value.length >= minL && field.value.length < maxL ) {
       setValid(field);
       return true; 
    }else if (field.value.length < minL) {
        setInvalid(field, `${field.name} must be atleast ${minL} characters long`);
        return false;
    }else{
        setInvalid(field, `${field.name} must be shorter than ${maxL} characters`);
         return false;
    }
}
function containChar(field,code){
    let regEx;
    switch (code) {
        case 1:
            //letters
            regEx=/(?=.*[a-zA-Z])/;
            return matchRegEx(regEx,field,'Must contain atleast one letter');
            case 2:
                //letter and numbers
                regEx =/(?=.*\d)(?=.*[a-zA-Z])/;
                return matchRegEx(regEx,field,'Must contain atleast one letter and one number');
                case 3:
                    //uppercase lowercase and number
                    regEx=/(?=.*\d)(?=.*[a-z])(?=.*A-Z])/;
                    return matchRegEx(regEx,field,'Must contain at least one uppercase,one lowercase, and one number');
                  case 4:
                       regEx=/(?=.*\d)(?=.*[a-z])(?=.*A-Z])(?=.*\W)/;
                      return matchRegEx(regEx,field,'Must contain at least one uppercase,one lowercase, and one number and one special character');
                      case 5:
                          //email
                          regEx= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                          return matchRegEx(regEx,field,'Must be a valid email address');
                    default:
            return false;
    }
}
function matchRegEx(regEx,field,message){
    if (field.value.match(regEx)) {
        setValid(field);
        return true;
    }else{
        setInvalid(field,message);
        return false;
    }
}



