import Navbar from "./components/navbar/navbar";
import Banner from "./components/Banner/banner";
import Promotions from "./components/Promotions/Promotions";
import Products from "./components/Products/Products";
import UniqueJewellerySection from "./components/designer Jewelery/design";
import News from "./components/newsletter/News";
import Footer from "./components/Footer/Footer";


const intro = ()=>{
  {
    return (
      < >
      <Navbar />
      <Banner />
      <Promotions />
      <Products />
      <UniqueJewellerySection />
      <News />
      <Footer />
      </>
    )
}
}

export default intro;