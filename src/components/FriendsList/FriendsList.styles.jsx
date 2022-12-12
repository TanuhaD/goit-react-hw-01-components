import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
`;
