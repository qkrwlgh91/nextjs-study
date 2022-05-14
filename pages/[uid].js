function UserIdPage(props) {
    return (
        <h1>{props.id}</h1>
    )
}

export default UserIdPage;

export async function getServerSideProps(context) {
    const { params } = context;
    console.log("uid - params : ", params);

    const userId = params.uid;

    return {
        props: {
            id: 'userid-' + userId
        }
    }
}