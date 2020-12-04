import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';


export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {

    if (req.method === 'POST') {
        const {name,age} = req.body;
        if(!name || !age){
            res.status(406).json({message: 'Wrong parameters'})
            return;
        }
        const { db } = await connect();
        const response = await db.collection('users').insertOne({
            name: req.body.name,
            age: req.body.age
        });
        res.status(200).json(response.ops[0])
    }

    else if (req.method === 'GET') {
        const { db } = await connect();
        const response = await db.collection('users').find({}).toArray()
        res.status(200).json(response)
    }
    else{
        res.status(400).json({message: 'Wrong request method'})
    }
    
}