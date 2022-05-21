function UserProfilePage(props) {
    return (
        <h1>{props.username}</h1>
    )
}

export default UserProfilePage;

export async function getServerSideProps(context) {

   //  console.log("context =>> ", context);
    const { params, req, res } = context;

    console.log('Server side code');

    return {
        props: {
            username: 'Max'
        }
    };
}