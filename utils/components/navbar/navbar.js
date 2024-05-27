// "use client";
// import "./navbar.css";
// import {
//   Home,
//   OndemandVideo,
//   People,
//   SmartButton,
//   Storefront,
// } from "@mui/icons-material";
// import { Tab, Tabs, colors } from "@mui/material";
// import FacebookIcon from "../icons/facebookicon";
// import Searchicon from "../icons/searchicon";
// import { AiTwotoneBell } from "react-icons/ai";
// import { AiTwotoneMessage } from "react-icons/ai";
// import { TbGridDots } from "react-icons/tb";
// import { BsArrowDownCircleFill } from "react-icons/bs";
// import { useState } from "react";

// export default function Navbar() {
//   const [value, setValue] = useState("one");
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <nav className="nav-container">
//       <div className="nav-left row">
//         <FacebookIcon />
//         <div className="containe-search search-input row center">
//           <Searchicon />
//           <input type="text" name="search" placeholder="Search Facebook" />
//         </div>
//       </div>
//       <div className="middel-nav center">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           textColor="primary"
//           indicatorColor="primary"
//           aria-label="secondary tabs example"
//         >
//           <Tab
//             indicatorColor="white"
//             icon={<Home style={{ color: "white" }} />}
//           />
//           <Tab icon={<OndemandVideo style={{ color: "white" }} />} />
//           <Tab icon={<Storefront style={{ color: "white" }} />} />
//           <Tab icon={<People style={{ color: "white" }} />} />
//           <Tab icon={<SmartButton style={{ color: "white" }} />} />
//         </Tabs>
//       </div>

//       <div className="container-right">
//         <button className="icon-button">
//           <TbGridDots /> {/* No need to specify size here */}
//         </button>
//         <button className="icon-button">
//           <AiTwotoneMessage />
//         </button>
//         <button className="icon-button">
//           <AiTwotoneBell />
//         </button>
//         <button className="profile-button">
//           <img
//             src="/125371365_692859425274779_4351217660566881911_n.jpg"
//             alt="Profile"
//           />
//           <div className="profile-overlay">
//             <BsArrowDownCircleFill />
//           </div>
//         </button>
//       </div>
//     </nav>
//   );
// }
"use client";
import "./navbar.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
// <<<<<<< HEAD
import Link from "next/link";
// =======
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import { BsArrowDownCircleFill } from "react-icons/bs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Home,
  OndemandVideo,
  People,
  SmartButton,
  Storefront,
} from "@mui/icons-material";
import { useState } from "react";
// >>>>>>> d484a8f2207ca0a0af60d0d1194e6f2bee0e37d1

export default function Navbar() {
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="nav-container">
      <div className="nav-left row center">
        <FacebookSharpIcon color="primary" sx={{ fontSize: 60 }} />
        <div className="search equal-beetween">
          <SearchRoundedIcon />
          <input type="text" name="search" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="middle-nav row">
{/* <<<<<<< HEAD */}
        <Link href="/home">
        <HomeRoundedIcon sx={{ fontSize: 40 }} />
        </Link>
        
        <GroupOutlinedIcon sx={{ fontSize: 40 }} />

        <Link href="/stor">
        <StoreRoundedIcon sx={{ fontSize: 40 }} />
        </Link>
        
{/* ======= */}
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab
            icon={
              <HomeRoundedIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
          <Link href="/profile">
          <Tab
            icon={
              <GroupOutlinedIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              
              />
            }
          />
          </Link>
          <Tab
            icon={
              <SubscriptionsTwoToneIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
          <Tab
            icon={
              <StoreRoundedIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
          <Tab
            icon={
              <SportsEsportsTwoToneIcon
                style={{ color: "black" }}
                sx={{ fontSize: 40 }}
              />
            }
          />
        </Tabs>
{/* >>>>>>> d484a8f2207ca0a0af60d0d1194e6f2bee0e37d1 */}
      </div>
      <div className="nav-right row">
        <WidgetsRoundedIcon sx={{ fontSize: 40 }} />
        <MessageTwoToneIcon sx={{ fontSize: 40 }} />
        <CircleNotificationsRoundedIcon sx={{ fontSize: 40 }} />
        <button className="profile-button">
          <img
            src="/125371365_692859425274779_4351217660566881911_n.jpg"
            alt="Profile"
          />
          <div className="profile-overlay">
            <BsArrowDownCircleFill />
          </div>
        </button>
      </div>
    </div>
  );
}
