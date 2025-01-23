import Chart from "react-apexcharts";
import PropTypes from 'prop-types';

const LineChart = (props) => {
  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="line"
      width="100%"
      height="100%"
      series={series}
    />
  );
};
LineChart.propTypes = {
  series: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};

export default LineChart;