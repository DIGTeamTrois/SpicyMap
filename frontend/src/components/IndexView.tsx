import { Box, HStack, Button } from "@yamada-ui/react";
import { HereMap } from "../mapFeatures/HereMap.tsx";
import { ShopMenuView } from "./ShopMenuView.tsx";
import { AddMenu } from "./AddMenu.tsx";
import {AddShop} from "./AddShop.tsx";
import {useNavigate} from "react-router-dom";
import useUser from "./helpers/useUser.ts";

export default function IndexView() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleLogout = async () => {
        await fetch('/logout');
    }
    const {user} = useUser();
  return (
    <>
      <h1>HERE Map</h1>
        {user ?
            (<>
                <p>{user}</p>
                <Button onClick={handleLogout}>Logout</Button>
            </>)
            : (<Button onClick={handleLogin}>Login</Button>)
        }
      <HStack>
        <HereMap />
        <Box>
          <ShopMenuView />
          <AddMenu />
        </Box>
      </HStack>
      <AddShop />
    </>
  );
}
