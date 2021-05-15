import { useRouter } from 'next/router';
import Details from '../../components/details/Details';

const details = () => {
    const router = useRouter();
    return ( <Details id={router.query.id} /> );
}
 
export default details;