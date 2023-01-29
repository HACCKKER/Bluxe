# Package

version       = "0.1.0"
author        = "HACKKER"
description   = "Backend for Bluxe messaging App"
license       = "GPL-3.0-or-later"
srcDir        = "src"
bin           = @["bluxe"]


# Dependencies

requires "nim >= 1.6.8"
requires "prologue >= 0.6.4"
requires "db >= 1.1.0"
requires "smtp >= 0.1.0"