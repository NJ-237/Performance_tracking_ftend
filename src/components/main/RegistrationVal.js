import Validations from "./Validations";

export default class RegistrationVal{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    checkValidation(){
        let errors = []; 

        //email validations
        if(!Validations.checkEmail(this.email)) {
              errors['email'] = 'Invalid Email';
        }

        //password validation
        if(!Validations.minLength(this.password, 6)){
            errors['password'] = 'Password should be of 6 characters';
        }
        return errors;
    }
}