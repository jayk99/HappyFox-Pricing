import Nav from "./sections/Nav"
import Header from "./sections/Header"
import Banner from "./sections/Banner"
import FAQBox from "./sections/FAQBox"
import Products from "./sections/Products"
import PricingComp from "./sections/PricingComp"
import PlanTitles from "./sections/PlanTitles"
import PlanBar from "./sections/PlanBar"
import Discount from "./sections/Discount"
import Compare from "./sections/Compare"

export default function App() {
  return (
   <main>
    <Nav/>
    <Header />
    <Banner/>
    <PlanBar/>
    <Discount/>
    <Compare/>
    <PlanTitles/>
    <PricingComp/>
    <FAQBox/>
    <Products/>
   </main>
  )
}

