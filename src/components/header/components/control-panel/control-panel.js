import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../../components";
import { styled } from "styled-components";

const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  width: 100px;
  height: 32px;
  border: 1px solid black;
  background-color: #b3b3b3;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <RightAlign>
        <StyledLink to="/login">Войти</StyledLink>
      </RightAlign>
      <RightAlign>
        <div onClick={() => navigate(-1)}>
          <Icon id="fa-backward" size="23px" margin="" />
        </div>
        <Link to="/post">
          <Icon id="fa-pencil-square" size="23px" margin="" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" size="23px" margin="" />
        </Link>
      </RightAlign>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
