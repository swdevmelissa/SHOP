import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductSection from '../components/homeComponents/ProductSection';
import GetInTouchForm from "../components/homeComponents/GetInTouchForm";

const HomeScreen = () => {
    return (
      <div>
        <Header />
        <ProductSection />
        <GetInTouchForm />
        <Footer />
      </div>
    )
}

export default HomeScreen;