const _ = require('lodash')

const alunos = [{
    nome: 'Galeno',
    nota: 7.6
}, {
    nome: 'Lua',
    nota: 10.0
}, {
    nome: 'Gusta',
    nota: 9.9
}, {
    nome: 'Isa',
    nota: 9.2
},
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media);