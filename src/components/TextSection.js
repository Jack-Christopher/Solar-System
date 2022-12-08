import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Title>Sistema Solar</Title>
      {/* <Description>
        Nuestro sistema solar consta de nuestra estrella, el Sol, y todo lo que está ligado a él por la gravedad: los planetas Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno; planetas enanos como Plutón; docenas de lunas; y millones de asteroides, cometas y meteoroides.
      </Description> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 10px 10px 10px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`;

const Description = styled.p`
  max-width: 240;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
