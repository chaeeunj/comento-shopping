import styled from 'styled-components';

const Navigation = () => {
  return (
    <div>
      <TitleStyled> 코멘토 쇼핑 </TitleStyled>
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
