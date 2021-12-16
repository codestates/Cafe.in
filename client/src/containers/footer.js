import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>

              </Footer.Column> 
              <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">South Korea </Footer.Link>
                    <Footer.Link href="#">02 )1234-5678 </Footer.Link>

                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Crew</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-github" />문기훈</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-github" />양승준</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-github" />김윤재</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-github" />박세현</Footer.Link>
                </Footer.Column>
               
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}