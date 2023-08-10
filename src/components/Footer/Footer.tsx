import { Container } from './styles'

import computerIcon from '../../assets/computer.png'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import whatsappIcon from '../../assets/whatsapp.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>¢ode</span>
        <span>wunder</span>
      </a>
      <div>
        <p>
          © 2023 Codewunder<img src={computerIcon} alt="Computer" />          
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/wisdom-iwara-140b11218"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/codewunder"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/stunwunder/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://wa.me/08122390396"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </Container>
  )
}
