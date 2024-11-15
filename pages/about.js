import styles from "@/styles/About.module.css"
import Image from "next/image"

export default function About() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>เกี่ยวกับเรา</h1>
                <Image src="/about.svg" width={500} height={500} alt='logo' />
            </div>
        </>
    )
}