//our-domain.com/new-meeting
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";

function NewMeetupPage(){

    const router = useRouter();
    async function addMeetupHandler(enteredData){
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredData),
            headers:{
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);
        router.push('/');

    }


    return( 
        <Fragment>
            <Head>
                <title>Add a new Meetup</title>
                <meta name="description" content="Add you own meetup and create amazing networking oppertunities" />
                
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>    
    )
}

export default NewMeetupPage;