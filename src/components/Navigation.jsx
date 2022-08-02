import styled from 'styled-components';

const Navigation = ({ navigationName }) => {
  return (
    <div>
      <TitleStyled>{navigationName}</TitleStyled>
    </div>
  );
};

export default Navigation;

const TitleStyled = styled.div`
  padding: 20px 152px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;
