import styled from "styled-components";

function Navbar() {
  return (
    <Navbarstyled>
      <h1>Movies Finder</h1>
      {/* <p>mannndeee</p> */}
    </Navbarstyled>
  );
}

export default Navbar;

const Navbarstyled = styled.nav`
  background: #020202;
  padding: 20px 100px;
  color: #f1f1f1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
