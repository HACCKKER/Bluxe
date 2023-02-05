import prologue

import ./urls

let
    env = loadPrologueEnv(".env")
    settings = newSettings(
        appName = env.getOrDefault("appName", "Prologue"),
        debug = env.getOrDefault("debug", true),
        port = Port(env.getOrDefault("port", 8080)),
        secretKey = env.getOrDefault("secretKey", "paSwort")
    )

when isMainModule:
    var app = newApp(settings = settings)
    
    app.addRoute(urls.urlPatterns, "")
    app.run()
