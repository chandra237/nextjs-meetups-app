//pages/api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
        //storing data in MongoDB
        const client = await MongoClient.connect('mongodb+srv://chandrasekharbandaru4207:HAzMqlZ8Y9x9mtUD@cluster0.ojhgc0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();

        res.status(201).json({message:'Meetup inserted!!'});

    }
}

export default handler;