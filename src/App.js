import React, { Suspense } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { connect, useDispatch, useSelector } from "react-redux";
import { push } from "react-router-redux";
import { getData } from './store/actions/GetDataAction/GetDataAction';

function Page() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.mainTitle')}</h1>
      <h3>{t('home.text')}</h3>
      <p>{t('home.description')}</p>

    </div>
  )
}

function Header() {
  const { i18n } = useTranslation();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <button className="btn" onClick={e => { handleChange('en') }}>EN</button>
      <button className="btn" onClick={e => { handleChange('fr') }}>FR</button>
    </div>
  )
}

function GetUserData() {
  const dispatch = useDispatch();

  return <div>
    <button className="btn" onClick={e => { dispatch(getData()) }}>Get user data</button>
  </div>

}

function App() {

  return (
    <Suspense fallback="Loading ..." >
      <Header />
      <div className="App">
        <Page />
        <GetUserData />
      </div>
    </Suspense>
  );
}

const state = (state, ownProps = {}) => {
  return {
    getDataReducer: state.getDataReducer,
    location: state.location,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    navigateTo: (location) => {
      dispatch(push(location));
    },
  }
};

export default connect(state, mapDispatchToProps)(App)
