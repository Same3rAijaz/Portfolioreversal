import React from 'react'
import Head from 'next/head'
import styles from '../../styles/AboutandSkills.module.css'

export default function AboutAndSkills() {
  return (<>
    <div className={styles.D1}>
      <div >
        <div id='AboutAndSkills'>
          <marquee  style={{ backgroundColor: "rgba(255,255,255,0.5)", marginTop: "10px", marginInline: "10%", display: "flex", width: "80vw", borderBottom: "3px solid black" }}>
          <div style={{display:"flex",}}>
            <h1 >About&nbsp;And&nbsp;Skills</h1>
            <p style={{ marginTop: "35px", marginInline: "10px" }}>~~Welcome to my About and Skills~~</p>
            </div>
            </marquee>
        </div>
        <div className={styles.D2}>
          <div className={styles.D2C1}>
            <ul>
              <h2>A Quick Intro About Me:</h2>
              <li>
                Education And Qualification:
              </li>
              <ul>
                <li>Matric from SSCA.</li>
                <li>Inter from Bahria Foundation College.</li>
                <li>BSSE from SMIU.</li>
              </ul>
              <li>
                About:
              </li>
              <ul>
                <li>Currently 21.</li>
                <li>From KArachi (PAkistan).</li>
              </ul>
              <li>
                Skills:
              </li>
              <ul>
                <li>FULL Stack web developer.</li>
                <li>HTMl / css and javascript.</li>
                <li>MERN stack.</li>
                <li>MEVN stack.</li>
                <li>NEXTJS.</li>
                <li>TAilwind.</li>
                <li>bootstrap.</li>
                <li>material ui.</li>
                <li>and many more because learning never stops.</li>
                

              </ul>
            </ul>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}
