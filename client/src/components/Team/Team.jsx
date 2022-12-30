import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/react";
//footer

export default function Team() {
    return (
        <div>
        <NavBar/>
        <br/>
        <br/>
        <h1>Leadership Team</h1>
        <br/>
        <br/>
        <img src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672087214/McBurgerExtras/fondo_negro_con_logo_alargado_fj2wua.jpg"/>
        <br/>
        <br/>
        <br/>
        <div className=''>
            <div className=''>
                <img src="https://media.licdn.com/dms/image/D4D03AQEbLbsF_y1mtQ/profile-displayphoto-shrink_800_800/0/1669644157626?e=1677715200&v=beta&t=z8p7NyVzlQG431dI1DWsD8U1pnq_7kPNxoKGfZg4hDQ" />
                <br/>
                <h2>Agustina Monzón</h2>
                <div>
                <a href="https://www.linkedin.com/in/agustinamonzon/" target='_BLANK'>
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" width={50}/>
                </a>
                </div>
            </div>
            <div className=''>
                <img src="https://media.licdn.com/dms/image/C4D03AQGrt5CD1N4Z3A/profile-displayphoto-shrink_800_800/0/1517278336085?e=1677715200&v=beta&t=HBzTDY4ucPewS210tMRpPbuHH6TP2iFP8hTqrclQkuY" />
                <br/>
                <h2>Cristian Ganon</h2>
                <div>
                <a href="https://www.linkedin.com/in/cristian-ganon-6b2242135/" target='_BLANK'>
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" width={50}/>
                </a>
                </div>
            </div>
            <div className=''>
                <img src="https://ca.slack-edge.com/TPRS7H4PN-U035S7PSNM9-f83e6abc9297-512" />
                <br/>
                <h2>Enri Torres</h2>
                <div>
                <a href="https://www.linkedin.com/in/enritorres/" target='_BLANK'>
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" width={50}/>
                </a>
                </div>
            </div>
            <div className=''>
                <img src="https://ca.slack-edge.com/TPRS7H4PN-U040A6M02CW-8133079276fa-512" />
                <br/>
                <h2>Francisco Rodriguez</h2>
                <div>
                <a href="https://www.linkedin.com/in/francisco-rodriguez-793039248/" target='_BLANK'>
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" width={50}/>
                </a>
                </div>
            </div>
            <div className=''>
                <img src="https://ca.slack-edge.com/TPRS7H4PN-U03D5BSC9C1-8ad5462add65-512" />
                <br/>
                <h2>Lucas Gimenez</h2>
                <div>
                <a href="https://www.linkedin.com/in/lucas-gim%C3%A9nez-226b3122b/" target='_BLANK'>
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" width={50}/>
                </a>
                </div>
            </div>
            <div className=''>
                <img src="https://ca.slack-edge.com/TPRS7H4PN-U03NJ499XU6-87214f9b7982-512" />
                <br/>
                <h2>Melina Veyrat</h2>
                <div>
                <a href="https://www.linkedin.com/in/melina-veyrat-durbex-b66b3b227/" target='_BLANK'>
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" width={50}/>
                </a>
                </div>
            </div>
            <div className=''>
                <img src="https://ca.slack-edge.com/TPRS7H4PN-U03NJ4CMCTG-7259103552ce-512" />
                <br/>
                <h2>Sandra Garaycochea</h2>
                <div>
                <a href="https://www.linkedin.com/in/sandra-cecilia-garaycochea/" target='_BLANK'>
                <img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1668422608/sintetico/linkedin_rxgsl3.png" alt="linkdin" width={50}/>
                </a>
                </div>
            </div>
        </div>
        </div>
    )
}