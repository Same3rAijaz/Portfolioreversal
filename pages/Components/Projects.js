import styles from "../../styles/Projects.module.css"
import Image from "next/image"
import visitor from "../../assets/visitor.png"
import xeoncity from "../../assets/xeoncity.png"
import technodix from "../../assets/technodix.png"
import invonta from "../../assets/invonta.png"


export default function Projects() {
    return (
        <div id="Projects" className={styles.Projectss}>
            <div style={{display:"flex",}}>
                <h1 style={{paddingInline:"20px",paddingBlock:"10px",borderRadius:"20px",borderBottom:"2px solid black",backgroundColor:"rgba(255, 255, 255, 0.653)",margin:"20px"}}>Some OF the projects are:</h1>
            </div>
            <div className={styles.cardmain}>

            <div className={styles.cards}>
                <Image height={900} className={styles.cardimage} src={visitor}/>
                <div className={styles.cardtext}>
                    <h2>The Visitor</h2><h4 style={{margin:"30px"}}>Visiting management and appointment system</h4>
                </div>
            </div>
            <div className={styles.cards}>
                <Image height={900} className={styles.cardimage} src={xeoncity}/>
                <div className={styles.cardtext}>
                    <h2>XEON CITY</h2><h4 style={{margin:"30px"}}>E-Commerce website of electronic goods</h4>
                </div>
            </div>
            </div>
            <div className={styles.cardmain}>
            <div className={styles.cards}>
                <Image height={900} className={styles.cardimage} src={technodix}/>
                <div className={styles.cardtext}>
                    <h2>TECHNODIX</h2><h4 style={{margin:"30px"}}>Blog website for technology updates</h4>
                </div>
            </div>
            <div style={{backgroundColor:" rgba(240, 248, 255, 0.3)",justifyContent:"center",textAlign:"center"}} className={styles.cards}>
                <h1 style={{marginTop:"20%"}}>
                    5+ Jobs done with client satisfactions and more personnal projects are under development
                </h1>
            </div>
            </div>
        </div>
    )
}
