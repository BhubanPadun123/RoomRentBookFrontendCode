import React from "react";
import DrawerModel from "components/Popover";
import { Button, Img, List, Text } from "components";
import { Box, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"
import Dropdown from "pages/Dropdown";
import { useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type LandingPageHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const LandingPageHeader: React.FC<LandingPageHeaderProps> = (props) => {
  const router = useNavigate()
  const [state, setState] = React.useState({
    openSearch: false,
    HomeMenu: [
      { label: "Home", value: "" },
      { label: "About", value: "aboutus" },
      { label: "Agent List", value: "agentlist" },
      { label: "Property List", value: "listing" },
      { label: "Recent Post", value: "blogpage" },
      { label: "Privacy Policy", value: "privacypolicy" },
      { label: "License", value: "license" }
    ],
    dropdownLocation: {
      axisX: null,
      axisY: null
    },
    homeClick: false,
    anchorEl: null,
    openDrawer: false,
    openMenu: false
  })
  const handleItemClick = (e: any) => {
    setState((prevState: any) => ({
      ...prevState,
      homeClick: false,
      anchorEl: null
    }))
  }
  const handleDrawer = () => {
    setState((prevState) => ({
      ...prevState,
      openDrawer: !state.openDrawer
    }))
  }
  type position = 'top' | 'bottom' | 'left' | 'right'
  const toggleDrawer =
    (anchor: position, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, openMenu: open });
      };
  const MenuList = (position: position) => {
    return (
      <Box
        sx={{ width: position === 'left' || position === 'right' ? 250 : 'auto' }}
        role={"presentation"}
        onClick={toggleDrawer("right", false)}
        onKeyDown={toggleDrawer('left', false)}
      >
        <List>
          <div style={{
            width:"100%",
            height:"30%",
            textAlign:"center"
          }}
          onClick={()=> router("/profile")}
          >
            <IconButton>
              <AccountCircleIcon sx={{color:"red"}} />
            </IconButton>
            <Typography>Bhuban Padun</Typography>
          </div>
          <Divider />
          {
            state.HomeMenu.map((item, idx) => {
              return (
                <ListItem disablePadding>
                  <ListItemButton key={idx} onClick={()=> router(`/${item.value}`)}>
                    <ListItemIcon>
                      <Typography variant="h6">{item.label}</Typography>
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              )
            })
          }
        </List>
      </Box>
    )
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
                     
            
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[340px]">
            <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full"
              onClick={() => router("/roomRegister")}
            >
              Post
            </Button>
            <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full"
              onClick={() => handleDrawer()}
            >
              Log in
            </Button>
            <IconButton onClick={() => { setState({ ...state, openMenu: true }) }}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <DrawerModel
          open={state.openDrawer}
          onClose={handleDrawer}
          anchor={"left"}
        />
        <Drawer
          anchor='right'
          open={state.openMenu}
          onClose={toggleDrawer("right", false)}
        >
          {
            MenuList("right")
          }
        </Drawer>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
