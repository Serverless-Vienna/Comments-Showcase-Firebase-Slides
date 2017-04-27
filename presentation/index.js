// Import React
import React from "react";

// code slide
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Appear,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  awsDiagram: require("../assets/comment-showcase-block-diagram-aws.png"),
  onWriteTimeUpper: require("../assets/onWriteTimeUpper.gif"),
  firebaseWebapp: require("../assets/webapp.gif"),
  invocations: require("../assets/invocations.png"),
  restTimestampOnWriteUpper: require("../assets/restTimestamp-onWriteUpper.gif")
};

preloader({ images });

const theme = createTheme({
  primary: "#2d2d2d",
  secondary: "#77aaff",
  tertiary: "#99bbff",
  quartenary: "#CECECE"
}, {
  primary: "Lucida Grande",
  secondary: "Lucida Grande"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={500} theme={theme} bgColor="primary">
        <Slide transition={["fade"]} bgColor="primary" >
          <Heading size={2} fill textFont="primary" textColor="secondary" caps>Comments Showcase</Heading>
          <Heading size={4} fit fill textFont="primary" textColor="tertiary" >with Firebase Functions</Heading>
          <Text margin="30px 0 0" textColor="quartenary" size={5} >
            László Király @l_kiraly
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <BlockQuote>
            <Quote textColor="secondary">It is hard to write even the smallest piece of code correctly.</Quote>
            <Cite textColor="secondary">Joshua Bloch</Cite>
          </BlockQuote>
          <Text size={6} textColor="tertiary">https://research.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html</Text>
        </Slide>
        <Slide transition={["fade", "zoom", "slide"]}>
          <List textFont="secondary" textColor="tertiary">
            <Appear><ListItem>is hard</ListItem></Appear>
            <Appear><ListItem>to make it work</ListItem></Appear>
            <Appear><ListItem>to make it work right</ListItem></Appear>
            <Appear><ListItem>to make it work fast</ListItem></Appear>
            <Appear><ListItem><b>to make it serverless scalable</b></ListItem></Appear>
          </List>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Writing Code</Heading>
        </Slide>
        <Slide transition={["spin", "fade"]} bgColor="white" >
          <Image src={images.firebaseWebapp.replace("/", "")} margin="0px" height="600px" />
          <Heading size={4} textFont="primary" textColor="secondary" caps>The Frontend</Heading>
        </Slide>
        <Slide transition={["spin", "fade"]} bgColor="white" >
          <Image src={images.awsDiagram.replace("/", "")} margin="0px auto 10px" />
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>AWS - Comments Showcase</Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <CodePane source={require("raw-loader!../assets/code/result.ascii")}/>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Firebase - Comments Showcase</Heading>
          {/* <Heading size={4} fit textFont="primary" textColor="secondary" caps>a case for upper</Heading> */}
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/client-firebase.code")}
          ranges={[
             { loc: [0, 11], title: "Client Side" },
             { loc: [0, 6], title: "Client Side" },
             { loc: [1, 2], title: "Client Side" },
             { loc: [3, 5], title: "Client Side" },
             { loc: [7, 10], title: "Client Side" }
          ]}
        />
        <Slide transition={["slide"]}>
          <CodePane source={require("raw-loader!../assets/code/firebase-uppercase.ascii")}/>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>a case for upper</Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/uppercasing.code")}
          ranges={[
             { loc: [0, 11], title: "Uppercasing" },
             { loc: [0, 1], title: "Uppercasing" },
             { loc: [1, 2], title: "Uppercasing" },
             { loc: [2, 3], title: "Uppercasing" },
             { loc: [4, 8], title: "Uppercasing" },
             { loc: [7, 8], title: "Uppercasing", note: "Timeout bug: http://stackoverflow.com/questions/43151022/firebase-cloud-function-onwrite-timeout probably fixed by now" }
          ]}
        />
        <Slide transition={["slide"]}>
          <CodePane source={require("raw-loader!../assets/code/firebase-timestamp.ascii")}/>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>let's add the timestamp</Heading>
        </Slide>
        <CodeSlide transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/timestamp.code")}
          ranges={[
             { loc: [0, 12], title: "Adding Timestamp" },
             { loc: [1, 3], title: "Adding Timestamp" },
             { loc: [4, 9], title: "Adding Timestamp" },
             { loc: [6, 9], title: "Adding Timestamp", note: "Can you spot the problem?" }
          ]}
        />
        <Slide transition={[]} bgColor="white">
          <Heading size={5} textFont="primary" textColor="secondary" caps>infinite loop!</Heading>
          <Image src={images.invocations.replace("/", "")} margin="0px" height="600px"/>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/timestamp-guard.code")}
          ranges={[
             { loc: [6, 13], title: "Adding Guard", note: "No more infinite loop!" }
          ]}
        />
        <Slide transition={[]} bgColor="white">
          <Heading size={5} textFont="primary" textColor="secondary" caps>push in action</Heading>
          <Image src={images.onWriteTimeUpper.replace("/", "")} margin="0px" height="600px"/>
        </Slide>
        <Slide transition={["slide"]}>
          <CodePane lang="java" source={require("raw-loader!../assets/code/firebase-timestamp-uppercase.ascii")}/>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>let's use REST</Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/client-firebase-rest.code")}
          ranges={[
             { loc: [0, 17], title: "Client Side Post" },
             { loc: [2, 4], title: "Client Side Post" },
             { loc: [5, 12], title: "Client Side Post" },
             { loc: [13, 14], title: "Client Side Post" }
          ]}
        />
        <Slide transition={[]} bgColor="white">
          <Heading size={5} textFont="primary" textColor="secondary" caps>REST in action</Heading>
          <Image src={images.restTimestampOnWriteUpper.replace("/", "")} margin="0px" height="600px"/>
        </Slide>
        <Slide transition={["slide"]}>
          <CodePane lang="java" source={require("raw-loader!../assets/code/firebase-uppercase-inbox.ascii")}/>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Or use inbox</Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <CodePane source={require("raw-loader!../assets/code/result.ascii")}/>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Firebase - Comments Showcase</Heading>
          {/* <Heading size={4} fit textFont="primary" textColor="secondary" caps>a case for upper</Heading> */}
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/database-rules.json")}
          ranges={[
             { loc: [0, 8], title: "firebase auth rules" }
          ]}
        />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/client-firebase-auth.code")}
          ranges={[
             { loc: [0, 11], title: "Client Side Auth" },
             { loc: [0, 4], title: "Client Side Auth", note: "https://firebase.google.com/docs/auth/web/google-signin#advanced-handle-the-sign-in-flow-manually" },
             { loc: [5, 8], title: "Client Side Auth", note: "https://firebase.google.com/docs/auth/web/google-signin#advanced-handle-the-sign-in-flow-manually" },
             { loc: [9, 10], title: "Client Side Auth" }
          ]}
        />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/client-firebase-rest-auth.code")}
          ranges={[
            { loc: [0, 19], title: "Post Auth" },
            { loc: [2, 4], title: "Post Auth" },
            { loc: [5, 14], title: "Post Auth" },
            { loc: [15, 16], title: "Post Auth" }
          ]}
        />
        <Slide transition={["fade", "zoom", "slide"]}>
          <List textFont="secondary" textColor="tertiary">
            <Appear><ListItem>Functions is a node project</ListItem></Appear>
            <Appear><ListItem>Authentication built in</ListItem></Appear>
            <Appear><ListItem>Has npm client libs</ListItem></Appear>
            <Appear><ListItem>Deploy hosting, functions, database only</ListItem></Appear>
          </List>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Developer Experience: The good</Heading>
        </Slide>
        <Slide transition={["fade", "zoom", "slide"]}>
          <List textFont="secondary" textColor="tertiary">
            <Appear><ListItem>Slow Deployment (minutes not seconds)</ListItem></Appear>
            <Appear><ListItem>No "before" write function</ListItem></Appear>
          </List>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Developer Experience: The bad</Heading>
        </Slide>
        <Slide transition={["fade", "zoom", "slide"]}>
          <List textFont="secondary" textColor="tertiary">
            <Appear><ListItem>Randomly failing Deployments</ListItem></Appear>
            <Appear><ListItem>Never ending Deployment</ListItem></Appear>
            <Appear><ListItem>Timeout Bug $$$</ListItem></Appear>
          </List>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Developer Experience: The ugly</Heading>
        </Slide>
        <Slide transition={["fade", "zoom", "slide"]}>
          <List textFont="secondary" textColor="tertiary">
            <Appear><ListItem>Testing functions</ListItem></Appear>
            <Appear><ListItem>Groups and authorization</ListItem></Appear>
            <Appear><ListItem>Providers as plugins</ListItem></Appear>
            <Appear><ListItem>Offline/Sync Capabilities</ListItem></Appear>
          </List>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>What's next</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>Save the Dates</Heading>
          <Heading size={4} fit margin="40px 0px" textColor="tertiary" caps>May 10th, Coding Session, Stockwerk</Heading>
          <Heading size={4} fit margin="40px 0px" textColor="tertiary" caps>May 15th, Serverless and Microservices</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>Links</Heading>
          <Heading size={4} fit margin="40px 0px" textColor="tertiary" caps>https://github.com/Serverless-Vienna/Comments-Showcase/tree/firebase</Heading>
          <Heading size={4} fit margin="40px 0px" textColor="tertiary" caps>https://serverless-vienna.firebaseapp.com/</Heading>
        </Slide>
      </Deck>
    );
  }
}
