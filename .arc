@app
begin-app

@static
prune true

@plugins
architect/plugin-lambda-invoker
enhance/arc-plugin-enhance

@events
shared-event
  src jobs/events/shared-event

@begin
appID 7S1MK0ZW
