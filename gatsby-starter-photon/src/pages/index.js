import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';



class Homepage extends React.Component {
    render() {
        const siteTitle = "Joublin";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                

                
            </Layout>
        );
    }
}

export default Homepage;