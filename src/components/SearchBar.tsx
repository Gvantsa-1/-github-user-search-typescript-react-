import React, { useState, useEffect } from "react";
import styled from "styled-components";
import searchIcon from "../assets/icon-search.svg";
import Props from "../App";
import Axios from "axios";

type Props = {
  dark?: boolean;
  name?: any;
};

export const SearchBar = (props: boolean | any) => {
  const { dark, setDark, data, setData } = props;
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    Axios.get(`https://api.github.com/users/gvantsa-1`).then((res) => {
      setData(res.data);
    });
  }, []);

  const fetchData = () => {
    Axios.get(`https://api.github.com/users/${data}`)
      .then((res) => {
        setData(res.data);
        setNoResult(false);
      })
      .catch((error) => {
        setNoResult(true);
        return error;
      });
  };

  return (
    <Search dark={dark}>
      <img src={searchIcon} />
      <InputSearch
        dark={dark}
        placeholder="Search GitHub username…"
        onChange={(event) => {
          setData(event.target.value);
        }}
      />
      {noResult ? <NoResults>No results</NoResults> : null}
      <Button type="submit" onClick={fetchData}>
        Search
      </Button>
    </Search>
  );
};
const Search = styled.div<Props>`
  position: relative;
  width: 327px;
  height: 60px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.dark ? "var(--basicWhite)" : "var(--basicDark)"};
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  align-items: center;

  padding: 6px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  @media screen and (min-width: 750px) {
    width: 573px;
    height: 69px;
    padding: 23px 10px 23px 32px;
  }
  @media screen and (min-width: 1100px) {
    width: 730px;
  }
`;
const NoResults = styled.p`
  color: #f74646;
  font-weight: 700;
  font-size: 11px;
  position: absolute;
  max-width: 80px;
  left: 170px;
  @media screen and (min-width: 750px) {
    font-size: 13px;
    left: 370px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 15px;
    left: 540px;
    width: 140px;
  }
`;
const InputSearch = styled.input<Props>`
  padding: 6px 0 6px 10px;
  cursor: pointer;
  font-size: 13px;
  color: ${(props) => (props.dark ? "var(--darkText)" : "var(--basicWhite)")};
  font-weight: 400;
  line-height: 25px;
  @media screen and (min-width: 750px) {
    font-size: 18px;
    width: 230px;
    margin-left: -150px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 18px;
    width: 230px;
    margin-left: -300px;
  }
`;
const Button = styled.button`
  background-color: var(--search);
  width: 84px;
  height: 46px;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.5s linear;
  &:hover {
    background-color: var(--btnHover);
  }
  @media screen and (min-width: 750px) {
    width: 106px;
    height: 50px;
    font-size: 16px;
  }
`;
