import NavigationBar from '../components/layout/NavigationBar'
import TopVendors from '../components/landing/TopVendors'
import Footer from '../components/layout/Footer'


// Customers can navigate to this page from the landing page. It contains the vendors available in the app. 
// We can use geo-tagging to help users find vendors near them. Such that is they search, the results comes automatically filtered by location 

function VendorsPage() {
  return (
    <>
        <NavigationBar />
        <TopVendors />
        <Footer />
    </>
  )
}

export default VendorsPage