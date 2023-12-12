import React from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography
} from "@mui/material";
import i18n from "@/i18n";
import {PageTitle} from "@/components/pageTitle";
import {Card} from "@/components/card";
import {Bg, ContentContainer, P} from "@/pages/login/styles";
import {green2, white} from "@/theme";

const login = () => {
  return (
    <Grid container flex justifyContent="center" alignItems="center">
      <Grid item xl={6} md={6} xs={12} sm={12}>
        <Card>
          <PageTitle component="h1" fontSize={32}>
            {i18n.t('login')}
          </PageTitle>
          <Link href="/signup">{i18n.t('dont_have_an_account_signup')}</Link>
          <FormControl fullWidth>
            <TextField
              id="email"
              type="email"
              fullWidth
              label={i18n.t('email')}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="password"
              type="password"
              fullWidth
              label={i18n.t('password')}
            />
          </FormControl>
          <Button variant="contained" fullWidth>
            {i18n.t('submit')}
          </Button>
          <Link>{i18n.t('reset_password')}</Link>
        </Card>
      </Grid>
      <Grid item xl={6} md={6} xs={12} sm={12}>
        <Bg container justifyContent="center" alignItems="center" flex="column">
          <ContentContainer>
            <Grid item xl={12} md={12} xs={12} sm={12}>
              <Typography component="h2" textAlign="center" color={white} fontSize={25}>
                {i18n.t('welcome')}
              </Typography>
              <P>
                {i18n.t('welcome_text')}
              </P>
            </Grid>
            <Grid item xl={12} md={12} xs={12} sm={12}>
              <Typography component="h2" textAlign="center" color={white} fontSize={25}>
                {i18n.t('easy_signup')}
              </Typography>
              <P>
                {i18n.t('personal_account')}
              </P>
              <P component="p" textAlign="center">
                {i18n.t('enjoy')}
              </P>
            </Grid>
            <Grid>
              <Typography component="h2" textAlign="center" color={white} fontSize={25}>
                {i18n.t('dashboard')}
              </Typography>
              <P component="p" textAlign="center">
                {i18n.t('step_into')}
              </P>
              <P component="p" textAlign="center">
                {i18n.t('find_everything')}
              </P>
              <P component="p" textAlign="center">
                {i18n.t('navigate')}
              </P>
            </Grid>
          </ContentContainer>
        </Bg>
      </Grid>
    </Grid>
  )
};

export default login;
