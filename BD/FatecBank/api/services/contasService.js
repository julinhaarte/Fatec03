import {ObjectId, ReadConcern, WriteConcern} from 'mongodb'

async function transferirFundos(client, deContaId, paraContaId, valor){
    const session = client.startSession();
    try {
        await session.withTransaction(async () => {
            const contasCollection = client.db('fatecBank').collection('contas')
            if (valor < 0){
                throw new Error('Valor não pode ser negativo')
            }
            await contasCollection.updateOne({_id: new ObjectId.createFromHexString(deContaId)},
        {$push: {movimentacoes:{
            tipo: 'debito',
            valor: valor,
            descricao: `Transferência enviada`,
            data: new Date()           
        }}},{session}) 

        await contasCollection.updateOne({_id: new ObjectId.createFromHexString(paraContaId)},
        {$push: {movimentacoes:{
            tipo: 'credito',
            valor: valor,
            descricao: `Transferência recebida`,
            data: new Date()           
        }}},{session})

        },{
            //Níveis de concern
            //local: somente local, sem verificar réplicas
            //majority: verifica a maioria das réplicas >50%
            //linearzable: leitura linear, garante consistência
            //avalible: prioriza a disponibilidade e leitura em outros nós
            ReadConcern: {level:"majority"},
            WriteConcern: {w: "majority"},
            maxCommitTimeMS: 5000
           
        })
        await session.commitTransaction()
        console.log("Transferência efetuada!")
        return{message: "Transferência efetuada com sucesso!"}    
    }
    catch (error) {
        //await session.abortTransaction()
        console.error("Ocorreu um erro:"+error.message)
        return{error: error.message}
    }
    finally {
         session.endSession()
    }
}
export {transferirFundos}