import styled from "styled-components";

function Info() {
  return (
    <Infostyled>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 8v5M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
          stroke="#555555"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M11.994 16h.01"
          stroke="#555555"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <p>Find the synopsis, ratings and release dates for various movies</p>
    </Infostyled>
  );
}

export default Info;

const Infostyled = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  gap: 10px;
  background: #f2f2f2;
  padding: 5px 20px;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;
