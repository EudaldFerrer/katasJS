// //PRIMER EJERCICIO KATAS

const fizzbuzz = (num) => {
    let result;

    if(num%3==0) {
        result = "fizz";

    }if(num%5==0){
        result = "buzz";

    }if(num%3==0 && num%5==0){
        result = "FizzBuzz";

    }if(num%3!==0 && num%5!==0){ 
        result = num;
    }

    return result;
}

module.exports = fizzbuzz



// SEGUNDO EJERCICIO KATAS
const fizzbuzz2 = (numList, num) => {
    let i = 0
    let result = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    while(i<numList.lenght){
       if( numList[i] % num!==0){
        result.splice(i,2)
        
       }else{
           console.log(numList[i])
       }
       i++
    }
    console.log(result)
    return result
}

// TERCER EJERCICIO KATAS
const fizzbuzz3 = (userList) =>{
    for(let i = 0; i<userList.lenght;i++){
        if(userList[i].age<18){
            delete userList[i].age
            delete userList[i].name
        }
    }
    console.log(userList)
    return userList
}