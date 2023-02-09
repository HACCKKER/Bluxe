import prologue
import os

import ./urls

var 
    debug = true
    secretKey = "PassWorD"

if getEnv("PROLOGUE_DEBUG", "true") == "false":
    debug = false

if existsEnv("PROLOGUE_PASSWORD") == true:
    secretKey = getEnv("PROLOGUE_PASSWORD")

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
