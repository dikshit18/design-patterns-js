/* Arrow functions can act as Constructors because To be a constructor, a function object must have a [[Construct]] internal method.

Functions created with the function keyword are constructors, as are some built-in functions such as Date. These are the functions you can use with new.

Other function objects do not have a [[Construct]] internal method. These include arrow functions. So you can't use new with these. This makes sense since you can't set the this value of an arrow function.
*/
const MoneyHeist = function() {
  this.viewers = [];
  const subscribe = user => {
    this.viewers.push(user);
    console.log("User subscribed...", user.name);
    console.log("Viewers...", this.viewers);
  };
  const unSubscribe = user => {
    const index = this.viewers.indexOf(user);
    if (index > -1) {
      this.viewers.splice(index, 1);
    }
    console.log("User unSubscribed...", user.name);
  };
  const unSubscribeAll = () => {
    this.viewers = [];
    console.log("Unsibscribed all users...", this.viewers);
  };
  const notifyAllSubsciber = () => {
    this.viewers.map(viewer => {
      viewer.notify(viewer.name);
    });
  };
  return { subscribe, unSubscribe, unSubscribeAll, notifyAllSubsciber };
};
const User = function(name) {
  this.name = name;
  const notify = name => {
    console.log("User notified.... ", name);
  };
  return {
    notify,
    name: this.name
  };
};

const user1 = new User("Paul");
console.log(user1.name);
const MoneyHeistObject = new MoneyHeist();
MoneyHeistObject.subscribe(user1);
//MoneyHeistObject.unSubscribe(user1);
//MoneyHeistObject.unSubscribeAll();
MoneyHeistObject.notifyAllSubsciber();
