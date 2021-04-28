import React from "react";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
   height: 100vh;
   width: 100vw;
   display: flex;
   justify-content: center;
   align-items: center;
   transform: translate(-10rem, -10rem);
`;

const Loader = () => {
   let color = "#1e212d";
   return <PulseLoader color={color} css={override} size={15} />;
};

export default Loader;
