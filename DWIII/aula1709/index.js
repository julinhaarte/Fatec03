// const person = {
//     id: 1,
//     name: "Julinha",
//     age: 24
// }

// function printAge(objPerson){
//     console.log(objPerson.age);
// }

// const printAge = ({age, name, id}) => console.log(id, name, age);

// printAge(person);

const people = [
    {
        id: 2,
        name: "Julinha",
        age: 24,
        salary: 2500
    },
    {
        id: 2,
        name: "Ana",
        age: 19,
        salary: 2000
    },
    {
        id: 3,
        name: "Fah",
        age: 26,
        salary: 3000
    }

];

// console.log(people);

// const getById = (people,id=0) => people.find((p) => p.id === id); 

// const objPerson = getById(people, 2);



// const getById = (people=[], id=0) => {
//    return people.filter((p) => p.id === id)
// }

// const foundPeople = getById(people, 2);


// console.log(`Objeto Retornado: ${JSON.stringify(foundPeople)}`);

// const getOlderThan20 = (people=[]) => {
//     return people.filter((p) => p.age >= 20);
// }

// const olderThan20 = getOlderThan20(people);

// console.log(`People older tan 20: ${JSON.stringify(olderThan20)}`)


// const peopleSalary = (people = []) => {
//     const newSalary = people.map(({id, name, age, salary}) => ({
//         id,
//         name,
//         age,
//         salary: salary * 1.05,

//     })); 
//     return newSalary;
// }

const peopleSalary = (people = []) => {
    return people.map((person) => ({
        ...person,
        salary: salary * 1.05,

    })); 

}

const salaryReajusted = peopleSalary(people);

// console.log(`${JSON.stringify(salaryReajusted)}`);

// const sumSalaries = (people=[]) => {
//     return people.reduce((acc, person) => acc+person.salary, 0)
// };
// const totalSalaries = sumSalaries(salaryReajusted);

// console.log(`Total: ${totalSalaries}`);

salaryReajusted.forEach(({id, name, age, salary}))