import Product from "./Product";
import table from "../images/image 1.png";
import chair from "../images/image 2.png";
import sofa from "../images/image 3.png";
import fan from "../images/image 4.png";
import mug from "../images/image 6.png";
import bed from "../images/image 7.png";
import flowers from "../images/image 8.png";
import lamp from "../images/image 9.png";

const Products = () => {
  return (
    <article className="grid grid-cols-4 gap-5">
      <Product
        image={table}
        primaryText="Sylterine"
        desc="Stylish café chair"
        price="2,500,500"
        discount="30"
        discountPrice="3,500,000"
      />
      <Product
        image={chair}
        primaryText="Leviosa"
        desc="Stylish café chair"
        price="2,500,500"
      />
      <Product
        image={sofa}
        primaryText="Lolito"
        desc="Stylish café chair"
        price="2,500,500"
        discount="50"
        discountPrice="14,000,000"
      />
      <Product
        image={fan}
        primaryText="Respira"
        desc="Stylish café chair"
        price="2,500,500"
        newproduct="New"
      />
      <Product
        image={lamp}
        primaryText="Griffo"
        desc="Stylish café chair"
        price="2,500,500"
      />
      <Product
        image={mug}
        primaryText="Muggo"
        desc="Stylish café chair"
        price="2,500,500"
        newproduct="New"
      />
      <Product
        image={bed}
        primaryText="Pingky"
        desc="Stylish café chair"
        price="2,500,500"
        discount="50"
        discountPrice="14,000,000"
      />
      <Product
        image={flowers}
        newproduct="New"
        primaryText="Potty"
        desc="Stylish café chair"
        price="2,500,500"
      />
    </article>
  );
};

export default Products;
