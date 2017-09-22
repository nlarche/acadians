import React from "react";
import { Link } from "react-router";
import Layout from "./Layout";
import Head from "react-helmet";
import ReactPlayer from "react-player";
import { css } from "glamor";

const container = css({
  label: "container",
  display: "grid",
  gridTemplateAreas: '"a b b c" "d e e c" "d f f f"',
  gridGap: "15px 15px",
  border: "1px solid red",
  margin: "0 100px",
  "@media(max-width: 768px)": {
    margin: "0 10px",
    gridTemplateAreas: '"a" "b" "c" "d" "e" "f"',
  }
});

const gridA = css({
  gridArea : 'a',
})

const gridB = css({
  gridArea : 'b'
})

const gridC = css({
  gridArea : 'c'
})

const gridD = css({
  gridArea : 'd'
})

const gridE = css({
  gridArea : 'e',
})

const gridF = css({
  gridArea : 'f'
})

const image = css({
  maxWidth: "10vw"
});

const videoWrapper = css({
  position: "relative",
});

const video = css({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%"
});

const content = css({
  color: "#fff",
  backgroundColor: "#cccccc",
  padding: "20px",
  fontSize: "calc(1vw + 1em)",
  minHeight: "20vh",
});

const Home = ({ isLoading, home }) => (
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
                  2
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
                  5
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
