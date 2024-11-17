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
            <h1>รหัสสินค้า : {products.id}</h1>
            <h1>ชื่อ : {products.title}</h1>
            <h2>ราคา : {products.price} $</h2>
        </>
    )
}