//base by DGXeon
//recode by GiddyTennor 

require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    downloadContentFromMessage,
    
    mentionedJid,
    getContentType
    
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 

const absenData = {};
const { temporary, temmp } = require('./tempor')

const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./XMEDIA/database/bellahvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./XMEDIA/database/bellahsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./XMEDIA/database/bellahimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./XMEDIA/database/bellahvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./XMEDIA/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./XMEDIA/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./XMEDIA/database/apk.json'))
const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night mofo🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening mofo🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon mofo🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning mofo 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning mofo🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['+', '/',','] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isXeonMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const XeonTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= XeonTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(XeonBotInc, m, premium)
                //theme sticker reply
        const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./XMEDIA/theme/sticker_reply/wait.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XMEDIA/theme/sticker_reply/admin.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./XMEDIA/theme/sticker_reply/botadmin.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./XMEDIA/theme/sticker_reply/owner.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./XMEDIA/theme/sticker_reply/group.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./XMEDIA/theme/sticker_reply/private.webp')
        XeonBotInc.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
        
        //premium
        async function replyprem(teks) {
    replygcxeon(`This feature is for premium user, contact the owner to become premium user`)
}
          //script replier
        async function sendXeonBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await XeonBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygcxeon(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                XeonBotInc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./XMEDIA/theme/bellah.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               XeonBotInc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./XMEDIA/theme/bellah.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            }
        }
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }     
                    //Fake quoted
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XMEDIA/theme/bellah.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
  const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
            var v16 = m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype == "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
         const v18 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(v16) ? v16.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : ".";
        const v20 = v16.replace(v18, "").trim().split(/ +/).shift().toLowerCase();
       const v51 = ["✅"];    
        const v52 = v51[Math.floor(Math.random() * v51.length)];
    const vF4 = p11 => {
      return XeonBotInc.sendMessage(m.chat, {
        react: {
          text: p11,
          key: m.key
        }
      });
    };
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = XeonBotInc.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: XeonBotInc.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: true
               }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = true 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autobio' in setting)) setting.autobio = true 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: XeonBotInc.getName(botNumber), alias: botname}, owner: { nick: XeonBotInc.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: XeonBotInc.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: XeonBotInc.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

  const { jadibot, conns } = require('./jadibot') 
  async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'GiddyTennor',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcxeon(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            XeonBotInc.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !XeonTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcxeon(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!XeonTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcxeon("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!XeonBotInc.public) {
            if (XeonTheCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	XeonBotInc.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            XeonBotInc.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            XeonBotInc.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            XeonBotInc.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            XeonBotInc.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            XeonBotInc.sendPresenceUpdate(xeonpos, from)
        }
        }
              //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (XeonTheCreator || isAdmins || !isBotAdmins) return
            XeonBotInc.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }
        
        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await XeonBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })
    }  
            //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isXeonMedia) {
    if(isXeonMedia === "imageMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isXeonMedia) {
    if(isXeonMedia === "videoMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isXeonMedia) {
    if(isXeonMedia === "stickerMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isXeonMedia) {
    if(isXeonMedia === "audioMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isXeonMedia) {
    if(isXeonMedia === "pollCreationMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isXeonMedia) {
    if(isXeonMedia === "locationMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isXeonMedia) {
    if(isXeonMedia === "documentMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isXeonMedia) {
    if(isXeonMedia === "contactMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcxeon(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
             //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //autosticker
        
        
         
               
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygcxeon(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygcxeon(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }  
        //total features
const xeonfeature = () =>{
            var mytext = fs.readFileSync("./bellah.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XMEDIA/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XMdia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}
    // Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygcxeon(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygcxeon('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygcxeon(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcxeon({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) XeonBotInc.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            XeonBotInc.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }    
                //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygcxeon(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygcxeon(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
}
        
        switch (isCommand) {
              case 'vv':{
if (!m.quoted) return replygcxeon(`Reply to a view once photo or video`);
if (m.quoted.mtype !== "viewOnceMessageV2") 
return replygcxeon(`This is not a view once message`);
                    
let msg = m.quoted.message;
let type = Object.keys(msg)[0];
let media = await downloadContentFromMessage(
msg[type],
type == "imageMessage" ? "image" : "video"
);
                    
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
                  
const options = {
caption: msg[type].caption || "",
mimetype: /video/.test(type) ? 'video/mp4' : 'image/jpeg',
                    };
                  
return XeonBotInc.sendMessage(m.chat, { 
[type === 'videoMessage' ? 'video' : 'image']: buffer, ...options 
}, { quoted: fkontak }
);
}
break
      /*
*
*• code case live location message*
*• by whyuxD*
• https://whatsapp.com/channel/0029Van6ItnIyPtYQU3k0z3s
*
*/

//source code case:

case 'live': {
const now = new Date();
const futureTime = new Date(now);
futureTime.setMinutes(futureTime.getMinutes() + 15); // Offset 15 menit ke depan
console.log(futureTime);
XeonBotInc.relayMessage(m.chat, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption : `Bellah Xmd`,
sequenceNumber: 1656662972682001, timeOffset: futureTime, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, {quoted: m})
}
break
			
          case 'myip':
            case 'ipbot':
                if (!XeonTheCreator) return XeonStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcxeon("🔎 My public IP address is: " + ip);
                    })
                })
            break 
              case 'define': 
if (!q) return replygcxeon(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcxeon(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   XeonBotInc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcxeon(`*${q}* isn't a valid text`)
    }
    break 
                case 'q': case 'quoted': {
if (!m.quoted) return replygcxeon('Reply the Message!!')
let xeonquotx= await XeonBotInc.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return replygcxeon('The message you are replying to is not sent by the bot')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
                case 'friend':
case 'searchfriend':{
await XeonStickWait()
let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcxeon('Managed to Get One Person')
}, 5000)
setTimeout(() => {
XeonBotInc.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
                case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await XeonBotInc.fetchStatus(who)
    replygcxeon(bio.status)
  } catch {
    if (text) return replygcxeon(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await XeonBotInc.fetchStatus(who)
      replygcxeon(bio.status)
    } catch {
      return replygcxeon(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
                case 'idch': case 'cekidch': {
if (!text) return replygcxeon("channel link?")
if (!text.includes("https://whatsapp.com/channel/")) return replygcxeon("Link must be valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await XeonBotInc.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "by Bellah Xmd" }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : m });
await XeonBotInc.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break
                case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
               case 'daffz':
case 'menu': {
let apalahh = `ʜɪ, *This is* *Bellah Xmd a multi device awesome 
bot made by Giddy Tennor*


⚝ *I N F O - B O T* ⚝
  
  ≡ *BotName* : ${global.namabot}
  ≡ *Name* : ${pushname}
  ≡ *Runtime* : ${runtime(process.uptime())}
  ≡ *Totalfeature* : 80
  
*//Owner Menu//*
 ❥listgc
 ❥self
 ❥public
 ❥autotype
 ❥autorecordtype
 ❥autorecording
 ❥autostatusview
 ❥autoblock
 ❥onlypc
 ❥onlygc

*//Group Menu//*
 ❥antibardword
 ❥antiforeign
 ❥antilinkgc
 ❥open
 ❥close
 ❥kickall
 ❥poll
 ❥hidetag 
 ❥tagall
 ❥poll
 ❥promote
 ❥add
 ❥demote
 ❥left 
 ❥resetlink
 ❥linkgc
 ❥setppgc

*//Download menu//*
 ❥play
 ❥song
 ❥play2
 ❥lyrics 
 ❥ytmp3 
 ❥ytmp4 
 ❥igdl
 ❥igstalk 
 ❥apk
 ❥idgc
 ❥idch
 ❥remini
 ❥trackip
 ❥myip
 ❥wallpaper
 ❥gitclone

*//Other Menu//*
 ❥translate
 ❥friend
 ❥define
 ❥quote
 ❥emojimix
 ❥bible
 ❥quran
 ❥repo
 ❥ping
 ❥owner
 ❥uptime
 ❥url
 ❥vv
 ❥anime
 ❥toaudio
 ❥tovideo
 ❥addvolvideo 
 ❥addvolaudio 
 ❥delete
 ❥couple
 ❥friend
 ❥translate
`
let sections = [{



title: 'System Information 🤖', 
highlight_label: 'System Information',
rows: [{
title: 'Owner Bot',
description: `Displays Owner Bot`, 
id: '.owner'
},








{
title: 'script',
description: `Displays script info`, 
id: '.repo'
},
{
title: 'uptime',
description: `Displays Bot life`, 
id: '.uptime'
},
{
title: 'ping',
description: `Displays bot Speed`, 
id: '.ping'
}]

}]









    
let listMessage = {
    title: 'More Info', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: 'bjirr@newsletter',
 newsletterName: 'Powered By Tennormodz ', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: XeonBotInc.decodeJid(XeonBotInc.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: apalahh
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: null
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Y7WgR07T/95b812c4b31bdd5c.jpg" } }, { upload: XeonBotInc.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Creator\",\"url\":\"https://wa.me/254756182478\",\"merchant_url\":\"https://wa.me/254756182478\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
  
                
case 'tourl':{        
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? XeonBotInc.user.jid : m.sender
let sg2alok = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 99999999,
                            itemCoun : 99999999,
                            surface : 99999999,
                            message: 'T O U R L',
                            orderTitle: 'H A L O',
                            thumbnail: fs.readFileSync('./XMEDIA/theme/bellah.jpg'), 
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
let name = await XeonBotInc.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return replygcxeon('No media found')
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let caption = `🚩 *ʟɪɴᴋ:*
${link}
☘️ *sɪᴢᴇ :* ${media.length} Byte
🍁 *ᴇxᴘɪʀᴇᴅ :* ${isTele ? 'No Expiry Date' : 'Unknown'}

– *s ʜ ᴏ ʀ ᴛ :* ${await shortUrl(link)}`
  XeonBotInc.sendMessage(m.chat, {
    text: caption, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: '', 
    mediaType: 1,
    title: '',
    body: null,
    thumbnailUrl: 'https://telegra.ph/file/1d681780e96553bf8d771.jpg', 
    sourceUrl: null,
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: sg2alok})
}
break        




                



   
  
    
    



     







   
  
    
    







   
  
    
    


 



  



   






    










      
    
  
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                await XeonBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcxeon(`Reset Success`)
                    })
            break
              case 'ringtone': {
		if (!text) return replygcxeon(`Example : ${prefix + command} black rover`)
        let ringtone = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break  
               case 'groupevent': {
               if (!m.isGroup) return XeonStickGroup()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  groupevent = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  replygcxeon(`${command} is disabled`)
               }
            }
            break 
                case "play2": 
case "song": {
  try {
    if (!text) return replygcxeon('*Please provide a song name!*');
    
    const randomReduction = Math.floor(Math.random() * 5) + 1;
    let search = await yts(text);
    
    if (!search.all[0]) {
      throw new Error('*Song not found!*');
    }
    
    let telaso = search.all[0].url;
    let kyuu = await fetchJson(`https://api.siputzx.my.id/api/d/ytmp3?url=${telaso}`);
    
    if (!kyuu.data.dl) {
      throw new Error('*Failed to retrieve the song!*');
    }
    
    await XeonBotInc.sendMessage(m.chat, { 
      audio: {url: kyuu.data.dl}, 
      mimetype: 'audio/mpeg', 
      contextInfo: { 
        externalAdReply: { 
          title: botname, 
           body: `${kyuu.data.title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          mediaUrl: `${search.all[0].thumbnail}`,
          showAdAttribution: true,
          renderLargerThumbnail: false
        } 
      } 
    }, { quoted: m });
    
    XeonBotInc.sendMessage(m.chat, { react: { text: '🎧', key: m.key }});
  
  } catch (error) {
    console.error(error);
    replygcxeon(`Error: ${error.message}`);
  }
} break;
           case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('This is the online list!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await XeonBotInc.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => m.reply('Gagal'))
			}
			break

      case 'play2': {
    if (args.length === 0) return XeonBotInc.sendMessage(m.chat, { text: `which song from YouTube do you want to download?, example:\nplay dj kane` }, { quoted: m });

    const query = args.join(' ');
    const axios = require('axios');
    const yts = require('yt-search');

    try {
        const search = await yts(query);
        if (!search || search.all.length === 0) return XeonBotInc.sendMessage(m.chat, { text: 'Lagu yang Anda cari tidak ditemukan.' }, { quoted: m });

        const video = search.all[0];
        const detail = `*Bellah Xmd Youtube Audio Play*

*❖ Title* : ${video.title}
*❖ Views* : ${video.views}
*❖ Artist* : ${video.author.name}
*❖ Period* : ${video.ago}
*❖ URL* : ${video.url}
_Bellah Xmd processing audio..._`;

        await XeonBotInc.sendMessage(m.chat, { text: detail }, { quoted: m });

        const format = 'mp3';
        const url = `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(video.url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`;

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.data || !response.data.success) return XeonBotInc.sendMessage(m.chat, { text: 'audio.' }, { quoted: m });

        const { id, title, info } = response.data;
        const { image } = info;

        while (true) {
            const progress = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${id}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (progress.data && progress.data.success && progress.data.progress === 1000) {
                const downloadUrl = progress.data.download_url;

                await XeonBotInc.sendMessage(m.chat, {
                    audio: { url: downloadUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${title}.mp3`
                }, { quoted: m });
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } catch (error) {
        console.error('Error:', error);
        XeonBotInc.sendMessage(m.chat, { text: 'Could not find your song.' }, { quoted: m });
    }
}
break;  
                            case 'trackip':
{
if (!text) return m.reply(`*Example:* ${prefix + command} 112.90.150.204`);
try {
let res = await fetch(`https://ipwho.is/${text}`).then(result => result.json());

const formatIPInfo = (info) => {
 return `
*IP Information*
• IP: ${info.ip || 'N/A'}
• Success: ${info.success || 'N/A'}
• Type: ${info.type || 'N/A'}
• Continent: ${info.continent || 'N/A'}
• Continent Code: ${info.continent_code || 'N/A'}
• Country: ${info.country || 'N/A'}
• Country Code: ${info.country_code || 'N/A'}
• Region: ${info.region || 'N/A'}
• Region Code: ${info.region_code || 'N/A'}
• City: ${info.city || 'N/A'}
• Latitude: ${info.latitude || 'N/A'}
• Longitude: ${info.longitude || 'N/A'}
• Is EU: ${info.is_eu ? 'Yes' : 'No'}
• Postal: ${info.postal || 'N/A'}
• Calling Code: ${info.calling_code || 'N/A'}
• Capital: ${info.capital || 'N/A'}
• Borders: ${info.borders || 'N/A'}
• Flag:
 - Image: ${info.flag?.img || 'N/A'}
 - Emoji: ${info.flag?.emoji || 'N/A'}
 - Emoji Unicode: ${info.flag?.emoji_unicode || 'N/A'}
• Connection:
 - ASN: ${info.connection?.asn || 'N/A'}
 - Organization: ${info.connection?.org || 'N/A'}
 - ISP: ${info.connection?.isp || 'N/A'}
 - Domain: ${info.connection?.domain || 'N/A'}
• Timezone:
 - ID: ${info.timezone?.id || 'N/A'}
 - Abbreviation: ${info.timezone?.abbr || 'N/A'}
 - Is DST: ${info.timezone?.is_dst ? 'Yes' : 'No'}
 - Offset: ${info.timezone?.offset || 'N/A'}
 - UTC: ${info.timezone?.utc || 'N/A'}
 - Current Time: ${info.timezone?.current_time || 'N/A'}
`;
};
 
if (!res.success) throw new Error(`IP ${text} not found!`);
await XeonBotInc.sendMessage(m.chat, { location: { degreesLatitude: res.latitude, degreesLongitude: res.longitude } }, { ephemeralExpiration: 604800 });
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(2000);
m.reply(formatIPInfo(res)); 
} catch (e) { 
m.reply(`Error: Unable to retrieve data for IP ${text}`);
}
}
break 
          
            
           
    


                case "apk":
      case "apkdl":
        {
          if (!text) return m.reply("*Which apk do you want to download?*");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await XeonBotInc.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: botname,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;   

    
    

        

    
            case 'autotype':
                if (!XeonTheCreator) return XeonStickOwner()
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    replygcxeon(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    replygcxeon(`Successfully changed Auto-Typing to ${q}`)
                }
            break 
            case 'autorecordtype':
                if (!XeonTheCreator) return XeonStickOwner()
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygcxeon(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygcxeon(`Successfully changed Auto-RecordingTyping to ${q}`)
                }
            break
            case 'autorecord':
                if (!XeonTheCreator) return XeonStickOwner()
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    replygcxeon(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    replygcxeon(`Successfully changed Auto-Recording to ${q}`)
                }
            break
            case 'autoblock':
                if (!XeonTheCreator) return XeonStickOwner()
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygcxeon(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygcxeon(`Successfully Changed Auto-Block To ${q}`)
                }
            break 
            case 'onlygroup':
            case 'onlygc':
                if (!XeonTheCreator) return XeonStickOwner()
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    replygcxeon(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    replygcxeon(`Successfully Changed Onlygroup To ${q}`)
                }
            break 
                        case 'onlyprivatechat':
            case 'onlypc':
                if (!XeonTheCreator) return XeonStickOwner()
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    replygcxeon(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    replygcxeon(`Successfully Changed Only-Pc To ${q}`)
                }
            break 
                          case 'self': {
                if (!XeonTheCreator) return XeonStickOwner()
                XeonBotInc.public = false
                replygcxeon('*Successful in Changing To Self Usage*')
            }
            break
              case 'public': {
                if (!XeonTheCreator) return XeonStickOwner()
                XeonBotInc.public = true
                replygcxeon('*Successful in Changing To Public Usage*')
            }
            break  
            case 'left':
            case 'leavegc':
                if (!XeonTheCreator) return XeonStickOwner()
                if (!m.isGroup) return XeonStickGroup()
                replygcxeon('Bye Everyone 🥺')
                await XeonBotInc.groupLeave(m.chat)
            break 
                case "idgc": {
if (!XeonTheCreator) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
m.reply(`${m.chat}`)
}
break
             case 'block': case 'ban': {
		if (!XeonTheCreator) return XeonStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block')
		await replygcxeon(`Done`)
	}
	break
            case "setppgc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmins) return m.reply(msg.adminbot)
if (!isBotAdmins) return m.reply(msg.admin)
if (/image/g.test(mime)) {
let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
await XeonBotInc.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Group profile photo changed successfully by Bellah Xmd")
} else return m.reply('tag/reply foto')}
break    
      case 'unblock': case 'unban': {
		if (!XeonTheCreator) return XeonStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock')
		await replygcxeon(`Done`)
	}
	break  
          case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  replygcxeon(`${commad} is disabled`)
               }
               }
            break 
                break
case 'play': {
const yts = require('yt-search');
const randomAudioQuality = () => {
    const qualities = [1, 2, 3, 4]; // Indeks kualitas
    const randomIndex = Math.floor(Math.random() * qualities.length);
    return qualities[randomIndex];
};
const checkQuality = (type, qualityIndex) => {
    const qualities = {
        audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
        video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
    };
    if (!qualities[type]?.[qualityIndex]) {
        throw new Error(` Kualitas ${type} tidak valid. Pilih salah satu: ${Object.keys(qualities[type]).join(', ')}`);
    }
};
const fetchData = async (url, cdn, body = {}) => {
    const headers = {
        accept: '*/*',
        referer: 'https://ytshorts.savetube.me/',
        origin: 'https://ytshorts.savetube.me/',
        'user-agent': 'Postify/1.0.0',
        'Content-Type': 'application/json',
        authority: `cdn${cdn}.savetube.su`
    };
    try {
        const response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error(`Error accessing CDN${cdn}: ${error.message}`);
        throw new Error(' Gagal mengambil data dari server.');
    }
};
const randomCdn = () => {
    const availableCdns = [51, 52, 53, 54, 56, 57, 58, 59, 60, 61];
    return availableCdns[Math.floor(Math.random() * availableCdns.length)];
};
const dLink = (cdnUrl, type, quality, videoKey) => {
    return `https://${cdnUrl}/download`;
};
const dl = async (link, qualityIndex, typeIndex) => {
    const type = typeIndex === 1 ? 'audio' : 'video';
    const qualities = { 1: '32', 2: '64', 3: '128', 4: '192' };
    const quality = qualities[qualityIndex];
    if (!type) throw new Error('Tipe tidak valid. Pilih 1 untuk audio atau 2 untuk video');
    checkQuality(type, qualityIndex);
    const cdnNumber = randomCdn();
    const cdnUrl = `cdn${cdnNumber}.savetube.su`;
    const videoInfo = await fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
    const body = {
        downloadType: type,
        quality: quality,
        key: videoInfo.data.key
    };
    const dlRes = await fetchData(dLink(cdnUrl, type, quality, videoInfo.data.key), cdnNumber, body);
    return {
        link: dlRes.data.downloadUrl,
        duration: videoInfo.data.duration,
        durationLabel: videoInfo.data.durationLabel,
        fromCache: videoInfo.data.fromCache,
        id: videoInfo.data.id,
        key: videoInfo.data.key,
        thumbnail: videoInfo.data.thumbnail,
        thumbnail_formats: videoInfo.data.thumbnail_formats,
        title: videoInfo.data.title,
        titleSlug: videoInfo.data.titleSlug,
        videoUrl: videoInfo.data.url,
        quality,
        type
    };
};
if (!text) return replygcxeon(`Provide a song name, Example *${command} lucid dreams*`);
try {
  XeonBotInc.sendMessage(m.chat, { react: { text: "🎧",key: m.key,}})
    let rus = await yts(text);
    if (rus.all.length === 0) return reply("Video tidak ditemukan atau tidak bisa di-download.");
    let data = rus.all.filter(v => v.type === 'video');
    if (data.length === 0) return reply("Tidak ada video yang ditemukan.");
    let res = data[0];
    let thumbUrl = `https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`;
    let inithumb = await getBuffer(thumbUrl);
    let teks = `*ᴘʟᴀʏɪɴɢ ᴍᴜsɪᴄ ɪɴ ʏᴏᴜᴛᴜʙᴇ*\n\n` +
               `📺 *ᴄʜᴀɴɴᴇʟ* : ${res.author.name}\n` +
               `👀 *ᴠɪᴇᴡᴇʀs* : ${res.views} kali\n` +
               `⏱️ *ᴅᴜʀᴀᴛɪᴏɴ* : ${res.timestamp}\n` +
               `🔗 *ᴜʀʟ ᴘʟᴀʏ* : ${res.url}\n\n` +
               `\n*Downloading audio....!*`;

    await XeonBotInc.sendMessage(m.chat, {
        contextInfo: { 
            externalAdReply: { 
                showAdAttribution: true, 
                title: res.title,
                body: new Date().toLocaleString(),													
                mediaType: 2,  
                renderLargerThumbnail: true,
                thumbnail: inithumb,
                mediaUrl: res.url,
                sourceUrl: res.url
            }
        },
        image: { url: thumbUrl },
        text: teks
    }, { quoted: m });
          let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
          let ahh = mbut.result
          let crot = ahh.download.audio
        const nt = await XeonBotInc.sendMessage(m.chat,{ audio: {url: crot}, mimetype: 'audio/mpeg', ptt: true },{quoted:m});
        await XeonBotInc.sendMessage(m.chat, { react: { text: '🎶', key: nt.key }})
        
} catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan: ${err.message}`);
}
}
break      
case "setppbot": case "setpp": {
if (!XeonTheCreator) return m.reply(msg.owner)
if (/image/g.test(mime)) {
let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
await XeonBotInc.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("Profile photo changed by Bellah Xmd")
} else return m.reply('tag/reply foto')}
break
                case "listgc": case "cekid": case "listgrup": {
let gcall = Object.values(await XeonBotInc.groupFetchAllParticipating().catch(_=> null))
let listgc = `*𝐋𝐈𝐒𝐓 𝐀𝐋𝐋 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏*\n\n`
await gcall.forEach((u, i) => {
listgc += `Title : ${u.subject}\nID : ${u.id}\nMember : ${u.participants.length}\nStatus : ${u.announce == true ? "Tertutup" : "Terbuka"}\nCreator : ${u.owner ? u.owner.split('@')[0] : 'Active'}\n\n`
})
m.reply(listgc)
}
break
                case 'hdr': 
case 'hd':
case 'remini': {
			if (!quoted) return m.reply(`Where is the picture?`)
			if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
XeonBotInc.sendMessage(m.chat, { image: proses, caption: m.success}, {})
			}
			break

          case 'antiforeign':{
            	if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygcxeon(`${command} is disabled`)
               }
               }
            break 
                
      case 'poll': {
	if (!XeonTheCreator) return XeonStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcxeon(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await XeonBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break  
          case 'antilink': {
               if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  replygcxeon(`${command} is disabled`)
               }
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return XeonStickGroup()
if (!isBotAdmins) return XeonStickBotAdmin()
if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  replygcxeon(`${command} is disabled`)
               }
            }
            break 
                      case 'close':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                replygcxeon(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replygcxeon(close)
                }, timer)
                break
               case 'open':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !XeonTheCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygcxeon(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcxeon(open)
                }, timer)
                break
                case 'kick':
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygcxeon(mess.done)
                break
           //bug
                            case 'wallpaper': {
                if (!text) return replygcxeon('Enter Query Title')
                await XeonStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                XeonBotInc.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
              case 'add':
                if (!m.isGroup) return XeonStickGroup()
                if(!XeonTheCreator) return XeonStickOwner()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygcxeon(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygcxeon(mess.done)
                break
            case 'demote':
               case 'fromadmi':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygcxeon(mess.done)
                break  
                            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                if (!text) return replygcxeon('Text ?')
                await XeonBotInc.groupUpdateSubject(m.chat, text)
                replygcxeon(mess.done)
                break
                case 'creategc': case 'creategroup': {
if (!XeonTheCreator) return XeonStickOwner()
if (!args.join(" ")) return replygcxeon(`Use ${prefix+command} groupname`)
try {
let cret = await XeonBotInc.groupCreate(args.join(" "), [])
let response = await XeonBotInc.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
XeonBotInc.sendMessage(m.chat, { text:teksop, mentions: await XeonBotInc.parseMention(teksop)}, {quoted:m})
} catch {
	replygcxeon(`Error`)
	}
}
break
              case 'kickall': {
 if (!m.isGroup) return m.reply('Fitur only Group!')
 if (!isGroupOwner) return m.reply('Fitur only Owner & Admin!')
 if (!isAdmins) return m.reply('Bot must be Admin in grup!')
  const kickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${owner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of kickall) {
 await XeonBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(3000);
 }
 m.reply(`CASEYWEB XMD HAS SUCCESSFULLY REMOVED ALL GROUP PARTICIPANTS`);
}
break  
        case 'tagall':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break 
                case 'hidetag':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
               case 'addvolaudio': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
                case 'addvolvideo': {
if (!args.join(" ")) return replygcxeon(`Example: ${prefix + command} 10`)
media = await XeonBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcxeon('Error!')
jadie = fs.readFileSync(rname)
XeonBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
                case 'linkgroup':
            case 'link':
            case 'linkgc':
            case 'invite':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return XeonStickGroup()
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return XeonStickAdmin()
                if (!isBotAdmins) return XeonStickBotAdmin()
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `👥 *GROUP LINK BY CASEYWEB XMD*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
                case "repo": {
  try {
    let me = m.sender;
 const response = await axios.get(`https://api.github.com/repos/Tennor-modz/Bellah-Xmd`)
    if (response.status === 200) {
      const repoData = response.data
      const repos = `
*BOT NAME:*
> ${repoData.name}

*STARS:* 
> ${repoData.stargazers_count}

*FORKS:* 
> ${repoData.forks_count}

*GITHUB LINK:* 
https://github.com/caseyweb/CASEYWEB-XMD

@${me.split("@")[0]}👋, Star ⭐ fork and deploy my repo 🤭

> 𝐁𝐞𝐥𝐥𝐚𝐡𝐗𝐦𝐝`;
XeonBotInc.sendMessage(m.chat, { text : repos,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: 'https://chat.whatsapp.com/Hs0AwkOaFzbGi5sjicdeTR',
serverMessageId: 20,
newsletterName: '𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝'
},
externalAdReply: {
title: "𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝", 
body: "",
thumbnail: null, 
sourceUrl: null,
mediaType: 1
}}}, { quoted : m })
    } else {
      await m.reply(`Failed to fetch repository data!`)
    }
  } catch (error) {
    console.error(error)
    await m.reply(`Couldn't find repository!`)
  }
}
break;
        case 'owner': {
                XeonBotInc.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break        
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
        
 

        case 'toimage':
            case 'photo': {
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                await XeonStickWait()
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                await XeonStickWait()
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
                
						
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await XeonStickWait()
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await XeonStickWait()
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgxeon.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await XeonStickWait()
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break  
               case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcxeon(`Example : ${prefix + command} 😅+🤔`)
                await XeonStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
                case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 XeonBotInc.sendMessage(m.chat, { delete: key })
}
break
                case 'autoswview':
    case 'autostatusview':{
             if (!XeonTheCreator) return XeonStickOwner()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = true
                  replygcxeon(`${command} is disabled`)
               }
            }
            break
    case 'anticall': {
             if (!XeonTheCreator) return XeonStickOwner()
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  anticall = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  replygcxeon(`${command} is disabled`)
               }
            }
            break
            case 'fancy': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcxeon('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcxeon(teks)
	    }
	    break
case 'yts': case 'ytsearch': {
                if (!text) return replygcxeon(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                XeonBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
                

      
          case 'ytvideo':
case 'ytmp4': {
  const axios = require('axios');
const SaveTube = {
    qualities: {
        audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
        video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
    },
    
    headers: {
        'accept': '*/*',
        'referer': 'https://ytshorts.savetube.me/',
        'origin': 'https://ytshorts.savetube.me/',
        'user-agent': 'Postify/1.0.0',
        'Content-Type': 'application/json'
    },

    cdn() {
        return Math.floor(Math.random() * 11) + 51;
    },

    checkQuality(type, qualityIndex) {
        if (!(qualityIndex in this.qualities[type])) {
            throw new Error(`❌ Kualitas ${type} tidak valid. Pilih salah satu: ${Object.keys(this.qualities[type]).join(', ')}`);
        }
    },

    async fetchData(url, cdn, body = {}) {
        const headers = {
            ...this.headers,
            'authority': `cdn${cdn}.savetube.su`
        };

        try {
            const response = await axios.post(url, body, { headers });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    dLink(cdnUrl, type, quality, videoKey) {
        return `https://${cdnUrl}/download`;
    },
    async dl(link, qualityIndex, typeIndex) {
        const type = typeIndex === 1 ? 'audio' : 'video';
        const quality = SaveTube.qualities[type][qualityIndex];
        if (!type) throw new Error('❌ Tipe tidak valid. Pilih 1 untuk audio atau 2 untuk video.');
        SaveTube.checkQuality(type, qualityIndex);
        const cdnNumber = SaveTube.cdn();
        const cdnUrl = `cdn${cdnNumber}.savetube.su`;
        
        const videoInfo = await SaveTube.fetchData(`https://${cdnUrl}/info`, cdnNumber, { url: link });
        const badi = {
            downloadType: type,
            quality: quality,
            key: videoInfo.data.key
        };

        const dlRes = await SaveTube.fetchData(SaveTube.dLink(cdnUrl, type, quality, videoInfo.data.key), cdnNumber, badi);

        return {
            link: dlRes.data.downloadUrl,
            duration: videoInfo.data.duration,
            durationLabel: videoInfo.data.durationLabel,
            fromCache: videoInfo.data.fromCache,
            id: videoInfo.data.id,
            key: videoInfo.data.key,
            thumbnail: videoInfo.data.thumbnail,
            thumbnail_formats: videoInfo.data.thumbnail_formats,
            title: videoInfo.data.title,
            titleSlug: videoInfo.data.titleSlug,
            videoUrl: videoInfo.data.url,
            quality,
            type
        };
    }
};
    const args = m.text.split(' ');
    const link = args[1];
    const qualityIndex = parseInt(args[2]) || 3; 
    if (command === 'ytmp4') {
        if (!link) {
            return XeonBotInc.sendMessage(m.chat, { text: "❌ provide a valid you tube link!" });
        }
         m.reply(mess.wait)
        try {
            const video = await SaveTube.dl(link, qualityIndex, 2); 
           
        await m.reply(`✅ Video info: ${video.title}\nDuration: ${video.durationLabel}\nVideo download in process...`)
     await XeonBotInc.sendMessage(m.chat, { 
      video: { url: video.link }, 
      mimetype: 'video/mp4' 
    }, { quoted: m });
            
        } catch (err) {
            XeonBotInc.sendMessage(m.chat, { text: `❌ failed to get video: ${err.message}` });
        }
    }
}
break   
        case 'git': case 'gitclone':
if (!args[0]) return replygcxeon(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XMEDIA`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    XeonBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcxeon(mess.error))
break
case 'tiktok':{
if (!q) return replygcxeon( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcxeon(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
XeonBotInc.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break   
      case 'tiktokstalk':
case 'ttstalk': {
    if (!text) return replygcxeon(`Provide TikTok Username\n\nExample: ${prefix + command} `);
    XeonBotInc.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    
    try {
        const respon = await fetchJson(`https://api.elxyzgpt.xyz/stalk/tiktok?apikey=KC-d25a3f0c02be4021&username=${encodeURIComponent(text)}`);
        const user = respon.result.user;
        const stats = respon.result.stats;
        let teks = `
┌──「 *STALKING* 」
▢ *🔖 Name:* ${user.nickname}
▢ *🔖 Username:* ${user.uniqueId}
▢ *👥 Followers:* ${stats.followerCount}
▢ *🫂 Following:* ${stats.followingCount}
▢ *📌 Bio:* ${user.signature}
▢ *🏝️ Posts:* ${stats.videoCount}
▢ *❣️ Likes:* ${stats.heartCount}
▢ *🔗 Link:* https://tiktok.com/@${user.uniqueId}
└────────────`;

        await XeonBotInc.sendMessage(
            m.chat, 
            { image: { url: user.avatarLarger }, caption: teks }, 
            { quoted: m }
        );
    } catch (err) {
        console.error(err);
        replygcxeon(`yooh. Provide valid TikTok username.`);
    }
}
break;    
      case 'igstalk': {
if (!args[0]) return replygcxeon(`Enter Instagram Username\n\nExample: ${prefix + command} giddy_tennor_`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await XeonBotInc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        replygcxeon(`Make sure the username comes from *Instagram*`)
      }
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcxeon(`Example ${prefix+command} GiddyTennor`)
await XeonStickWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
XeonBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break   
          case 'bellah': {
  XeonBotInc.sendMessage(m.chat, { react: { text: `🙂‍↔️`, key: m.key }})
	          let ownernya = global.ownernumber + '@s.whatsapp.net'
            let me = m.sender
            let uptime = await runtime(process.uptime())
            let timestampe = speed()
            let latensie = speed() - timestampe
            cann_sad = `╭─❒ *WELCOME* ❒─╮  
│ 👋 *Hey ${pushname}!*  
│ welcome to*${botname}*!  
│ WhatsApp bot made by Giddy Tennor!  
╰─❒━━━━━━━━━❒─╯  

╭─ *DASHBOARD* ─╮  
│  
├ Nama: *${pushname}*  
├ Status: *${isPremium ? '✨ Premium User' : '🌟 Free User'}*  
├ Mode: *${XeonBotInc.public ? 'Publik' : 'Self'}*  

│  
╰─❒━━━━━━━━━❒─╯  

╭─🌐 *SOSIAL MEDIA* 🌐─╮  
│  
├  ✆ WhatsApp: *CASEYRHODES TECH🫅*  
├ 📸 Instagram: *Caseyrhodes*  
├ 🎥 YouTube: *Caseyrhodes01*  
├ 🎵 Tiktok: *CASEYRHODES*  
│  
╰─❒━━━━━━━━━❒─╯  

╭─ *INFO BOT* ─╮  
│  
├ 🤖 Bot name: *${botname}*  
├ ⚙️ Total Commands: 79
├ ⏱️ Runtime: *${runtime(process.uptime())}*  
├ 🧑‍💻 Owner: *${global.ownername}*  
├ 🔧 Version: *2.0.0*  
│  
╰─❒━━━━━━━━━❒─╯  

╔═════✪ *OWNERMENU* ✪═════╗  
║ 
╠ 1. onlygc
╠ 2. onlypc
╠ 3. self
╠ 4. public
╠ 5. autotype
╠ 6. autorecordtype
╠ 7. autorecording
║ 8. block
║ 9. unblock
║ 10. autoblock
║ 11. setpp
║ 12. listgc
╚═══════════════════════╝
╔═════✪ *DOWNLOAD MENU* ✪═════╗  
║ 
╠ 13. play
╠ 14. song
╠ 15. play2
╠ 16. gpt
╠ 17. lyrics
╠ 18. apk
╠ 19. ytmp4
║ 20. githubstalk 
╠ 21. gitclone
╠ 22. tiktokstalk 
║ 23. igstalk
╠ 24. igdl
╠ 25. tiktok 
║ 26. trackip
║ 27. wallpaper 
║ 28. remini
╚═══════════════════════╝
╔═════✪ *GROUP MENU* ✪═════╗  
║ 
╠ 29. antibardword
╠ 30. antiforeign
╠ 31. antilink
╠ 32. antilinkgc
╠ 33. open
╠ 34. close 
╠ 35. kick
║ 36. add
║ 37. demote
║ 38. promote
╠ 39. kickall 
╠ 40. hidetag
║ 41. tagall
║ 42. poll
║ 43. setnamegc
║ 44. linkgc
║ 45. left
║ 46. resetlink 
║ 47. setppgc
╚═══════════════════════╝
╔═════✪ *CONVERT MENU* ✪═════╗  
║ 
╠ 48. vv
╠ 49. toimg
╠ 50. toaudio
╠ 51. tovideo 
╠ 52. url
╠ 53. sticker
╠ 54. fancy
╠ 55. tovn
╠ 56. translate 
╠ 57. anime
╠ 58. emojimix
║ 59. addvolvideo 
║ 60. addaudio
╚═══════════════════════╝
╔═════✪ *OTHER MENU* ✪═════╗  
║ 
╠ 61. ping
╠ 62. repo
╠ 63. uptime
╠ 64. bible 
╠ 65. quran
╠ 66. delete
╠ 67. anticall
╠ 68. autostatusview 
╠ 69. soulmate 
╠ 70. couple 
╠ 71. emojimix
╠ 72. owner
╠ 73. encrypt
║ 74. getbio
║ 75. myip
║ 76. friend 
║ 77. define 
║ 78. quote
║ 79. idgc
╚═══════════════════════╝
╠ © CASEYRHODES TECH🫅
╠ *Join group below for more
╠ updates*
╚═══════════════════════╝`

  

XeonBotInc.sendMessage(m.chat, {
text: cann_sad,
contextInfo: {
externalAdReply: {  
title: botname,
body: `${botname}`,
thumbnailUrl: global.thumbnail,
sourceUrl: wagc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
           }
           break  
              case 'soulmate': {
            if (!m.isGroup) return XeonStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
XeonBotInc.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return XeonStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
XeonBotInc.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XMEDIA/theme/bellah.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break  
              case 'uptime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcxeon(lowq)
            	}
            break 
                
                case 'anime': {
if (!text) return replygcxeon(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await XeonStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcxeon(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await XeonBotInc.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
                case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    replygcxeon(bibleChapter)
  } catch (error) {
    replygcxeon(`Error: ${error.message}`)
  }
  }
  break
        case 'translate':{
  	if (!q) return replygcxeon(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       replygcxeon(result.text)
    } catch (e) {
        return replygcxeon(err)
    } 
    }
    break    
                  case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    replygcxeon(quranSurah)

    if (json.data.recitation.full) {
      XeonBotInc.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    replygcxeon(`Error: ${error.message}`)
  }
  }
  break
            case "ping":
case "p": {
  const memoryUsage = process.memoryUsage();
  const cpuInfo = os.cpus().map(cpu => ({
    total: Object.values(cpu.times).reduce((a, b) => a + b, 0),
    times: cpu.times,
  }));
  const totalCpuInfo = cpuInfo.reduce((acc, cpu) => ({
    total: acc.total + cpu.total,
    times: {
      user: (acc.times.user || 0) + (cpu.times.user || 0),
      nice: (acc.times.nice || 0) + (cpu.times.nice || 0),
      sys: (acc.times.sys || 0) + (cpu.times.sys || 0),
      idle: (acc.times.idle || 0) + (cpu.times.idle || 0),
      irq: (acc.times.irq || 0) + (cpu.times.irq || 0),
    },
  }), {
    total: 0,
    times: {},
  });

  const startTime = performance.now();
  const latency = performance.now() - startTime;
  const finalStatus = `𝐁𝐄𝐋𝐋𝐀𝐇 𝐗𝐌𝐃 𝐒𝐏𝐄𝐄𝐃: ${latency.toFixed(4)} ms`;
  replygcxeon(finalStatus);
}
break;    
        case'gpt':
      case'gemini':
      case'openai':
      case'chatgpt':{
        
        if (!text) return replygcxeon(`provide a question? Example ${prefix + command} what is a bot?`)
          let cuki = await fetchJson(`https://loco.web.id/wp-content/uploads/api/v1/bingai.php?q=${text}`)
          
          let mamad = cuki.result.ai_response
          XeonBotInc.sendMessage(m.chat, { text : mamad }, {quoted:m})
      }
      break   
                case 'instagram': case 'igdl': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygcxeon(`provide Instagram URL video, post or reel`)
	  XeonBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try {
        const data = await fetchJson(`https://btch.us.kg/download/igdl?url=${encodeURIComponent(text)}`);
        if (data && data.result && data.result.length > 0) {
          let sudahDikirim = false; 
            for (const item of data.result) {
              if (sudahDikirim) break;
                const hasil = item.url;
                const cap = `CASEYWEB XMD🔥`;
                if (hasil.includes('dst-jpg') || hasil.includes('.jpg') || hasil.includes('.jpeg') || hasil.includes('image')) {
                    await XeonBotInc.sendMessage(m.chat, { 
                        image: { url: hasil }, 
                        caption: cap 
                    }, { quoted: m });
                    sudahDikirim = true;
                } else {
                    await XeonBotInc.sendMessage(m.chat, { 
                        video: { url: hasil }, 
                        caption: cap 
                    }, { quoted: m });
                } 
            }
        } else {
            console.log('Error: Tidak ada media yang ditemukan di result');
            await XeonBotInc.sendMessage(m.chat, { text: 'Maaf, media tidak ditemukan.' }, { quoted: m });
        }
    } catch (error) {
        console.error('Gagal fetch media IG:', error);
        await XeonBotInc.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil media.' }, { quoted: m });
    }
}
break  
              case 'enc':
case 'encrypt': {
if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
return XeonBotInc.sendMessage(m.chat, { text: '❌ Please Reply File To Be Encryption.' }, {});
}
const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
const quotedDocument = quotedMessage.documentMessage;

if (!quotedDocument || !quotedDocument.fileName.endsWith('.js')) {
return XeonBotInc.sendMessage(m.chat, { text: '❌ Please Reply File To Be Encryption.' }, {});
}
try {
const fileName = quotedDocument.fileName;
const docBuffer = await m.quoted.download();
if (!docBuffer) {
return XeonBotInc.sendMessage(m.chat, { text: '❌ Failed to download the file. Try again later.' }, {});
}
await XeonBotInc.sendMessage(m.chat, { text: '✅ Processing hard code encryption...' }, {});
const obfuscatedCode = await JsConfuser.obfuscate(docBuffer.toString(), {
target: "node",
preset: "high",
compact: true,
minify: true,
flatten: true,
identifierGenerator: function () {
const originalString = "TennorHere晴Zconcept晴" + "素TennorHere晴Zconcept晴";
const removeUnwantedChars = (input) => input.replace(/[^a-zA-Z素TennorHere晴Zconcept晴]/g, "");
const randomString = (length) => {
let result = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() * characters.length));
}
return result;
};
return removeUnwantedChars(originalString) + randomString(2);
},
renameVariables: true,
renameGlobals: true,
stringEncoding: true,
stringSplitting: 0.0,
stringConcealing: true,
stringCompression: true,
duplicateLiteralsRemoval: 1.0,
shuffle: { hash: 0.0, true: 0.0 },
stack: true,
controlFlowFlattening: 1.0,
opaquePredicates: 0.9,
deadCode: 0.0,
dispatcher: true,
rgf: false,
calculator: true,
hexadecimalNumbers: true,
movedDeclarations: true,
objectExtraction: true,
globalConcealing: true,
});
await XeonBotInc.sendMessage(m.chat, {
document: Buffer.from(obfuscatedCode, 'utf-8'),
mimetype: 'application/javascript',
fileName: `${fileName}`,
caption: `•Successful Encrypt
•Type: Hard Code
•@TennormodzDev`,
}, {});

} catch (err) {
console.error('Error during encryption:', err);
await XeonBotInc.sendMessage(m.chat, { text: `❌ An error occurred: ${err.message}` }, {});
}
break;
}
            case  'lyrics':
if (!text) return replygcxeon(`*Please provide a song name!*`);

    try {
      // Fetch lyrics from the API
      let response = await axios.get(`https://api.vreden.web.id/api/lirik?lagu=${encodeURIComponent(text)}`);
      if (response.status !== 200 || !response.data.result) throw new Error('Failed to fetch lyrics');

      let lyric = response.data.result;

      // Send the lyrics with the song image
      await XeonBotInc.sendMessage(m.chat, {
        image: { url: lyric.image },
        caption: `*Title*: ${lyric.title}\n*Artist*: ${lyric.artist}\n\n*Lyrics*:\n${lyric.lyrics}`
      }, { quoted: m });

    } catch (error) {
      console.error(error);
      replygcxeon("An error occurred while fetching lyrics.");
    }
break  

        
                //tennor
            default:
                if (budy.startsWith('=>')) {
                    if (!XeonTheCreator) return XeonStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcxeon(bang)
                    }
                    try {
                        replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcxeon(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!XeonTheCreator) return XeonStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcxeon(evaled)
                    } catch (err) {
                        await replygcxeon(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!XeonTheCreator) return XeonStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcxeon(err)
                        if (stdout) return replygcxeon(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
XeonBotInc.sendMessage("123123@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
} 
    
