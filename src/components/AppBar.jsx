import { FaMedal } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

export default function AppBar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-center">
      <div className="flex justify-between ">
        <div className="flex space-x-4">
          <div className="flex space-x-4 items-center">
            <FaMedal size={26} fill="#febb1b" />
            <p>
              <strong>Новинка</strong> <br /> 2025 року
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <FaCreditCard size={26} fill="#febb1b" />
            <p>
              <strong>Оплата</strong> <br />
              після перевірки
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <FaTruck size={26} fill="#febb1b" />
            <p>
              <strong>Швидка</strong> <br /> доствка
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
