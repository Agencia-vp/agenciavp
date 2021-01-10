import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>O Time:</h2>
      <div>
<GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
Vitor e Pedro                <br />
                <small className={classes.smallTitle}>Gestores de Marketing Digital</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                <br /><br />  Vitor e Pedro atuam nesse mercado por mais de um ano, participamos da comunidade Sobral, conhecida como a melhor comunidade de gestores de marketing digital. Nasceu a partir do desejo de querer empreender e utilizar nossos conhecimentos para alavancar seus resultados no online. Pedro atuava em uma empresa b2b no mercado nacional e Vitor atua no suporte de e-commerce b2b da Imaginarium. Mais de 10 mil reais investidos em marketing, mais de um R$750.000 faturados. Temos como principal objetivo levar o resultado aos nosso clientes, estruturando planos personalizados que funcionem para o seu business.
               Estruturamos seu business de forma completa para o online.
              Oferecendo insights por meio de mentoria para que sua 
              empresa tenha melhores resultados.
              Criamos planos e gerenciamos de forma 100% personalizada
              de forma eficaz atingirmos o seu objetivo. </p>
                <Button 
                color="danger"
                size="lg"
                href="https://prezi.com/p/kedkibpeh0p1/?present=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
Resultados              </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
