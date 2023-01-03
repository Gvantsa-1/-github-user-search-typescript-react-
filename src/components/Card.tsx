import styled from "styled-components";
import Props from "../App";
import { Footer } from "../components/Footer";
import Moment from "react-moment";

type Props = {
  dark?: boolean;
};
export const Card = (Props: boolean | any) => {
  const { dark, data } = Props;
  console.log(data.created_at);

  return (
    <CardContainer dark={dark}>
      <Profile>
        <Image alt="image" src={data.avatar_url}></Image>
        <Info>
          <Name dark={dark}>{data.name}</Name>
          <GitName>{data.login}</GitName>
          <JoinedDate dark={dark}>
            Joined <Moment format="DD MMM YYYY">{data.created_at}</Moment>
          </JoinedDate>
        </Info>
      </Profile>
      <Text dark={dark}>{data.bio}</Text>
      <InfoBox dark={dark}>
        <InfoWrapper dark={dark}>
          <InfoText>Repos</InfoText>
          <Number>{data.public_repos}</Number>
        </InfoWrapper>
        <InfoWrapper dark={dark}>
          <InfoText>Followers</InfoText>
          <Number>{data.followers}</Number>
        </InfoWrapper>
        <InfoWrapper dark={dark}>
          <InfoText>Following</InfoText>
          <Number>{data.following}</Number>
        </InfoWrapper>
      </InfoBox>
      <Footer data={data} dark={dark} />
    </CardContainer>
  );
};

const CardContainer = styled.div<Props>`
  width: 327px;
  height: 100vh;
  border-radius: 15px;
  background-color: ${(props) =>
    props.dark ? "var(--basicWhite)" : "var(--basicDark)"};
  margin-top: 16px;
  padding: 33px 24px 48px 24px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  @media screen and (min-width: 750px) {
    width: 573px;
    height: 481px;
    margin-top: 24px;
    padding: 40px;
  }
  @media screen and (min-width: 1100px) {
    width: 730px;
    height: 444px;
    padding: 44px 48px 42px 48px;
  }
`;
const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Image = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin-right: 15px;
  @media screen and (min-width: 750px) {
    height: 117px;
    width: 117px;
    margin-right: 21px;
  }
  @media screen and (min-width: 750px) {
    margin-right: 27px;
  }
`;
const Info = styled.div`
  min-width: 144px;
  @media screen and (min-width: 750px) {
    min-width: 176px;
    position: relative;
  }
  @media screen and (min-width: 1100px) {
    min-width: 420px;
  }
`;
const Name = styled.h2<Props>`
  font-weight: 700;
  max-width: 108px;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.dark ? "var(--darkText)" : "var(--basicWhite)")};
  @media screen and (min-width: 750px) {
    min-width: 176px;
    font-size: 26px;
    line-height: 38px;
    letter-spacing: 1px;
  }
`;
const GitName = styled.h3`
  font-weight: 400px;
  font-size: 13px;
  line-height: 19px;
  color: var(--search);
  @media screen and (min-width: 750px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const JoinedDate = styled.h2<Props>`
  min-width: 144px;
  letter-spacing: 0.5px;
  color: ${(props) => (props.dark ? "var(--lightGrey)" : "var(--basicWhite)")};
  font-size: 13px;
  line-height: 19px;
  font-weight: 400;
  @media screen and (min-width: 750px) {
    max-width: 166px;
    font-size: 15px;
    line-height: 22px;
  }
  @media screen and (min-width: 1100px) {
    position: absolute;
    top: 5px;
    left: 375px;
  }
`;
const Text = styled.p<Props>`
  padding: 20px;
  font-size: 13px;
  font-weight: 400;
  line-height: 25px;
  display: flex;
  align-items: flex-start;
  color: ${(props) => (props.dark ? "var(--lightGrey)" : "var(--basicWhite)")};
  margin-top: 23px;
  width: 279px;
  height: 70px;
  display: flex;
  align-items: start;
  text-align: start;
  @media screen and (min-width: 750px) {
    font-size: 15px;
    margin-top: 14px;
    text-align: start;
    width: 493px;
    height: 55px;
  }
  @media screen and (min-width: 1100px) {
    margin-top: -32px;
    width: 465px;
    margin-left: 164px;
  }
`;
const InfoBox = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  width: 279px;
  height: 85px;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.dark ? "var(--backgroundWhite)" : "var(--background)"};
  padding: 18px 14px;
  margin-top: 23px;
  @media screen and (min-width: 750px) {
    width: 493px;
    padding: 15px 32px;
    margin-top: 22px;
  }
  @media screen and (min-width: 1100px) {
    width: 480px;
    margin-left: 150px;
  }
`;
const InfoText = styled.h3`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  @media screen and (min-width: 750px) {
    font-size: 13px;
    line-height: 19px;
  }
`;
const InfoWrapper = styled.div<Props>`
  width: 79px;
  display: block;
  color: ${(props) => (props.dark ? "var(--darkText)" : "var(--basicWhite)")};
`;
const Number = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto;
  @media screen and (min-width: 750px) {
    font-size: 22px;
    line-height: 32px;
  }
`;
