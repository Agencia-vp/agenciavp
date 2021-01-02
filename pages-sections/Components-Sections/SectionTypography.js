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
          <GridContainer>
          <div className={classes.typo}>
              <div className={classes.note}>Quote</div>
              <Quote
                text=" Insanidade é continuar fazendo sempre a mesma coisa e esperar resultados diferentes."
                author=" Albert Einstein"
              />
            </div>  
            <div className={classes.typo}>
              
              <h2>Conheça a Agência VP</h2>
           
            <div className={classes.typo}>
              <div className={classes.note}>Paragraph</div>
              <p>
               Ola somos uma agência.
              </p>
            </div>
            
          </GridContainer>
        </div>
          
        </div>
    </div>
  );
}
