import { faArrowAltCircleUp, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'
import Intro from './Components/Intro'
import AboutAndSkills from "./Components/AboutAndSkills"
import Projects from './Components/Projects'
import CAndF from './Components/CAndF'
export default function Home() {

  const Linkvalue = useRef(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sameer Aijaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Links */}
      <div style={{ zIndex: "1000", position: "fixed", width: "200px", height: "200px", right: "10px", top: "60vh" }}>
        <Link href={Linkvalue.current == 0 ? "#Intro" : Linkvalue.current == 1 ? "#AboutAndSkills" : Linkvalue.current == 2 ? "#Projects" : "#CandF"}>
          <button onClick={() => Linkvalue.current > 0 ? Linkvalue.current-- : null} style={{ backgroundColor: "rgba(21,21,21,0.9)", width: "50px", height: "50px", borderRadius: "100%", float: "right", marginRight: "20px", marginTop: "20px" }}>
            <FontAwesomeIcon icon={faArrowUp} style={{ color: "white" }} />
          </button>
        </Link>

        <Link href={Linkvalue.current == 0 ? "#Intro" : Linkvalue.current == 1 ? "#AboutAndSkills" : Linkvalue.current == 2 ? "#Projects" : "#CandF"}>
          <button onClick={() => Linkvalue.current < 3 ? Linkvalue.current++ : null} style={{ backgroundColor: "rgba(21,21,21,0.9)", position: 'fixed', marginTop: "120px", right: "10px", bottom: "120px", width: "50px", height: "50px", borderRadius: "100%", float: "right", marginRight: "20px", marginTop: "20px" }}>
            <FontAwesomeIcon icon={faArrowDown} style={{ color: "white" }} />
            {console.log(Linkvalue.current)}
          </button>
        </Link>
      </div>




      <Intro />
      <AboutAndSkills />
      <Projects />
      <CAndF />
    </div>
  )
}
