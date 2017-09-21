
export function getUserList(){
    let myFetchOptions = {
        method: 'GET'
    };
   return(
    fetch('http://localhost:3000/users', myFetchOptions)
   ) 
}