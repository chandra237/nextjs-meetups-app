// our-domain.com
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head';
import { Fragment } from "react";


function HomePage(props){
    //console.log(props.meetups);
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a lis of huge meetups" />
            </Head>  
            <MeetupList meetings={props.meetups}/>
        </Fragment> 
    )
} 

export async function getStaticProps(){
    const client =await MongoClient.connect('mongodb+srv://chandrasekharbandaru4207:HAzMqlZ8Y9x9mtUD@cluster0.ojhgc0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meets = await meetupCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meets.map(meetup =>({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString(),
            }))
        },
        revalidate:1
    }
}

export default HomePage;