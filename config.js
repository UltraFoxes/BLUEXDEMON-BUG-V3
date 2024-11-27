require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝕯𝖊𝖒𝖔𝖓 𝖐𝖎𝖓𝖌"
global.dana = "2349161210903"
global.qris = false


// GLOBAL SETTING
global.owner = "2349161210903"
global.namabot = "*𝐁𝐋𝐔𝐄𝐃𝐄𝐌𝐎𝐍-𝐕𝟑*"
global.nomorbot = "2349161210903"
global.namacreator = "*𝕯𝖊𝖒𝖔𝖓 𝖐𝖎𝖓𝖌* 👾"
global.linkyt = false
global.autoJoin = false
global.antilink = false
global.versisc = '3.1'

// DELAY JPM
global.delayjpm = 5500

//GLOBAL THUMB
global.codeInvite = ""
global.imageurl = 'https://l.top4top.io/p_32188bbq00.jpg'
global.isLink = 'https://chat.whatsapp.com/JtvYDEjyXcB0jIlkXrroLr'
global.packname = "𝕯𝖊𝖒𝖔𝖓 𝖐𝖎𝖓𝖌"
global.author = "ＢＬＵＥ ＤＥＭＯＮ"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
