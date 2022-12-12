import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: auto;
  width: fit-content;
`;
export const Title = styled.h2`
  padding: 20px 0;
  background-color: ${p => p.theme.colors.background};
  font-size: ${p => p.theme.fontSizes[5]}px;
  text-align: center;
  font-family: ${p => p.theme.fonts.cursiveBelle};
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Item = styled.li`
  width: 75px;
  height: 75px;
  font-family: ${p => p.theme.fonts.heading};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 2px;
  text-align: center;
  color: ${p => p.theme.colors.background};
`;
export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes[1]}px;
`;
export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes[2]}px;
`;
