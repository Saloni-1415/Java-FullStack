//const addButton=document.querySelector("#addButton");
//addButton.addEventListener( "click", buttonClickLogicFunction);

    //function buttonClickLogic(event){
        //on click what event should happen
       // console.log("button clicked")
        //console.log('event type ${event.type}');
        //console.log('event target ${event.target}');
    //}
    function getStudentDetails(id, callback) { 

    setTimeout(() => { 

        const student = { id, name: "Priya", courseId: 10 }; 

        callback(null, student); 

    }, 5000); 

} 

 

getStudentDetails(101, callback); 

 

function callback(course, student){ 

Console.log(`course = ${course} | student details = ${student}`); 

} 

