import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Tenha seu primeiro plano de forma gratuita</h2>
          <h4 className={classes.description}>
            O Objetivo de nosso trabalho consiste em levar para sua empresa o resultado que almeja. 
            Preecha os campos para conhecer melhor o seu business e para agendar 30 minutos conosco.
            Te esperamos!

          </h4>
          <Button
          justify="center"
                color="danger"
                size="lg"
                href="https://zz3y1f433nw.typeform.com/to/FAwifoY1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
               Quero Agendar!
              </Button>

        </GridItem>
      </GridContainer>
    </div>
  );
}
