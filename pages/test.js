import { useRouter } from 'next/router';

const Test = () => {
    const router = useRouter();
    console.log(router.query)
    return (
        <h1>
            hi
            <div>{router.query.num}</div>
            <div>{router.query.age}</div>
        </h1>
    )
}
 
export default Test;