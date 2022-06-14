const validatePrice = (string)=>{
    if( string.indexOf(".") >=0 ){
        return string.replace(".","")
    }
    else if(string.indexOf(" ") >=0 ){
        return string.replace(" ","")
    }
    else return string
    }
export default validatePrice;