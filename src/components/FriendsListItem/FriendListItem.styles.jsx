import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px 20px;
  min-width: 300px;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${p => p.theme.fonts.cursiveDan};
  font-size: 40px;
  box-shadow: 10px 10px 14px -7px rgba(0, 0, 0, 0.75),
    -5px -5px 4px -3px rgba(0, 0, 0, 0.75);
  background-color: ${p => p.theme.colors.background};
  border-radius: 5px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => (p.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: 48px;
`;
export const Name = styled.p``;
