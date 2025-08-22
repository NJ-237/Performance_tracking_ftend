export default class Validations{
    static checkEmail(email){// Use the 'email' parameter directly
         if (
            //   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
            /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,)  
        )
  {
    return true;
  }
  return false;
    }

    static minLength(name, minLength){
        if (name.Length < minLength){
            return false;
        }
        return true; 
        


        // Fixed: Use the 'email' parameter instead of 'myForm'
    //     return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    // }

    // static minLength(name, minLength) {
    //     // Fixed: JavaScript uses 'length' (lowercase), not 'Length'
    //     return name.length >= minLength; // Simplified return

  //  /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email,)  
  }

}