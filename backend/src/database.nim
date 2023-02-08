import norm/[model, sqlite]
import strformat
import random
import times
import os

randomize()

if dirExists(fmt"{getHomeDir()}/avatars") == false:
    createDir(fmt"{getHomeDir()}/avatars")
if dirExists(fmt"{getHomeDir()}/avatars/users") == false:
    createDir(fmt"{getHomeDir()}/avatars/users")
if dirExists(fmt"{getHomeDir()}/avatars/servers") == false:
    createDir(fmt"{getHomeDir()}/avatars/servers")

let db* = getDb()

type
  User* = ref object of Model
    userid*: uint32
    email*: string
    password*: string
    creationdate*: string
    birthdate*: string
    serverlist*: string
    friendlist*: string
    username*: string
    bio*: string
    status: uint8
    iconpath*: string

proc currentDateAsString*(): string =
    now().utc.format("yyyy-MM-dd")

proc parseStringDate*(timestring: string): DateTime =
    timestring.parse("yyyy-MM-dd")

proc currentTimeAsString*(): string =
    now().utc.format("yyyy-MM-dd-hh-mm-ss")

proc parseStringTime*(timestring: string): DateTime =
    timestring.parse("yyyy-MM-dd-hh-mm-ss")

proc randomId*(): uint32 =
    uint32(rand(100000000..214748363))

proc newUser*(
        username: string,
        email: string,
        password: string,
        birthdate: string): User =
    
    User(
        userid: randomId(),
        username: username,
        email: email,
        password: password,
        creationdate: currentDateAsString(),
        birthdate: birthdate,
        status: 0
    )

db.createTables(newUser("", "", "", ""))