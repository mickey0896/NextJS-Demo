import Head from "next/head"
import Image from "next/image";

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    console.log(data, 'data');
    return {
        props: { products: data.products }
    }

}

export default function Index({products}) {
    return (
        <>
            <Head>
                <title>สินค้าทั้งหมด | Mix Shop</title>
                <meta name='keywords' content='Anupong Hathacheep,mix,ร้านค้า,ขายเสื้อผ้า,ขายของ' />
            </Head>
            <div>
                {products.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <Image src={item.thumbnail} width={300} height={300} alt={item.title}/>
                    </div>
                ))}
            </div>
        </>
    )
}