//The name is between brackes cause that makes it changeable

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    const paths = data.map(uzi => {
        return {
            params: { id: uzi.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {
            uzi:data
        }
    }
}

const Details = ({ uzi }) => {
    return (  
        <div>
            <h1>{uzi.name}</h1>
            <p>{uzi.email}</p>
            <p>{uzi.website}</p>
            <p>{uzi.address.city}</p>
        </div>
    );
}
 
export default Details;