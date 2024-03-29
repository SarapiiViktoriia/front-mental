import "../css/basic.css";
import React, { Component } from "react";
import { Button, ClickableTile, FormLabel} from "carbon-components-react";
import Highlight from 'react-highlighter';
export class Card extends Component {
  render() {
    return (
      <ClickableTile className={"cards " + this.props.className} href={this.props.href} style={this.props.style}>
        <div>
          <img src={this.props.image} width="350" height="370" alt="card-pic" />
        </div>
        <br />
        <div>
          <center>
            <FormLabel
              className="title"
              style={{ marginTop: "20px", fontSize: "1.2rem" }}
            >
              <Highlight search={this.props.searchValue}>
                {this.props.title}
              </Highlight>
            </FormLabel>
          </center>
          <br />
          <center>
            {"buttonTitle" in this.props && (
              <Button kind="secondary" href={this.props.buttonHref}>
                {this.props.buttonTitle}
              </Button>
            )}
            {"description" in this.props && (
              <center>
                <FormLabel
                  className="title"
                  style={{ fontSize: "1.0rem", marginBottom: "20px" }}
                >
                  {this.props.description}
                </FormLabel>
              </center>
            )}
            {"label1" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label1_heading !== undefined
                    ? this.props.label1_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label1}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label2" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                {this.props.label2_heading !== undefined
                    ? this.props.label2_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label2}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label3" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                {this.props.label3_heading !== undefined
                    ? this.props.label3_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label3}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label4" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label4_heading}: {this.props.label4}
                </FormLabel>
              </center>
            )}
          </center>
        </div>
      </ClickableTile>
    );
  }
}
export class TinyCard extends Component {
  render() {
    return (
      <ClickableTile className={"cards " + this.props.className} href={this.props.href} style={this.props.style}>
        <div>
          <img src={this.props.image} width="200" height="190" alt=''/>
        </div>
        <br />
        <div>
          <center>
            <FormLabel
              className="title"
              style={{ marginTop: "20px", fontSize: "1.2rem" }}
            >
              <Highlight search={this.props.searchValue}>
                {this.props.title}
              </Highlight>
            </FormLabel>
          </center>
          <br />
          <center>
            {"buttonTitle" in this.props && (
              <Button kind="secondary" href={this.props.buttonHref}>
                {this.props.buttonTitle}
              </Button>
            )}
            {"description" in this.props && (
              <center>
                <FormLabel
                  className="title"
                  style={{ fontSize: "1.0rem", marginBottom: "20px" }}
                >
                  {this.props.description}
                </FormLabel>
              </center>
            )}
            {"label1" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label1_heading !== undefined
                    ? this.props.label1_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label1}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label2" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label2_heading !== undefined
                    ? this.props.label2_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label2}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label3" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label3_heading !== undefined
                    ? this.props.label3_heading + ":"
                    : ""}{" "}
                  <Highlight search={this.props.searchValue}>
                    {this.props.label3}
                  </Highlight>
                </FormLabel>
              </center>
            )}
            {"label4" in this.props && (
              <center>
                <FormLabel className="title" style={{ fontSize: "0.9rem" }}>
                  {this.props.label4_heading}: {this.props.label4}
                </FormLabel>
              </center>
            )}
          </center>
        </div>
      </ClickableTile>
    );
  }
}
