import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";


import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Agencia VP"
        color="Black"
        changeColorOnScroll={{
          height: 400,
          color: "Black"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/nextjs_header.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Consultoria de Marketing Online.</h1>
                <h3 className={classes.subtitle}>
                  
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}></h1>
              </div>
            </GridItem>
          </GridContainer>

      <div className={classNames(classes.main, classes.mainRaised)}>

        <SectionTypography />

        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              
            </a>
          </Link>
        </GridItem>
      </div>
      
    </div>
  );
}
