function greeter(person) {
    return "Hello" + person.firstName + " " + person.lastname;
}
var user = { firstName: "Hi", lastname: "Sufiyan" };
document.body.innerHTML = greeter(user);
