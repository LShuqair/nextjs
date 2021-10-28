import { Link } from 'components';
import { SYMBOL_PREVIEW_DATA } from 'next/dist/next-server/server/api-utils';
import AddEdit from '../components/users/AddEdit'


export default Home;

function Home() {
    return (
        <div>
            
            <p><Link 
            style={{ color: 'gray', 
            textDecoration: 'none',
            paddingTop: 13,
            fontSize:25,
            
        

            
            }} href="/users/add">Add Guest</Link></p>
            
           
        </div>
    );
}
