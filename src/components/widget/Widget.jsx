import Card from "../card/index";
import PropTypes from 'prop-types';

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 ">
          <span className="flex items-center text-bluePrimary  ">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-10 ml-4 flex w-auto flex-col justify-center">
        <p className="font-sm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};
Widget.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Widget;
