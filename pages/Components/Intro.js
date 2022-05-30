import Typical from 'react-typical'
import styles from "../../styles/Intro.module.css"
import Image from 'next/image'
import Sameer from '../../assets/s2.jpg'

export default function FirstSection() {
    const aplha = ['FULL STACK WEB DEVELOPER.!!', 'MERN STACK WEB DEVELOPER.', 'MEVN STACK WEB DEVELOPER.','Copy/Paste Professional']
    return (<>
        <div className={styles.BGimagemain}>
            <span id="Intro"></span>
            <div  className={styles.Hih0}>
                <div>
                    <div style={{ borderRadius:"50%",float: "right",marginTop:"-30px",padding:"20px" }}> 

                        <Image alt="Sameerimg" style={{borderRadius:"50%"}} width={290} height={300} src={Sameer} />
                    </div>
                    <h1>Hello, My name is Sameer Aijaz.</h1>
                    <div style={{ display: "flex" }}>
                        <h2>And I am <Typical
                            steps={[aplha[0], 10000,aplha[1], 10000,aplha[2], 10000,aplha[3], 10000]}
                            loop={Infinity}
                            wrapper="span"
                        /></h2>

                    </div>
                    <blockquote>"Programming isn't about what you know; it's about what you can figure out.” - Chris Pine</blockquote>
                    <blockquote>"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie</blockquote>
                </div>
            </div>
        </div>
    </>
    )

}