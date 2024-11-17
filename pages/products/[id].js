import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Detail.module.css"

export async function getStaticPaths() {
    const res = await fetch('https://dummyjson.com/products?limit=12')
    const data = await res.json()
    const paths = data.products.map((item) => {
        return {
            params: { id: String(item.id) }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    return {
        props: { products: data }
    }

}
export default function ProductsDetail({ products }) {
    return (
        <>

            <Head>
                <title>{products.title}</title>
            </Head>
            <div className={styles.container}>
                <div>
                    <Image src={products.thumbnail} width={300} height={300} alt={products.title} />
                </div>
                <div className={styles.detail}>
                    <h1>ชื่อ : {products.title}</h1>
                    <h2>ราคา : {products.price} $</h2>
                    <h2>หมวดหมู่ : {products.category}</h2>
                    <h3>แบรนด์ : {products.brand}</h3>
                    <h4>ข้อมูลพื้นฐาน : {products.description}</h4>
                    <h4>คะแนน : {products.rating} / 5</h4>
                </div>
            </div>
        </>
    )
}