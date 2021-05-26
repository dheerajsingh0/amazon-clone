import { buffer } from 'micro';
import * as admin from 'firebase-admin'

// secure a conn to firebase from backend
var serviceAccount = require('../../../permissions.json');
const app= !admin.apps.length ? admin.initializeApp({
     credential : admin.credential.cert(serviceAccount),
}) : admin.app();

//establish con to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret=process.env.STRIPE_SIGNING_SECRET;

const fullfillOrder = async (session) => {
    console.log('fullfilling oder' ,session);
    console.log("displaying all");
    console.log(session.metadata.email);
    console.log(session.id);
    console.log(session.amount_total);
    console.log(session.total_details.amount_shipping);
    console.log(session.metadata.images);

    return app.firestore().collection("users")
    .doc(session.metadata.email)
    .collection("orders").doc(session.id).set({

        amount:session.amount_total / 100,
        amount_shipping:session.total_details.amount_shipping / 100,
        images: JSON.parse(session.metadata.images),
        timestamp : admin.firestore.FieldValue.serverTimestamp()
        
    })
    .then(() => {
        console.log(`SUCCESS : Order ${session.id} had been added to the DB`);
    })
};
export default async(req,res)=>{

    if (req.method === 'POST')
    {
       console.log("post running")
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"];

        let event;
        //verify that event posted from stripe
        try{
           console.log("webhook constructed")
            event = stripe.webhooks.constructEvent(payload ,sig,endpointSecret);


        }catch(err){
            console.log('Eroor' ,err.message);
            return res.status(400).send(`web hook error  ${err.message}`);


        }
        //Handle the checkout .session.completed even
        if(event.type === 'checkout.session.completed'){
            const session = event.data.object;
            console.log("checkout session completed");
            //fullfill the order
            return fullfillOrder(session)
            .then(() => res.status(200))
            .catch((err) => res.status(400).send(`webhook Error : ${err.message}`));
        }

    }
};
export const config= {
    api:{
        bodyParser: false,
        externalResolver: true,
    },
}