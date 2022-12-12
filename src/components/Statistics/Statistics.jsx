import PropTypes from 'prop-types';

import getRandomColor from '../../utils/getRandomColor';
import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styles';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(fileInfo => {
          return (
            <Item
              style={{ backgroundColor: getRandomColor() }}
              key={fileInfo.id}
            >
              <Label>{fileInfo.label}</Label>
              <Percentage>{fileInfo.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
