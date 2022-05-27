import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter, faGoogle, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'
import Clocks from "./Components/Clock";
import Link from 'next/link';
export default function Home() {

  const icons = [faFacebookF, faLinkedinIn, faInstagram, faTwitter, faGoogle, faWhatsapp, faGithub]
  const links = ["https://www.facebook.com/muhammadsameer.aijaz",
    "https://www.linkedin.com/in/sameer-aijaz-a7198b216/"
    , "https://www.instagram.com/same3r_a1jaz/",
    "https://twitter.com/AijaxSam",
    "mailto:aijazsameer5@gmail.com",
    "https://wa.me/923114672433?text=I'm%20interested%20in%20your%20profile%20"
    , "https://github.com/Same3rAijaz"
  ]
  return (
    <div className={styles.container}>
      <div style={{ fontSize: "40px",fontWeight:'400',fontFamily: 'serif' }}>Welcome to Sameer&apos;s Portfolio. </div><br/>
      <div style={{ fontSize: "30px", fontWeight:'lighter',fontFamily: 'serif' }}>We are working hard to do our best design on this website<br />Until then we look forward to serve you on our socials. </div>
      <Clocks />
      <div style={{ margin: "auto" }}>
        <div>
          <Link target="_blank" href={links[0]}  >
            <span style={{ padding: "20px" }}>
              <FontAwesomeIcon icon={icons[0]} />
            </span>
          </Link>
          <Link target="_blank" href={links[1]}  >
            <span style={{ padding: "20px" }}>
              <FontAwesomeIcon icon={icons[1]} />
            </span>
          </Link>
          <Link target="_blank" href={links[2]}  >
            <span style={{ padding: "20px" }}>
              <FontAwesomeIcon icon={icons[2]} />
            </span>
          </Link>
          <Link target="_blank" href={links[3]}  >
            <span style={{ padding: "20px" }}>
              <FontAwesomeIcon icon={icons[3]} />
            </span>
          </Link>
          <Link target="_blank" href={links[4]}  >
            <span style={{ padding: "20px" }}>
              <FontAwesomeIcon icon={icons[4]} />
            </span>
          </Link>
          <Link target="_blank" href={links[5]}  >
            <span style={{ padding: "20px" }}>
              <FontAwesomeIcon icon={icons[5]} />
            </span>
          </Link>
          <Link target="_blank" href={links[6]}  >
            <span style={{ padding: "20px" }}>
              <FontAwesomeIcon icon={icons[6  ]} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
