import React from "react";
import { Link } from "react-router";
import Layout from "./Layout";
import Head from "react-helmet";
import ReactPlayer from "react-player";
import { css } from "glamor";

import Tours from "./Tours";

const container = css({
  label: "container",
  display: "grid",
  gridTemplateAreas: '"a b c" "d e c" "d . f"',
  gridGap: "15px 15px",
  margin: "0 100px",
  backgroundColor: "rgba(58, 50, 50, 0.1)",
  "@media(max-width: 768px)": {
    margin: "0 10px",
    gridTemplateAreas: '"a" "b" "c" "d" "e" "f"',
    gridTemplateColumns: '100%',
  },
  gridTemplateColumns: '25% 50% 25%',
});

const gridA = css({
  gridArea : 'a',
  justifySelf: 'center'
})

const gridB = css({
  gridArea : 'b',
})

const gridC = css({
  gridArea : 'c',
})

const gridD = css({
  gridArea : 'd',
  overflow: 'hidden'
})

const gridE = css({
  gridArea : 'e',
})

const gridF = css({
  gridArea : 'f',
})

const image = css({
  maxWidth: "10vw"
});

const videoWrapper = css({
  position: "relative",
  minHeight: '33vh'
});

const video = css({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%"
});

const content = css({
  border: '1px solid red',
  padding: "20px",
  minHeight: "20vh",
});

const soundCloud = "https://soundcloud.com/acadians/1-thousand-years-memory";

const Home = ({ isLoading, home, tours }) => (
  <Layout>
    <h1>Acadians</h1>
    {isLoading && "Loading..."}
    {!isLoading && (
      <div>
        {home &&
          home.node &&
          home.node.list &&
          home.node.list.map(data => (
            <div key={data.title}>
              <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.description} />
              </Head>
              <div {...container}>
                <div className="1" {...content} {...gridA}>
                    <img {...image} src={data.logo} />
                </div>
                <div className="2" {...content} {...gridD}>
                  <ReactPlayer url={soundCloud} playsinline={true}   width="auto"
                          height="auto"/>
                     <ReactPlayer url={soundCloud} playsinline={true}   width="auto"
                          height="auto"/>
                          <ReactPlayer url={soundCloud} playsinline={true}   width="auto"
                          height="auto"/>
                          <ReactPlayer url={soundCloud} playsinline={true}   width="auto"
                          height="auto"/>
                          <ReactPlayer url={soundCloud} playsinline={true}   width="auto"
                          height="auto"/>
                </div>
                <div className="3" {...content} {...gridB}>
                  3
                </div>
                <div className="4" {...content} {...videoWrapper} {...gridE}>
                      <ReactPlayer
                          width="100%"
                          height="100%"
                          className={video}                         
                          url={data.video}
                        />
                </div>
                <div className="5" {...content} {...gridC}>
                  <Tours tours={tours} />
                </div>
                <div className="6" {...content} {...gridF}>
                  6
                </div>
              </div>
            </div>
          ))}
      </div>
    )}
  </Layout>
);

export default Home;
