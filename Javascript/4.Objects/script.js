const name="Akshay";
const score="80";
const course="FULL STACK JAVA";

// old way to create an object - values are dynamic and keys are static 
const student1={
    name: name,
    score: score,
    course: course;
};

//ES6 shorthand way 
const student2={ name,score,course };

//computed property keys (calculated properties)
// property means key value pair or enrty/record // keys are also dynamic

const field ="score";
const prefix="student";
const obj ={
    [field]:88; //key is score
    ['$[prefix]Id'] : 101 // key is studentID
};
console.log(obj);

// OBJECT DESTRUCTURING - orignal object is not modified
const student3={
    studentName: "DEV",
    studentScore: 81,
    city : "Mumbai"
}
const {studentName,studentScore} = student3;
console.log(studentName,studentScore); /// DEV 83

// rename while destructing
const{ studentName:n, studentScore:s }= student3;
console.log(n,s);


//default values while destructing 
const {studentName:n2, batch= "May 2026"}= student3;
console.log(n2,batch); //DEV MAY 2026

//rest parameters 
const {name:n3...rest}= student3;
console.log(n3);
console.log(rest);

//destructure as function parameters - pass values to functions 
function printStudentCard({studentName,studentScore,city})=student3{
    console.log('${studentName} | ${studentScore}| ${city}')

}
printStudentCard();   // Dev | 83 | Mumbai

//spread,clone,copy,merge
const base1={
    name: "Vedant",
    score: 88,
}

// reference copy- no new object created .both base1 and base2 point towards the same object
const base2=base1;

//cloning: create new object using existing object using spread operator
//also called as shallow cloning 
const base3={...base1};  // spread[preffered]

// shallow cloning using Object.assign()
const.base4 = Object.assign({},base1);
base4.name= "Vedant name changed in base4";


// merge objects using spread operator
const StudentDetails={
    name: "Vedant",
    score: 88,
}
const studentAddress={
    city:"Pune",
    state: "MH",
    country:"India"
}

const merged= {...StudentDetails,...studentAddress} 

//shallow copy and deep copy 

//shallow copy : new object created with references being copied of contained objects 
// when we do shallow copy then primitives will be copied into new object but dependent object values will be copied using reference
//dependent object is a ashared object ...change in shared object will cause bugs 

const person1={
    name: "Vedant",
    age: 88,
Address:{
    city:"Pune",
    state: "MH",
    country:"India",
    region:"Asia",
}
};

const person2WithShallowCopy = {...person1}

//deep copy: when we do deep copy then primitives will be copied into new object 
// a new dependent object will be created in new object
//complete independent object 
// we use structuredClone() .

const person3 =structuredClone(person1);

//change in person1 one only affects person2 and not person3 due to deep copy. 

//iterating objects 
// retrieve only keys (array of keys) --- Object.keys(obj)
//retrieve only values (array of values)---Object.values(obj)
//get all properties -------- Object.entries(obj)
const person1={
    name: "Vedant",
    age: 88,
Address:{
    city:"Pune",
    state: "MH",
    country:"India",
    region:"Asia",
}
};
console.log('only keys=${Object.keys(person1)}');
console.log('only values=${Object.values(person1)}');
console.log('all entries=${Object.entries(person1)}');

for (const element of Object.values(person1)){
    console.log(element);
}

//loop with entries .............(most commonly used)
for (const[key,value] of Object.entries(person1)){
    console.log('${key}:${value}');
}

const studentRecord=[
    {
    id=101,
    name="Saloni",
    address:{
        city:"Pune",
        pincode:"411038"
    },
    courses =["Full stack java","Full stack python"]

}
 {
    id=102,
    name="Supriya",
    address:{
        city:"Pune",
        pincode:"411038"
    },
    courses =["Full stack java","Full stack python"]

} 
]

// find the course in which saloni is enrolled

const coursesEnrolledBySaloni=studentRecord.filter(
    (arrayElement)=>arrayElement.name==Saloni
).map((element)=>element.courses);
console.log(coursesEnrolledBySaloni: $(coursesEnrolledBySaloni));

//find name and city of every student 
const studentNameCity=studentRecord.map(
   function(student){
    const transformedStudent={
        name:student.name,
        city:student.address.city
    };
    return(transformedStudent)
}
)

//studentid,name,datewise attendence
const StudentAttendenceTracker=[
    {
        id:101,
        name:"Shubham",
        attendence:[
            {'21-05-26':'P'},
            {'22-05-26':'P'},
            {'23-05-26':'P'},
            {'24-05-26':'P'},
            {'25-05-26':'P'},
        ]
    }
    {
        id:102,
        name:"Samrat",
        attendence:[
            {'21-05-26':'P'},
            {'22-05-26':'A'},
            {'23-05-26':'P'},
            {'24-05-26':'P'},
            {'25-05-26':'P'},
        ]
    }

];

//FIND STUDENT NAME AND % ATTENDENCE
const studentNameAttendencePercentage=
StudentAttendenceTracker.map((record)=>{
    const transformedStudent={
        name:record.name,
        percentage: calculateAttendence(record.attendence)
    };
})

function calculateAttendence(attendence){
   const totalDays=attendence.lenght;
   let presentDaysCount=Object.values(attendence).filter(value=>value=='P').length;
   return(presentDaysCount/totalDays)
}
console.log(studentNameAttendencePercentage);


//using method chaining:
for (let entry : Object.entries(
    StudentAttendenceTracker.map(
        ()=>{
            let transformed={
                name: element.name,
                percentage: (element.attendence.filter(y=>y=='P').lenght)/element.attendence.lenght)*100
        
            }
        
    )
)){
    console.log(entry)
}

//ASSIGNMENT GIVEN -STUDENT PROFILE BUILDER 

