// Write a JavaScript function named printObjectProperties that takes an object as an argument and uses the for...in loop to print all the properties and their values in the following format: "property: value". If the object is empty, print "Object is empty".

function printObjectProperties(object){
    for( let i in object){
        if(object[i]==null)
        {
            console.log("Object is empty");
        }
        else{
        console.log(i+": "+object[i]);
        }
    }

}
var laptop={
    // brand:'dell',
    // gen:'10th',
    // core:'i3',
    // touchscree:false

}
printObjectProperties(laptop)