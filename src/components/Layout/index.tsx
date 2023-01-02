import React from 'react'

// styles
import { Grid } from './styles';

// components
import Header from '../Header';
import Aside from '../Aside';
import Content from '../Content';


const Layout: React.FC = ({ children }) => {
    return(
        <Grid>
            <Header />
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
    )
}

export default Layout;