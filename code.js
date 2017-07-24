// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();

/*Episode 1
  Output => My name is Keith
  The variable 'name' is a global variable which means the function 'printName'
  has access to it
*/

// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());

/*Episode 2
  Output => 3
  The local variable 'score' is overshadowing the global variable 'score' and
  so 3 is returned
*/

// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();

/*Episode 3
  Output => 0: Ducks
    1: Dogs
    2: Lions
  The variable 'myAnimals' within the function 'listAnimals' is the same as the
  global variable 'myAnimals' (as the keyword var is not used) and so its
  contents are reassigned to the new array containing "ducks", "dogs" and "Lions"
*/

// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );

/*Episode 4
  Output => Suspects include: Jay, Val, Harvey, Rick
    Suspect three is:Keith
  The local variable 'suspectThree' is overshadowing the global variable
  'suspectThree' within the function 'allSuspects'. As the keyword var was used
  to override the local variable 'suspectThree' the global variable is not
  changed and the final output is "Keith"
*/

// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());

/*Episode 5
  Output => Poirot
  The property 'name' on the global variable 'detective' is changed prior to the
  property being returned by the function 'detectiveInfo' (which return the
  it via the function 'printName'). It is changed to "poirot" and so this is
  printed out.
*/

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

/*Episode 6
  Output => the murderer is  rick
  The global variable 'murderer' is not overridden by the code withing 'innerFunction'
  as the assignment of the variable 'murderer' within this function is altering the
  variable 'murderer' declared within 'outerFunction'
*/
