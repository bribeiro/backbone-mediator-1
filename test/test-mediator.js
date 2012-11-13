$(document).ready(function() {

  module("Backbone.Mediator", {

    teardown: function() {
      Backbone.mediator = new Backbone.Mediator;
    }

  });

  // As log as there are tests for the Bacbkone events, we do not need to test
  // whether our mediator is delegating callbacks properly. All we need to do
  // is test that our aliases are the proper ones.
  
  test("borrowed events method", 3, function() {
    var mediatorProto = Backbone.Mediator.prototype;
    var backboneEvents = Backbone.Events;

    equal(mediatorProto.subscribe, backboneEvents.on); 
    equal(mediatorProto.unsubscribe, backboneEvents.off); 
    equal(mediatorProto.publish, backboneEvents.trigger); 
  });

  test("can be extended", 1, function() {
    var ExtendedMediator = Backbone.Mediator.extend();
    ok(isSubclass(ExtendedMediator, Backbone.Mediator));
  });

  test("has global mediator", 1, function() {
    ok(Backbone.mediator instanceof Backbone.Mediator);
  });

  // Helpers
  // -------

  var isSubclass = function(type, parent) {
    var Carrier = function() {};
    Carrier.prototype = type.prototype;
    return new Carrier() instanceof parent;
  };

});
