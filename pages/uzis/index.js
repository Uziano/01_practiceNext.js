import Link from 'next/link';
import styles from '../../styles/Uzis.module.css'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { uzis: data } 
    }

}

const Uzis = ({ uzis }) => {
    return ( 
        <div>
            <h1>All Uzis</h1>
            {uzis.map( uzi => (
                <Link href={'/uzis/' + uzi.id} key={uzi.id}>
                    <a className={styles.single}>
                        <h3>{uzi.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default Uzis;