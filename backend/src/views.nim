import prologue


proc hello*(ctx: Context) {.async.} =
    resp("<h1>Hello, Prologue!</h1>")

proc userReg*(ctx: Context) {.async.} =
    if ctx.request.reqMethod == HttpPost and ctx.request.contentType == "Json":
        resp("ok")
    else:
        resp(abort())