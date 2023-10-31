import { ButtonStyle, WrapperButton } from './Button.styles';


const Button = ({ onClickRender }) => (
  <WrapperButton>
    <ButtonStyle type="button" onClick={onClickRender}>
      Load more
    </ButtonStyle>
  </WrapperButton>
);

export default Button;
