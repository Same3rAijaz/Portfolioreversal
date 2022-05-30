import Head from 'next/head'
import Image from 'next/image'
import Sam from "../../assets/sameercall.jpg"
import styles from "../../styles/CAndF.module.css"

export default function CAndF() {
  
    return (
        <div className={styles.CandFmain} id="CandF">
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <div className={styles.card} style={{marginTop:"10%"}}>
                <Image alt='Hello'  style={{borderRadius:"50%"}} src={Sam} width={200} height={200}/>
                <h1>Sameer Aijaz</h1>
                <p className={styles.title}>Full Stack Web Developer.</p>
                <p>SMI University</p>
                <a style={{marginInline:"10px"}} href="https://wa.me/923114672433?text=I'm%20interested%20in%20your%20profile%20"><i className="fa fa-whatsapp"></i></a>
                <a style={{marginInline:"10px"}} href="https://twitter.com/AijaxSam"><i className="fa fa-twitter"></i></a>
                <a style={{marginInline:"10px"}} href="https://www.linkedin.com/in/sameer-aijaz-a7198b216/"><i className="fa fa-linkedin"></i></a>
                <a style={{marginInline:"10px"}} href="https://www.facebook.com/muhammadsameer.aijaz"><i className="fa fa-facebook"></i></a>
                <a style={{marginInline:"10px"}} href="https://www.instagram.com/same3r_a1jaz/"><i className="fa fa-instagram"></i></a>
                <a style={{marginInline:"10px"}} href="https://github.com/Same3rAijaz"><i className="fa fa-github"></i></a>
                <a style={{marginInline:"10px"}} href="mailto:aijazsameer5@gmail.com"><i className="fa fa-google"></i></a>
                <p><button>Thank You For The Visit</button></p>
            </div>
        </div>

    )
}
