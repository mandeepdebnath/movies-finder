import styled from "styled-components";

function Footer() {
  return (
    <>
      <Footerstyled>
        <p>
          Created using React by{" "}
          <a href="https://github.com/mandeepdebnath">Mandeep</a>
        </p>
      </Footerstyled>
    </>
  );
}

export default Footer;

const Footerstyled = styled.footer`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-top: 2px solid rgba(0, 0, 0, 0.3);

  a {
    color: #000;
  }
`;
