import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <h2>A partir de agora permita-se crescer</h2>
          </div>
          <GridContainer>
            <div className={classes.typo}>
              <h1>Estamos focados no seu resultado</h1>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}></div>
              <p>
              Estruturamos seu business de forma completa para o online, oferecendo insights por meio de mentoria para que sua empresa tenha melhores resultadosor, e ainda montamos planos 100% personalizados e eficazes para o seu business online.
              </p>
            </div>
            <div className={classes.typo}>
              <div className={classes.note}></div>
              <Quote
                text="O ser insano consiste em fazer as mems"
                author=" Kanye West, Musician"
              />
            </div>
            
            
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
