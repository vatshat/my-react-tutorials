import React from "react";

import PreHeader from "../components/PreHeader";
import HeaderStore from "../stores/HeaderStore";
import styles from "./Headers.css";
import * as HeaderActions from "../actions/HeaderActions";

export default class Headers extends React.Component {
  constructor(){
    super();
    // https://codeburst.io/reactjs-a-quick-tutorial-to-build-dynamic-json-based-form-a4768b3151c0

    this.state = {
      preHeaders: HeaderStore.getAll(),
    };
  }

  componentWillMount() {
    HeaderStore.on("change", this.getHeaders);
  }

  getHeaders() {
    this.setState({
      headers: HeaderStore.getAll(),
    });
  }

  reloadHeaders() {
    HeaderActions.reloadHeaders();
  }

  render() {
    // https://zhenyong.github.io/react/docs/transferring-props.html

    const { preHeaders } = this.state;

    const PreHeaderComponents = preHeaders.map((preHeader) => {
      const id = preHeader.timestamp;
      preHeader.timestamp = new Date(id);
      return <PreHeader key={id} {...preHeader} />;
    });

    return (
      <div>
        <div className="row">
          <h1 className={styles.h1_header} >Headers</h1>
          <div class="input-group col-lg-6">
            <span class="input-group-addon"> URL </span>
            <input id="msg" type="text" class="form-control" name="msg" placeholder="Please enter url of HTTP endpoint" />
          </div>
          <button type="submit" className={"btn btn-default " + styles.url_submit} onClick={this.reloadHeaders.bind(this)}>Send request</button>
        </div>
        <div className="row">{PreHeaderComponents}</div>
      </div>
    );
  }
}
