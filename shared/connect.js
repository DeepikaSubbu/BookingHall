const {MongoClient} = require("mongodb");


module.exports = {
    db: {},
    async connect() {
        try{
            const connection = await MongoClient.connect("mongodb+srv://task1:tasks@newcluster.cxfvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            this.db = connection.db("Booking");
            console.log(this.db)
        } catch(err) {
            console.log(err)
        }
    }
}