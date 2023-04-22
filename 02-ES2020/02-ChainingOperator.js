const Alice = {
    pet: {
      'name':'Cindy'
    },
    call() {
      console.log('Meowwww!')
    }
  }
  
  const Bob = {
    pet:{ 'name':'Elliot '},
    greet() {
      console.log('Woooof!!')
    }
  }

//   Complicated one
// if (Bob.pet && Bob.pet.name){
//     let petName = Bob.pet.name;
//     console.log(petName)
//   } else{
//     let petName = undefined
//     console.log(petName)
//   }

// Chaining Operator
let petName = Alice?.pet?.name

console.log(petName)