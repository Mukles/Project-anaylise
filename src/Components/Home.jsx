import React from "react";
import UserOpion from "./UserOpoion";

function Home() {
  return (
    <React.Fragment>
      <div className="contianer mx-auto px-3 sm:px-12 flex flex-col-reverse lg:flex-row justify-center items-center h-[100vh-40px]">
        {/* content */}
        <div className="content mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-0">
            {" "}
            Xiaomi MI 4C R4CM 300 Mbps 4 Antenna Router (Global Version)
          </h1>
          <p className="font-medium	text-sm">
            Xiaomi MI 4c Router Transmission Rate 300Mbps With included 4 high
            gain antennas for strong signal, Support for single-band (2.4GHz)
            Wi-Fi 802.11 b/g/n along with 3x3 MIMO technology. Intelligent speed
            limit function for faster performance and network watching function
            for ensuring network security.Smart management function for remote
            control. It has also Qualcomm QC8561 processor. It also had 64MB of
            DDR2 RAM and 16MB of NorFlash storage. It Comes with 3 Month
            Warranty (Must Claim With Box & All Accessories).
          </p>
        </div>
        <img
          className="w-3/4	 block"
          src="https://www.startech.com.bd/image/cache/catalog/router/xiaomi/mi-4c/mi-4c-1-500x500.jpg"
          alt=""
        />
      </div>
      <UserOpion />
    </React.Fragment>
  );
}

export default Home;
