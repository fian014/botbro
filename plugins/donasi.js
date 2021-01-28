let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081331954019]
│ • Gopay [085704617188]
│ • Saweria https://saweria.co/fian014
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285704617188
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
