const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download song",
    category: "download ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply "please give me url or title  "
const search = await yts (q)
const data = search.video[0]:
const url = data.url
let desc = '
 ✅THANUJA-MD SONG DOWNLOAD✅

 title: $(data.title)
description:$(data.timestamp)
ago: $(data.ago)
views:$(data.views)


❤️MADE BY THANUJA-MD ❤️
'
await.conn.sendmessage (form,{image:{url:data thumbnail},caption:desc},{quoted:mek})
  '

  //download audio
let down = await fg .uta(url)
let downloadurl = dowe_id_ url
    
    // send audio message 
await.conn.sendmessage (form,{audio:{url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})
await.conn.sendmessage (form,{document:{url:downloadurl},mimetype:"audio/mp3"},fileName:data.titel + ".mp3",caption:"MADE BY THANUJA-MD"}{quoted:mek})




    
}catch(e){
console.log(e)
reply('${e}') 
} 
}(


//========video-di=================
    cmd({
    pattern: "video",
    desc: "download video",
    category: "download ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply "please give me url or title  "
const search = await ytv (q)
const data = search.video[0]:
const url = data.url
let desc = '
 ✅THANUJA-MD VIDEO DOWNLOAD✅

 title: $(data.title)
description:$(data.timestamp)
ago: $(data.ago)
views:$(data.views)


❤️MADE BY THANUJA-MD ❤️
'
await.conn.sendmessage (form,{image:{url:data thumbnail},caption:desc},{quoted:mek})
,

  

  //download video
let down = await fg .uta(url)
let downloadurl = dowe_id_ url
    
    // send video +document message 
await.conn.sendmessage (form,{video:{url:downloadurl},mimetype:"video/mp4"},{quoted:mek})
await.conn.sendmessage (form,{document:{url:downloadurl},mimetype:"video/mp4"},fileName:data.titel + ".mp4",caption:"MADE BY THANUJA-MD"}{quoted:mek})




    
}catch(e){
console.log(e)
reply('${e}') 
} 
}(
