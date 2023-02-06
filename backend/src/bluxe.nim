import prologue
import os

import ./urls

var 
    debug = true
    secretKey = ""

if getEnv("PROLOGUE_DEBUG", "true") == "false":
    debug = false
else:
    debug = true

if existsEnv("PROLOGUE_PASSWORD") == true:
    secretKey = getEnv("PROLOGUE_PASSWORD")
else:
    secretKey = "PassWorD"

let
    settings = newSettings(
        appName = "Bluxe",
        debug = debug,
        port = Port(8080),
        secretKey = secretKey
    )

when isMainModule:
    var app = newApp(settings = settings)
    
    app.addRoute(urls.urlPatterns, "")
    app.run()
