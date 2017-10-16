# boopbot
Simple node.js app that hosts a tmi twitch chat bot to keep track of streamer deaths with a SQL backend.

Commands are:
!boop ds -  which queries a SQL database and finds the amount of deaths related to the game Dark Souls. Can add different games later.
!boop ds ramendied - which queries the database and then adds one to the amount.

Future commands planned:
-Some sort of "set deaths number" which would involve string manipulation and type testing.
-Maybe a command that allows the addition of a new game.

Future features planned:
Tables for other things, like other streamers, maybe a table for things other than deaths.
