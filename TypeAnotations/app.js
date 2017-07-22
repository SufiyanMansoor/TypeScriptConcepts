// function greeter(Person:String) {
//     return "Hello " + Person
// }
// var user="Hi Sufiyan"
// document.body.innerHTML=greeter(user); 
/*now i convert string into Array its can not change and notify me
you are wrong
*/
function greeters(Person) {
    return "Hello" + Person;
}
var users = [1, 2, 3];
document.body.innerHTML = greeters(users);
