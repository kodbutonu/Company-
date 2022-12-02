const {MongoClient} = require('mongodb')

const uri ='mongodb+srv://vrm:mongodb1234@cluster0.clbkfyg.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri)

async function main() {
    try {
        await client.connect()
        console.log('database is active ')
    } catch (e) {
        console.error(e)
    } 
}

main().catch(console.error);

const dbName = 'company_webSite'
const collectionName = 'contact'

async function insertData(data, collectionName){
    try {
        await client.db(dbName).collection(collectionName).insertOne(data)
    } catch (e) {
        return e
    }  
}
async function getData(){
    try {
        const result = await client.db(dbName).collection(collectionName).find().toArray()
        return result
    } catch (e) {
        return e
    }    
}
async function admin(adminUserName , pass) {    
    const result =await client.db(dbName).collection('admin').findOne({ userName : adminUserName, password : pass })
    if(result){
        return true
    }else{
        throw error
    }
}

module.exports = {insertData,getData,admin}