"use client";

import Navbar from "@/utils/components/navbar/navbar";
import Marketplace from "@/utils/components/marketplace/marketplace";
import Groups from "@/utils/components/groups/groups";
import Login from "@/utils/components/login/login";
import Register from "@/utils/components/register/register";
import AllProducts from "@/utils/components/all_products/all_products";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Marketplace />
      <Groups />
      <Login />
      <Register />
      <AllProducts/>
    </div>
  );
}
