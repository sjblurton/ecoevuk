import styled from "styled-components/macro"

export const Wrapper = styled.section`
  padding: clamp(16px, 5%, 64px);
  position: relative;
  display: flex;
  width: 100%;
  min-height: 600px;
  max-height: 820px;
  flex-direction: column;
  overflow: hidden;
`
export const Title = styled.h2`
  padding-bottom: clamp(16px, 5%, 32px);
  width: 100%;
  max-width: 400px;
  ${props => props.theme.text.h2};
  color: ${props => props.theme.color.dark};
`
export const Body = styled.p`
  padding-bottom: clamp(16px, 5%, 32px);
  width: 100%;
  max-width: 400px;
  ${props => props.theme.text.body};
  color: ${props => props.theme.color.body};
  &:nth-child(2) {
    margin-left: clamp(0px, 2.5%, 16px);

    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
  &:nth-child(3) {
    margin-left: clamp(4px, 5%, 32px);
    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
  &:nth-child(4) {
    margin-left: clamp(8px, 10%, 64px);
    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
  &:nth-child(5) {
    margin-left: clamp(16px, 15%, 128px);
    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
`
export const Image = styled.div`
  position: absolute;
  top: -400px;
  right: -400px;
  z-index: -1;
  width: 880px;
  height: 880px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background: linear-gradient(
    66.73deg,
    #ffffff 4.62%,
    rgba(255, 255, 255, 0) 103.58%
  );
  & div:first-of-type {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  & div:last-of-type {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(
      66.73deg,
      #ffffff 4.62%,
      rgba(255, 255, 255, 0) 103.58%
    );
  }

  @media (max-width: 600px) {
    width: 335px;
    height: 335px;
    top: auto;
    bottom: -100px;
    right: -120px;
  }
`

export const ButtonContainer = styled.div`
  padding-bottom: clamp(16px, 5%, 32px);
  margin-left: clamp(32px, 20%, 256px);
  @media (max-width: 600px) {
    margin-left: 0;
  }
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: flex-end;
`
export const EcoEv = styled.span`
  ${props => props.theme.text.text}
  span:first-of-type {
    color: ${props => props.theme.color.primary};
  }
  span:last-of-type {
    color: ${props => props.theme.color.secondary};
  }
`
