import Typical from 'react-typical'
import styles from "../../styles/Intro.module.css"
import Image from 'next/image'
import Sameer from '../../assets/s2.jpg'

export default function FirstSection() {
    return (<>
        <div className={styles.BGimagemain}>
            <span id="Intro"></span>
            <div  className={styles.Hih0}>
                <div>
                    <div style={{ borderRadius:"50%",float: "right",marginTop:"-30px",padding:"20px" }}> 

                        <Image  style={{borderRadius:"50%"}} width={290} height={300} src={Sameer} />
                    </div>
                    <h1>Hello, My name is Sameer Aijaz.</h1>
                    <div style={{ display: "flex" }}>
                        <h2>And I am <Typical
                            steps={['FULL STACK WEB DEVELOPER.!!', 10000, 'MERN STACK WEB DEVELOPER.!!', 10000, 'MEVN STACK WEB DEVELOPER.!!', 10000, 'Copy/Paste Professional', 10000]}
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