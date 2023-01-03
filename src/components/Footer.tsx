import React from "react";
import styled from "styled-components";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import company from "../assets/icon-company.svg";
import Props from "../App";

type Props = {
  dark?: boolean;
};
export const Footer = (props: boolean | any) => {
  const { dark, data } = props;
  console.log(data);

  return (
    <FooterContainer>
      <FootWrapper>
        <FooterChild dark={dark}>
          <img src={location} />
          {data.location ? (
            <FooterResultBlog dark={dark}>{data.location}</FooterResultBlog>
          ) : (
            <FooterResult2 dark={dark}>Not Available</FooterResult2>
          )}
        </FooterChild>
        <FooterChild dark={dark}>
          <img src={website} />
          {data.blog ? (
            <FooterResultBlog dark={dark}>{data.blog}</FooterResultBlog>
          ) : (
            <FooterResult2 dark={dark}>Not Available</FooterResult2>
          )}
        </FooterChild>
      </FootWrapper>
      <div>
        <FooterChild dark={dark}>
          <img src={twitter} />
          {data.twitter_username ? (
            <FooterResult dark={dark}>{data.company}</FooterResult>
          ) : (
            <FooterResult2 dark={dark}>Not Available</FooterResult2>
          )}
        </FooterChild>
        <FooterChild dark={dark}>
          <img src={company} />

          {data.company ? (
            <FooterResult dark={dark}>{data.company}</FooterResult>
          ) : (
            <FooterResult2 dark={dark}>Not Available</FooterResult2>
          )}
        </FooterChild>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  margin-top: 20px;
  padding-bottom: 3%;
  @media screen and (min-width: 750px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1100px) {
    margin-top: 17px;
    margin-left: 160px;
  }
`;
const FootWrapper = styled.div`
  max-width: 50px;
`;
const FooterResult = styled.div<Props>`
  display: inline;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  max-width: 70px;
  cursor: pointer;
  margin-left: 10px;
  color: ${(props) => (props.dark ? "var(--lightGrey)" : "var(--basicWhite)")};
  @media screen and (min-width: 750px) {
    font-size: 15px;
    line-height: 22px;
    max-width: 75px;
    margin-left: 19px;
  }
`;
const FooterResult2 = styled.div<Props>`
  font-weight: 400;
  font-size: 9px;
  line-height: 16px;
  max-width: 100px;
  cursor: pointer;
  margin-left: 10px;
  color: var(--lightGrey);
  @media screen and (min-width: 750px) {
    font-size: 15px;
    max-width: 152px;
    margin-left: 19px;
  }
`;
const FooterResultBlog = styled.div<Props>`
  font-weight: 400;
  font-size: 9px;
  line-height: 16px;
  max-width: 55px;
  cursor: pointer;
  margin-left: 10px;
  color: ${(props) => (props.dark ? "var(--lightGrey)" : "var(--basicWhite)")};
  @media screen and (min-width: 750px) {
    font-size: 12px;
    line-height: 22px;
    max-width: 55px;
    margin-right: 39px;
  }
  @media screen and (min-width: 1100px) {
    margin-bottom: 5px;
    font-size: 12px;
    line-height: 22px;
    max-width: 55px;
    margin-right: 39px;
  }
`;
const FooterChild = styled.div<Props>`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
  width: 170px;
  img {
    ${(props) =>
      props.dark ? "filter:brightness(92%)" : "filter:brightness(352%)"};
  }
  @media screen and (min-width: 750px) {
    width: 170px;
  }
`;
