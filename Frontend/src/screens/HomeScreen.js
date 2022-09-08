import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductSection from '../components/homeComponents/ProductSection';
import GetInTouchForm from "../components/homeComponents/GetInTouchForm";
import ContactInfo from "../components/homeComponents/ContactInfo";

const HomeScreen = () => {
    return (
      <div>
        <Header />
        <ProductSection />
        <GetInTouchForm />
        <ContactInfo />
        <Footer />
      </div>
    )
}

export default HomeScreen;