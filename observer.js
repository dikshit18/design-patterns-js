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
