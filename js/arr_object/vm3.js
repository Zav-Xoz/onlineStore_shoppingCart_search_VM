 const person = {
     name: 'Sergii',
     age: 40,
     job: 'IT',
     hobbies: ['Book', 'Film', 'Food', 'Antiques'],
     info: {
         hasWife: false,
         weght: 100
     },
     toRemove: Date.now(),
     sayHallo() {
         console.log('Hello Srgii');
     }
 };
 const jobKey = 'job';
 delete person.toRemove;

 console.dir(person);
 console.log(person);
 console.log('Возраст ', person.age);
 console.log('Имя ', person['name']);
 console.log('Работа ', person[jobKey]);
 person.sayHallo();
 console.log('---------------------------------------------------------------------');

 class Person {
     constructor(firstName, personAge) {
         this.name = firstName,
             this.personAge = personAge,
             this.job = 'JS Developer'
     }
     sayHallo() {
         console.log(this.name + ' say Hello!');
     }
     print() {
         console.log(JSON.stringify(this));
     }
 }

 //  const person2 = new Person('Olga', 34);
 //  const person3 = new Person('Igor', 38);
 //  console.log(person2, person3);
 //  person3.print();

 //  !!!!!!!!!!!! отсортировать и вывести мсвойстава обьекта - не методы!!!
 //  !!!!!!!!!!!! отсортировать и вывести мсвойстава обьекта - не методы!!!
 //  !!!!!!!!!!!! отсортировать и вывести мсвойстава обьекта - не методы!!!
 const printObject = (object = {}) => {
     //  for (let key in object) {
     //      if (typeof object[key] !== 'function') {
     //          console.log('key ', key);
     //          console.log('values ', object[key]);
     //      }
     //  }

     Object.keys(object).forEach(key => {
         if (typeof object[key] !== 'function') {
             console.log('value', object[key]);
         }
     });


 };
 printObject(person);