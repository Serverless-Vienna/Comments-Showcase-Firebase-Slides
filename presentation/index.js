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
  Code,
  Appear,
  Fit,
  Fill,
  Image,
  Markdown
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
  blow: require("../assets/blow.gif")
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
            <Appear><ListItem><b>to make it scalable</b></ListItem></Appear>
          </List>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Writing Code</Heading>
        </Slide>
        <Slide transition={["spin", "fade"]} bgColor="white" >
          <Image src={images.awsDiagram.replace("/", "")} margin="0px auto 10px" />
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>AWS - Comments Showcase</Heading>
        </Slide>
        <Slide transition={["slide"]}>
          <CodePane source={require("raw-loader!../assets/code/firebase-23.ascii")}/>
          <Heading size={4} textFont="primary" textColor="secondary" caps>Firebase - Comments Showcase</Heading>
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
             { loc: [7, 8], title: "Uppercasing", note: "Timeout bug: http://stackoverflow.com/questions/43151022/firebase-cloud-function-onwrite-timeout" }
          ]}
        />
        <Slide transition={["slide"]}>
          <CodePane source={require("raw-loader!../assets/code/firebase-servertime.ascii")}/>
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>let's add the servertime</Heading>
        </Slide>
        <CodeSlide transition={[]}
          lang="js"
          code={require("raw-loader!../assets/code/servertime.code")}
          ranges={[
             { loc: [0, 12], title: "Adding Servertime" },
             { loc: [1, 3], title: "Adding Servertime" },
             { loc: [4, 9], title: "Adding Servertime" },
             { loc: [6, 9], title: "Adding Servertime", note: "Can you spot the problem?" }
          ]}
        />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/servertime-guard.code")}
          ranges={[
             { loc: [6, 13], title: "Adding Guard", note: "No more recursion!" }
          ]}
        />
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
          code={require("raw-loader!../assets/code/client-firebase-rest.code")}
          ranges={[
             { loc: [0, 17], title: "Client Side Post" },
             { loc: [2, 4], title: "Client Side Post" },
             { loc: [5, 12], title: "Client Side Post" },
             { loc: [13, 14], title: "Client Side Post" }
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
        <Slide transition={["zoom", "fade"]} >
          <Image src={images.blow.replace("/", "")} margin="40px auto" />
          <Heading size={4} fit textFont="primary" textColor="secondary" caps>Questions?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={2} textColor="secondary" caps>Save the Dates</Heading>
          <Heading size={4} fit margin="40px 0px" textColor="tertiary" caps>May 10th, Coding Session, Stockwerk</Heading>
          <Heading size={4} fit margin="40px 0px" textColor="tertiary" caps>May 15th, Serverless and Microservices</Heading>
        </Slide>
      </Deck>
    );
  }
}
