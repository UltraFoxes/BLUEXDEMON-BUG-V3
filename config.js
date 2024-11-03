require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝐉𝐚𝐥𝐥𝐓𝐚𝐦𝐯𝐚𝐧〽️"
global.dana = "6283193344628"
global.qris = false


// GLOBAL SETTING
global.owner = "6283193344628"
global.namabot = "*JallBotz🩸*"
global.nomorbot = "6283193344628"
global.namacreator = "*Jallmods* ϟ"
global.linkyt = false
global.autoJoin = false
global.antilink = false
global.versisc = '3.1'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'ptlc_56d83t7hQWdYI0o6fnfJSXtPOCEwd6plrnJTDv5mCfs'
global.capikey = 'ptla_dUWkIBKAGwbFndIGzDE6iVPRa96GGocg5mUAZMYKy6y'
global.domain = 'https://ratztamvandeveloper.panelbotvip.xyz'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/miuqdl.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VarTDNiFcowFnrgUeU2v'
global.packname = "Rafz"
global.author = "Rafz"
global.jumlah = "5"

// MESS
global.mess = {
    success: '✔ Done Kak! 😎 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    OnlyOwner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    OnlyGrup: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Please Wait, Your Request Is Being Proceed*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu !*_',
    premium: '_*khusus Premium! Buy Prem Chat Owner di https://t.me/Arraffixd atau ketik .owner*_',
    endLimit: '_*Limit Harian Anda Telah Habis!\nLimit Akan Direset Setiap Pukul 00:00 WIB atau Dengan Membeli Premium dan Dapatkan Limit Unlimited\nBuy Prem? Chat https://t.me/rafztamvan*_',
    maintenance: '_*Maaf Kak,Fitur ini sedang dalam perbaikan*_',
    wait: 'Bentar ya kak....',
    error: 'Waduh error nih'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})