//PRIMER EJERCICIO KATAS

const fizzbuzz = require ("../src/fizzbuzz");

test ('retorna fizz si es divisible entre 3', () => {
    let result = fizzbuzz(3)
    expect(result).toBe ("fizz")
})

test ('retorna buzz si es divisible entre 5', () => {
    let result = fizzbuzz(5)
    expect(result).toBe ("buzz")
})

test('retorna fizzbuzz si es divisible entre 3 i 5', () => {
    let result = fizzbuzz(30)
    expect(result).toBe ("FizzBuzz")
})

test('retorna el mateix numero si no es divisible entre 3 o 5', () => {
    let result = fizzbuzz(2)
    expect(result).toBe (2)
})

//SEGUNDO EJERCICIO KATAS
const fizzbuzz2 = require('../src/fizzbuzz')
test ('retorna array divisible entre el paramatre', () => {
    const numList = [0,1,2,3,4,5,6,7,8,9,10]
    let result = fizzbuzz2(numList,2)

    function x (numList, num){
        let i = 0
        while(i<numList.lenght){
            if(numList[i]%num!==0){
               numList.splice(i,2)
            }else{
                console.log(i)
            } 
        }
        let numList1 = numList
        return numList1
    }

    expect(result).toBe (x(numList, 2))
    
})

//TERCER EJERCICIO KATAS
const fizzbuzz3 = require("../src/fizzbuzz")
test('funcion que recibe objetos con nombre y edad y te retorna solo los mayores de edad', () => {
    
    const listUsers = [{name: 'Pepa',age: 70},{name: 'Josep',age: 12},{name: 'Eudald',age: 19},{name: 'María',age: 17},{name:'Joan',age: 27}]
    function upper18(listUsers){
        for(let i = 0; i<listUsers.lenght;i++){
            if(listUsers[i].age<18){
                delete listUsers[i].age
                delete listUsers[i].name
            }
        }

        return listUsers
    }
    
    let result = fizzbuzz3(listUsers)

    expect(result).toBe(upper18(listUsers))
})