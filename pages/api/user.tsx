import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database';


export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {

    if (req.method === 'POST') {
        const {nome,moedas} = req.body;
        if(!nome || !moedas){
            res.status(406).json({message: 'Wrong parameters'})
            return;
        }
        const { db } = await connect();
        const response = await db.collection('users').insertOne({
            nome: req.body.nome,
            moedas: req.body.moedas
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