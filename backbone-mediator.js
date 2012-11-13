(function(Backbone) {

  // Borrow the extend method.
  var extend = Backbone.Model.extend;

  // Create the `Mediator` constructor and attach the Backbone `extend`
  // method, just in case someone wants to build on top of it.
  Mediator = function() {};
  Mediator.extend = extend;

  _.extend(Mediator.prototype, {

    publish: Backbone.Events.trigger,
    subscribe: Backbone.Events.on,
    unsubscribe: Backbone.Events.off

  });

  // Expose the `Mediator` constructor.
  Backbone.Mediator = Mediator;

  // Expose a global mediator. Can be useful for cross-application
  // communication, but can cause all the headaches a global can.
  Backbone.mediator = new Mediator;

}).call(this, Backbone);
