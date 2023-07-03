import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import logo from "../../assets/vaco.png";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import SearchInput from "../SearchInput";

const Header = styled.header`
  position: fixed;
  background-color: #000000;
  width: 100%;
  top: 0;
  box-shadow: 0px 1px 5px 1px rgba(255, 255, 255, 0.5);

  section {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 0;
  }

  a {
    text-decoration: none;
    color: #ffffff;
  }

  .brand {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 10px;
      text-transform: uppercase;
      font-style: italic;
    }
  }

  img {
    height: 30px;
  }

  .input-container {
    width: 300px;
  }
`;

export default function AppHeader({ onInput, onSearch, inputKeyword }) {
  return (
    <Header>
      <Container>
        <section>
          <Link to="/videos">
            <div className="brand">
              <img src={logo} alt="logo" />
              <Heading>Youtube Viewer</Heading>
            </div>
          </Link>
          <div className="input-container">
            <SearchInput
              placeholder="검색"
              onInput={onInput}
              onSearch={onSearch}
              inputValue={inputKeyword}
            />
          </div>
        </section>
      </Container>
    </Header>
  );
}

AppHeader.propTypes = {
  onInput: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  inputKeyword: PropTypes.string,
};
