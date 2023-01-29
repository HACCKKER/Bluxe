import prologue

import ./views


let urlPatterns* = @[
    pattern("/", hello),
    pattern("/user/add", userAdd)
]
