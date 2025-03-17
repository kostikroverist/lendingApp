import { FaCheckCircle } from "react-icons/fa";

const BenefitItem = ({ text }) => {
  return (
    <div className="flex items-center mb-3">
      <FaCheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={20} fill="#febb1b"/>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};
export default BenefitItem;
