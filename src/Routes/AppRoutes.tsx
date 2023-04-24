import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layouts/Layouts/Layout";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Contacts from "../Pages/Contacts/Contacts";
import Reviews from "../Pages/Reviews/Reviews";
import Sales from "../Pages/Sales/Sales";
import Team from "../Pages/Team/Team";
import Gallery from "../Pages/Gallery/Gallery";
import Articles from "../Pages/Articles/Articles";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articles" element={<Articles />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
