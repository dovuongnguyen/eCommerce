Meteor.publish("inventory", function () {
  return Inventory.find({});
});