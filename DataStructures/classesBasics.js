// Syntax for Classes
// class Student {
//     constructor(firstName, lastName, year) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.grade = year;
//     }
// }

// let firstStudent = new Student('May', 'Sandler');
// let secondStudent = new Student('Yousuf', 'Quddus');
// console.log(secondStudent)


// Instance Methods
// class Student {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.absences = 0;
//         this.scores = [];
//     }
//     fullName(){
//         return `Your full name is ${this.firstName} ${this.lastName}`;
//     }
//     markLate(){
//         this.absences += 1;
//         if (this.absences >= 3) {
//             return ('YOU ARE EXPELLED!')
//         }
//         return `${this.firstName} ${this.lastName} has been late ${this.absences} times.`
//     }
//     addScore(score){
//         this.scores.push(score);
//         return this.scores;
//     }
//     calculateAverage(){
//         let sum = this.scores.reduce(function(a,b){return a+b;})
//         return sum/this.scores.length;
//     }
// }

// let firstStudent = new Student('May', 'Sandler', 2);
// let secondStudent = new Student('Yousuf', 'Quddus', 1);
// secondStudent.addScore(76);
// console.log(secondStudent.addScore(98));
// console.log(secondStudent.calculateAverage())


// Class Methods (Static key word)(like a Utility Function)
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.absences = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.absences += 1;
        if (this.absences >= 3) {
            return ('YOU ARE EXPELLED!')
        }
        return `${this.firstName} ${this.lastName} has been late ${this.absences} times.`
    }
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
    // example of class method
    static enrollStudents(){
        return 'ENROLLING STUDENTS!'
    }
}

let firstStudent = new Student('May', 'Sandler', 2);
let secondStudent = new Student('Yousuf', 'Quddus', 1);
console.log(Student.enrollStudents())