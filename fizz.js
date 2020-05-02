function fizzBuzz(num){
    for(let i = 0; i<=num; i++){
        if(i % 5 == 0 && i % 3 == 0){
            console.log('fizzBuzz ' + i);
        }else if(i % 5 == 0){
            console.log('fizz ' + i);
        }else if(i % 3 == 0){
            console.log('Buzz ' + i);
        }
    }
}
fizzBuzz(100);