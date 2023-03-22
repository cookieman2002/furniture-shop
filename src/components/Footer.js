import { IoLocationSharp } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="grid grid-cols-5 gap-1">
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Funiro.</h1>
        <p>
          Worldwide furniture store since 2020. We sell over 1000+ branded
          products on our website
        </p>
        <div className="flex flex-row">
          <IoLocationSharp />
          <a href="https://goo.gl/maps/FBjyU51kyDwMjXSi9">
            Sawojajar Malang, Indonesia
          </a>
        </div>
        <div className="flex flex-row">
          <BsTelephoneFill />
          <a href="tel:+6289 456 3455">+6289 456 3455</a>
        </div>
        <a href="https:www.funiro.com">www.funiro.com</a>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Menu</h1>
        <a href="null">Products</a>
        <a href="null">Rooms</a>
        <a href="null">Insperations</a>
        <a href="null">About us</a>
        <a href="null">Terms & policy</a>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Account</h1>
        <a href="null">My account</a>
        <a href="null">Checkout</a>
        <a href="null">My Cart</a>
        <a href="null">my Catalog</a>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Stay connected</h1>
        <a href="null">Facebook</a>
        <a href="null">Instagram</a>
        <a href="null">Twitter</a>
      </section>
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Stay updated</h1>
        <form action="" className="flex gap-1">
          <input
            type="email"
            name=""
            id=""
            className="bg-gray-200"
            placeholder="Enter your email "
          />
          <input
            type="submit"
            value={<RiSendPlaneFill />}
            className="bg-orange-100"
          />
        </form>
      </section>
    </footer>
  );
};

export default Footer;
