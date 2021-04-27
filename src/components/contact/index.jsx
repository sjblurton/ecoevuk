import React from "react"
import EmailForm from "./form"
import {
  Subtitle,
  Link,
  Title,
  Body,
  Content,
  Image,
  Main,
  Wrapper,
} from "./styles/contact"
import ContactSVG from "../../assets/svg/contactSVG"
import WhatsAppIcon from "../../assets/svg/whatsAppSVG"
import { ContactContent, ContactDetails } from "../../data/content"
import { Button } from "../../shared"

const Contact = () => {
  return (
    <Wrapper>
      <Main>
        <Image>
          <ContactSVG />
        </Image>
        <Content>
          <Title>Contact Us</Title>
          <Body>{ContactContent.body}</Body>
          <Subtitle>{ContactContent.subtitle}</Subtitle>
          <Link href={`tel:${ContactDetails.phone}`}>
            +{ContactDetails.phone}
          </Link>
          <Subtitle>Send us a WhatsApp:</Subtitle>
          <Link
            href={`https://wa.me/${ContactDetails.phone}?text=Please%20call%20back%20reqarding%20a%20quote%20for%20a%20EV%20charger`}
          >
            <Button variant="outline">
              <div>WhatsApp</div>
              <WhatsAppIcon />
            </Button>
          </Link>
        </Content>
      </Main>
      <EmailForm />
    </Wrapper>
  )
}

export default Contact
