import React from "react"
import Button from "../button"
import { Link } from "gatsby"
import {
  Body,
  ButtonContainer,
  Header,
  Image,
  Price,
  Title,
  Wrapper,
  Content,
  Text,
} from "./styles/card"
import GatsbyImage from "gatsby-image"

const Card = ({ image, title, price, body, button1, button2, to, href }) => {
  return (
    <Wrapper>
      <Image>
        <GatsbyImage
          fluid={image}
          alt={title}
          style={{
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
          }}
          imgStyle={{ objectFit: "contain" }}
          objectFit="contain"
          placeholder="blurred"
        />
      </Image>
      <Body>
        <Content>
          <Header>
            <Title>{title}</Title>
            {price && <Price>{price}</Price>}
          </Header>
          <Text dangerouslySetInnerHTML={{ __html: body }}></Text>
        </Content>
        <ButtonContainer>
          {to && (
            <Link to={to}>
              <Button>{button1}</Button>
            </Link>
          )}
          {href && (
            <a href={href} target="_blank" rel="noreferrer">
              <Button variant="outline">{button2}</Button>
            </a>
          )}
        </ButtonContainer>
      </Body>
    </Wrapper>
  )
}

export default Card
