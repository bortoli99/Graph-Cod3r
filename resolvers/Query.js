const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Basta retorna uma String'
    },
    data() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: "Bruno",
            email: "Bruno@Cod3r*.com",
            idade: 25,
            salario_real: 10.15,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: "NOT GAMER",
            preco: 5000.00,
            desconto: 0.17
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)
    },
    usuarios() {
        return usuarios;
    },
    usuario(parent, args) {
        const selecionados = usuarios.filter(u => u.id == args.id)
        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis
    },
    perfil(parent, args) {
        const selecionado = perfis.filter(p => p.id == args.id)
        return selecionado ? selecionado[0] : null
    }
}