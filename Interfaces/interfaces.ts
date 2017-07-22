interface Person{
 firstName:string;
 lastname:string

}

function greeter(person:Person) {
    return "Hello" + person.firstName + " " +person.lastname
}
var user={firstName:"Hi",lastname:"Sufiyan"};

document.body.innerHTML=greeter(user)