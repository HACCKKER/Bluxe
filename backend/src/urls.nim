import prologue

import ./views


let urlPatterns* = @[
    pattern("/", hello),
    pattern("/user/register", userReg, HttpPost)
]
