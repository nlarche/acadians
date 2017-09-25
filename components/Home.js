import React from "react";
import { Link } from "react-router";
import Layout from "./Layout";
import Head from "react-helmet";
import ReactPlayer from "react-player";
import { css } from "glamor";

import Tours from "./Tours";
import Playlist from "./Playlist";

const container = css({
  label: "container",
  display: "grid",
  gridTemplateAreas: '"a e c" "d b c" "d . f"',
  gridGap: "15px 15px",
  margin: "0 100px",
  backgroundColor: "rgba(58, 50, 50, 0.1)",
  "@media(max-width: 768px)": {
    margin: "0 10px",
    gridTemplateAreas: '"a" "e" "b" "c" "d" "f"',
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
})

const gridE = css({
  gridArea : 'e',
})

const gridF = css({
  gridArea : 'f',
})

const image = css({
  maxWidth: "10vw",
  "@media(max-width: 768px)": {
    maxWidth: "50vw",
  },
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
  // border: '1px solid red',
  padding: "20px",
  minHeight: "20vh",
});

const title = css({  
  display: 'flex',
  flexDirection : 'column',
  justifyContent: 'start',
  alignItems : 'center',
  color: '#fff',
  fontWeight: 500,  
  paddingTop : '1em'
});

const titleh2 = css({  
  fontSize: '40px',
  "@media(max-width: 768px)": {
    fontSize: '20px',
  },
   color: '#fff',
});


const Home = ({ isLoading, home, tours, playlist }) => (
  <Layout>
    <div {...title}>
      <img src='/assets/acadians.png' />
      <h2 {...titleh2} >Thousand Years Memory</h2>
    </div>
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
                    <h2 {...titleh2} >Nouvel album</h2>
                </div>
                <div className="2" {...content} {...gridD}>
                  <Playlist playlist={playlist} />                    
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
