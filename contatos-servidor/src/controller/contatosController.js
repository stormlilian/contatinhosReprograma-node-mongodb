const contatoCollection = require("../models/contatoSchema")
const { request } = require("../app")
const { response } = require("express")

const getAll = (request, response)=>{
    contatoCollection.find((error, contatos) =>{
        if(error){
            return response.status(500).send(error)
        } else{
            return response.status(200).send({
                mensagem: "GET com sucesso",
                contatos
            })
        }
    })
}

const addContato = (request, response)=>{
    const contatoDoBody = request.body //pegando o body que o usuario digitou
    const contato = new contatoCollection(contatoDoBody)//criando um novo dado com o body

    contato.save((error)=>{
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(200).send({
                mensagem: "POST com sucesso",
                contato
            })
        }
    })
}

const getContatoPorNome = (request, response)=>{
    const nome = request.query.nome
    contatoCollection.find({ "nome": nome }, (error, contato) => {
        return response.status(200).send({
            mensagem: "GET com sucesso",
            contato
        })
    })
    
}

const getContatoPorId = (request, response) => {
    const id =request.query.id
    contatoCollection.find ({ "_id": id}, (error, contato) => {
        return response.status(200).send({
            mensagem: "GET com sucesso",
            contato
        })
    })
}

const deleteContatoPorId = (request, response) =>{
    const id =request.query.id
    contatoCollection.findByIdAndDelete(id, (error) => {
        if(error){
        return response.status(400).send(error)
    }else{
        return response.status(200).send({
            mensagem: "Deletado com sucesso",
            
        })
    }

    })

}

const atualizarContato = (request, response) =>{
    const id = request.params.id
    console.log(id);
    const bodyContato = request.body
    delete bodyContato["_id"]
    contatoCollection.findByIdAndUpdate(id, bodyContato, { "new": true }, (error, contato) => {
        if(error)
            return response.status(500).send(error)
        if(contato.length < 1)
            return response.status(404).send({"mensagem": "Contatinho não existe. :("})
        return response.status(200).send({
            mensagem: "Contatinho atualizado. :D",
            contato
        })
    })
        
}

const atualizaTelefoneContato = (request, response) => {
    const id = request.params.id
    const celular = request.body.celular

    contatoCollection.findByIdAndUpdate(id, { "celular": celular }, (error, contato) => {
        if(error)
            return response.status(500).send(error)
        if(contato.length < 1)
            return response.status(404).send({"mensagem": "Contato não existe. :("})
        return response.status(200).send({
            mensagem: "Telefone atualizado.",
            contato
        })
    })
}

module.exports = {
    getAll,
    addContato,
    getContatoPorNome,
    getContatoPorId,
    deleteContatoPorId,
    atualizarContato,
    atualizaTelefoneContato
}