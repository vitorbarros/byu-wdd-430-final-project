import React from "react";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import i18n from "../../i18n";
import {PageTitle} from "@/components/pageTitle";
import {Card} from "@/components/card";
import {FormControl} from "@/pages/signup/styles";
import {Bg, ContentContainer, P} from "@/pages/signup/styles";
import {white} from "@/theme";
import {FormikProvider} from "formik";
import useSignup from "@/hooks/signup";

const Login = () => {
  const {
    formik,
    name,
    email,
    password,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useSignup();

  return (
    <Grid container flex justifyContent="center" alignItems="center">
      <Grid item xl={6} md={6} xs={12} sm={12}>
        <Card>
          <PageTitle component="h1" fontSize={32}>
            {i18n.t('signup')}
          </PageTitle>
          <Link href="/login">{i18n.t('have_an_account_already_signing')}</Link>
          <FormikProvider value={formik}>
            <Grid container>
              <Grid item xl={12} md={12} xs={12} sm={12}>
                <FormControl fullWidth>
                  <TextField
                    id="name"
                    type="text"
                    fullWidth
                    label={i18n.t('name')}
                    value={name}
                    onBlur={handleBlur('name')}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xl={6} md={6} xs={12} sm={12}>
                <FormControl fullWidth>
                  <TextField
                    id="password"
                    type="password"
                    fullWidth
                    label={i18n.t('password')}
                    value={password}
                    onBlur={handleBlur('password')}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xl={6} md={6} xs={12} sm={12}>
                <FormControl fullWidth>
                  <TextField
                    id="email"
                    type="email"
                    fullWidth
                    label={i18n.t('email')}
                    value={email}
                    onBlur={handleBlur('email')}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Button variant="contained" fullWidth onClick={() => handleSubmit()}>
                {i18n.t('submit')}
              </Button>
            </Grid>
          </FormikProvider>
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

export default Login;
