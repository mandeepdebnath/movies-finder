import styled from "styled-components";

function Searchbar(props) {
  //states input query for movies

  return (
    <>
      <form onSubmit={props.function}>
        <Searchbarstyled>
          <label htmlFor="query">Movie Name</label>
          <input
            type="text"
            name="query"
            placeholder="search movies"
            value={props.query}
            onChange={(e) => {
              props.setQuery(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </Searchbarstyled>
      </form>
    </>
  );
}

export default Searchbar;

const Searchbarstyled = styled.div`
  /* background: #d1d1d1; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  label {
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
  }

  input[type="text"] {
    padding: 10px 20px;
    width: 60%;
    border: 1px solid #ddd;
    font-size: 1.2rem;
    border-radius: 20px;
  }

  button {
    padding: 10px 20px;
    border: none;
    background: #020202;
    color: #fff;
    width: 20%;
    font-size: 1.2rem;
    border-radius: 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

    input[type="text"] {
      width: 100%;
    }

    button {
      width: 100%;
    }
  } ;
`;
