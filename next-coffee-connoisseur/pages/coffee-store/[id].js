import {useRouter} from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
    const router = useRouter();
    console.log('router', router);
    return (
        <div>
            Coffee store Page {router.query.id}
            <Link href="/" scroll="true">
                <a>Back to home</a>
            </Link>
        </div>
    );
}

export default CoffeeStore;