import { BiSupport, BiBadgeCheck } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineTrophy } from "react-icons/ai";

const Info = () => {
  return (
    <div className="grid grid-cols-4">
      <section className="flex items-center">
        <AiOutlineTrophy className="text-4xl" />
        <div>
          <h1>High Quality</h1>
          <p>Crafted from top materials</p>
        </div>
      </section>
      <section className="flex items-center">
        <BiBadgeCheck className="text-4xl" />
        <div>
          <h1>Warranty Protection</h1>
          <p>Over 2 years</p>
        </div>
      </section>
      <section className="flex items-center">
        <MdOutlineLocalShipping className="text-4xl" />
        <div>
          <h1>Free shipping</h1>
          <p>Order over 150 $</p>
        </div>
      </section>
      <section className="flex items-center">
        <BiSupport className="text-4xl" />
        <div>
          <h1>24/7 Support</h1>
          <p>Dedicated support</p>
        </div>
      </section>
    </div>
  );
};

export default Info;
