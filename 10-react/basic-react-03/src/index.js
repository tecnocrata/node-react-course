// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

import React from "react";
import ReactWebComponent from "react-web-component";
// import defineElement from "./customElement";
import singleSpaHtml from "single-spa-html";

class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

ReactWebComponent.create(<App />, "my-component");
// defineElement(App, "my-component", [], []);

// const htmlLifecycles = singleSpaHtml({
//   template: "<my-component></my-component>",
// });

const htmlLifecycles = singleSpaHtml({
  domElementGetter: () => {
    const id = "single-spa-application:@example/cookie-consent";
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("div");
      el.id = id;
      document.body.prepend(el); // single-spa automatically _appends_, but this content should be _prepended_ for accessibility
    }
    return el;
  },
  template: "<my-component></my-component>",
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;
