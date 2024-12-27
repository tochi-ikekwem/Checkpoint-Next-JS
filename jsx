import Link from 'next/link';  
import styles from '../styles/Home.module.css'; // Module-based CSS  

const Home = () => {  
    return (  
        <div className={styles.container}>  
            <h1>Welcome to My Portfolio</h1>  
            <nav>  
                <ul>  
                    <li><Link href="/about">About Me</Link></li>  
                    <li><Link href="/projects">My Projects</Link></li>  
                    <li><Link href="/contact">Contact</Link></li>  
                </ul>  
            </nav>  
        </div>  
    );  
};  

export default Home;

