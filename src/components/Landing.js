import React, { Component } from 'react';
import styled from 'styled-components';

import PageWrapper from './ui/PageWrapper';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ProductList from './product/ProductList';

const Hero = styled.div`
  height: 300px;
  background: #aaa;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -40px -40px 60px;
`;

class Landing extends Component {
  
  render() {
    const { config } = this.props;
    return (
      <PageWrapper>
        <Paper style={{ padding: "40px" }}>
          <Hero>
            <div style={{ display: "inline-block", maxWidth: "80%"}}>
              <p>NO sneak peeks for you tony!</p>
            </div>
          </Hero>
          <Divider style={{ margin: "40px 0" }}/>
          <ProductList config={config} />
        </Paper>
      </PageWrapper>
    );
  }
};
export default Landing;