import styled from 'styled-components';

export const UserProfile = styled.div`
  min-width: 300px;
  width: fit-content;
  margin: auto;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.text};
  box-shadow: 0px 0px 17px -1px ${p => p.theme.colors.primary};
  border-radius: 7px;
`;

export const Description = styled.div`
  min-width: 100%;
  max-width: 500px;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: ${p => p.theme.colors.background};
`;

export const Avatar = styled.img`
  margin-bottom: ${p => p.theme.space[4]}px;
  display: block;
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.cursiveZen};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.cursiveBelle};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;
export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-family: ${p => p.theme.fonts.cursiveDan};
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  min-height: 80px;
  background-color: ${p => p.theme.colors.highlight};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border: 1px solid ${p => p.theme.colors.secondary}; ;
`;
export const StatsItem = styled.li`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.secondary};
  }
`;
export const Label = styled.span`
  margin-bottom: 8px;
  font-family: 'Zen Dots', cursive;
  font-size: 15px;
`;
export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
