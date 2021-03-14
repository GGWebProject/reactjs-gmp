import React from "react";
import "./App.scss";
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import Main from '../../layout/Main/Main';
import Modal from '../../components/Modal/Modal';

const baseClassName = 'app';

const App = () => (
  <section className={baseClassName}>
    <Header className={`${baseClassName}__header`} />
    <hr className={`${baseClassName}__separator`} />
    <Main className={`${baseClassName}__main`} />
    <Footer className={`${baseClassName}__footer`} />
    <Modal className={`${baseClassName}__modal`} />
  </section>
);

export default App;
