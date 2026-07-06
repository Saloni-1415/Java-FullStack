function getStudentId (id)
   return new Promise(resolve,reject)=>{
    setTimeout(()=>{
        if (id<=0){
            reject(new Error("INVALID STUDENT ID "));  //failure 
        } else {
            return({id,name:" Priya" ,courseId:101}); //success
        }
    },5000);
    }) 
    


function getCourse(id){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve ({id,name:"FULL STACK JAVA"});
        },5000)
        })
}



