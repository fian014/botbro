let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Fian014
║
╠➥ Github: https://github.com/fian014/botbro
╠➥ Instagram: @fian_014
╠➥ YouTube: Mochamad Allifian A
║
╠═〘 DONASI 〙 ═
╠➥ Tsel: 0813-3195-4019
╠➥ Indosat: 085704617188
║
║>Request? Wa.me/6285704617188
║
╠═〘 PATRICK BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

