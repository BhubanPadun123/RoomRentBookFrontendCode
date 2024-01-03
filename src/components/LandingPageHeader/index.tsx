import React from "react";
import DrawerModel from "components/Popover";
import { Button, Img, List, Text } from "components";
import { IconButton } from "@mui/material"
import Dropdown from "pages/Dropdown";

type LandingPageHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const LandingPageHeader: React.FC<LandingPageHeaderProps> = (props) => {
  const [state,setState] = React.useState({
    openSearch:false,
    HomeMenu: [
      {label:"About",value:"aboutus"},
      {label:"Agent List",value:"agentlist"},
      {label:"Property List",value:"listing"},
      {label:"Recent Post",value:"blogpage"},
      {label:"Privacy Policy",value:"privacypolicy"},
      {label:"License",value:"license"}
    ],
    dropdownLocation:{
      axisX: null,
      axisY : null
    },
    homeClick : false,
    anchorEl : null,
    openDrawer : false
  })
  const handleItemClick =(e:any)=>{
    setState((prevState:any) => ({
      ...prevState,
      homeClick: false,
      anchorEl : null
    }))
  }
  const handleDrawer = ()=> {
    setState((prevState) => ({
      ...prevState,
      openDrawer: !state.openDrawer
    }))
  }
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img className="h-10 w-10" src="images/img_home.svg" alt="home" />
              <IconButton>
                <Text
                  className="text-orange-A700 text-xl w-auto"
                  size="txtMarkoOneRegular20"
                >
                  Bhuban Padun New Project
                </Text>
              </IconButton>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <List
              className="sm:flex-col flex-row gap-10 grid grid-cols-3"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <IconButton sx={{ display: "flex", gap: "2px" }}
                   onClick={(e: any)=> {
                    const {clientX,clientY} = e                    
                    setState((prevState: any) => ({
                      ...prevState,
                      homeClick: !state.homeClick,
                      dropdownLocation:{
                        axisX: clientX,
                        axisY: clientY + 100
                      },
                      anchorEl: e.currentTarget
                    }))
                   }}
                >
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    Home
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_gray_600.svg"
                    alt="arrowdown"
                  />
                </IconButton>
                {
                  state.homeClick &&
                  <Dropdown 
                    options={state.HomeMenu} 
                    onChange={handleItemClick} 
                    axisX={state.dropdownLocation.axisX} 
                    axisY={state.dropdownLocation.axisY} 
                    isOpen = {state.homeClick}
                    anchorEl = {state.anchorEl}
                  />
                }
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <IconButton sx={{ display: "flex", gap: "2px" }}>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    Listing
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_gray_600.svg"
                    alt="arrowdown"
                  />
                </IconButton>
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <IconButton sx={{ display: "flex", gap: '2px' }}>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    Agents
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown_gray_600.svg"
                    alt="arrowdown"
                  />
                </IconButton>
              </div>
            </List>
            <IconButton>
              <Text
                className="text-base text-center text-gray-900 w-auto"
                size="txtManropeSemiBold16"
              >
                Property{" "}
              </Text>
            </IconButton>
            <IconButton>
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtManropeSemiBold16"
              >
                Blog
              </Text>
            </IconButton>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            <Button
              className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]"
              leftIcon={
                <IconButton>
                  <Img
                    className="h-6 mb-px mr-2"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </IconButton>
              }
            >
              <div className="font-bold font-manrope text-gray-900 text-left text-lg">
                Search
              </div>
            </Button>
            <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full"
              onClick={()=>handleDrawer()}
            >
              Log in
            </Button>
          </div>
        </div>
        <DrawerModel 
           open = {state.openDrawer}
           onClose={handleDrawer}
           anchor={"left"}
        />
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
