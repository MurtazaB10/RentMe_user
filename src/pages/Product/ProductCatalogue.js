import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./ProductCatalogue.css";
import axios from "axios";
import Snackbar from "../../components/Alert/SnackBar";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import CottageIcon from "@mui/icons-material/Cottage";
import { Link } from "react-router-dom";
import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

const Productview = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState();
  const [userData, setUserData] = useState();
  const [trigger, setTrigger] = useState(true);
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  async function fetchData() {
    try {
      const res = await axios.post(`/product`);
      const res1 = await axios.post("/user/updateuser");
      setUserData(res1.data.data);
      console.log(res);
      setData(res.data.data);
      setSearchData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  function search(s) {
    const res = data.filter((val) => {
      if (val.categoryy.toLowerCase().includes(s.toLowerCase())) return true;
      else return false;
    });
    setSearchData(res);
  }

  async function addCart(id) {
    try {
      const res = await axios.post("/user/addtocart", {
        productId: id,
      });
      console.log(res);
      setTrigger(!trigger);
      setConfirmationSnackbarMessage("Product added to cart successfully!");
      setConfirmationSnackbarOpen(true);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
      }
      console.error(error);
    }
  }

  const logoutClick = async (e) => {
    e.preventDefault();
    await axios.post("/logout");
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-1">
            <ProSidebar collapsed={menuCollapse}>
              <SidebarHeader>
                <div className="logotext">
                  {/* Icon change using menucollapse state */}
                  <p>
                    {menuCollapse ? <GiAbstract050 /> : <SiApacheairflow />}
                  </p>
                </div>
                <div className="closemenu" onClick={menuIconClick}>
                  {/* changing menu collapse icon on click */}
                  {menuCollapse ? (
                    <FiArrowRightCircle />
                  ) : (
                    <FiArrowLeftCircle />
                  )}
                </div>
              </SidebarHeader>
              <SidebarContent>
                <Menu iconShape="square">
                  <MenuItem
                    icon={<ElectricBoltOutlinedIcon />}
                    onClick={() => search("Electronics")}
                  >
                    Electronics
                  </MenuItem>
                  <MenuItem
                    icon={<CottageIcon />}
                    onClick={() => search("Home Appliances")}
                  >
                    Home Appliances
                  </MenuItem>
                  <MenuItem
                    icon={<ChairOutlinedIcon />}
                    onClick={() => search("Furnitures")}
                  >
                    Furniture
                  </MenuItem>
                  <MenuItem
                    icon={<FitnessCenterOutlinedIcon />}
                    onClick={() => search("Fitness")}
                  >
                    Fitness
                  </MenuItem>
                  {/* <SubMenu title="Components" icon={<DiamondIcon />}>
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu> */}
                </Menu>
              </SidebarContent>
              <SidebarFooter>
                <Menu iconShape="square">
                  <MenuItem onClick={logoutClick} icon={<FiLogOut />}>
                    Logout
                  </MenuItem>
                </Menu>
              </SidebarFooter>
            </ProSidebar>
          </div>
          <div className="col-md-9 col-11">
            <div className="container-fluid">
              <div className="row gy-4 py-5">
                {userData &&
                userData.email.isVer &&
                userData.phonenumber.isVer ? (
                  searchData &&
                  searchData.map((val, ind) => {
                    return (
                      <div className="col-md-4 col-sm-6 col-12" key={ind}>
                        <div class="card" style={{ width: "18rem" }}>
                          <Link
                            to={`/${val._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <img
                              src={val.image[0].url}
                              class="card-img-top"
                              alt="..."
                            />
                          </Link>
                          <div class="card-body">
                            <Link
                              to={`/${val._id}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <h5 class="card-title">{val.name}</h5>
                              <p class="card-text">{val.description}</p>
                              <p class="card-text mb-2">
                                <b>Price: ₹ {val.rentalprice}</b>
                              </p>
                            </Link>
                            <a
                              class="btn button-blue"
                              onClick={() => addCart(val._id)}
                            >
                              Add to Cart
                            </a>
                            <a
                              href="/cart"
                              class="btn button-blue mx-4"
                              onClick={() => addCart(val._id)}
                            >
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1>Please verify your phone number, email and document</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </>
  );
};

export default Productview;
