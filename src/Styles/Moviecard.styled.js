import styled from "styled-components";

export const Moviecard = styled.div`
  background: #f2f2f2;
  padding: 15px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  margin: 10px;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Movieimage = styled.img`
  height: 180px;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Movieinfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Moviesynopsis = styled.p`
  @media (max-width: 768px) {
    line-height: 20px;
  }
`;
