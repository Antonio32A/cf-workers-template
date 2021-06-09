const handleRequest = () =>
    new Response(JSON.stringify({ foo: "bar" }), { headers: { "Content-Type": "application/json" } });

addEventListener("fetch", event => event.respondWith(handleRequest(event.request)));
