import VendorsBashboardNavbar from '../components/vendors dashboard/VendorsDashboardNavbar'
import Aside from '../components/vendors dashboard/Aside'
import Clicks from '../components/vendors dashboard/Clicks'
import CustomerRatings from '../components/vendors dashboard/CustomerRatings'
import FilterPeriod from '../components/vendors dashboard/FilterPeriod'
import Income from '../components/vendors dashboard/Income'
import PopularFoods from '../components/vendors dashboard/PopularFoods'
import TopCustomer from '../components/vendors dashboard/TopCustomers'
import TopReviews from '../components/vendors dashboard/TopReviews'
import VendorName from '../components/vendors dashboard/VendorName'
import CustomersReports from '../components/vendors dashboard/CustomersReports'
import TotalVisits from '../components/vendors dashboard/TotalVisits'

// This is the landingpage for Vendors. As soon as they login/signup, the will be routed to this page
// This dashboard contains business tools that help them keep track of all their operations.
// They can also navigate to various pages through the aside. 

function VendorDashboard() {
  return (
    <>
        <VendorsBashboardNavbar />
        <Aside />
        <Clicks />
        <CustomerRatings />
        <FilterPeriod />
        <Income />
        <CustomersReports />
        <PopularFoods />
        <TopCustomer />
        <TopReviews />
        <TotalVisits />
        <VendorName />
    </>
  )
}

export default VendorDashboard