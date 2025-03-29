import { Box, Button, Heading, Icon, Image } from "@chakra-ui/react";
import React from "react";

import style from "./LoginPage.module.css";
import { TiTick } from "react-icons/ti";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className={style.loginPageDivs}>
        <Box className={style.loginPageBoxForm}>
          <LoginForm />
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
