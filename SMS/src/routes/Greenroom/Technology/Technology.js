import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
import { Form, Input, Button, Radio, Icon } from "antd";
const { TextArea } = Input;
const StyledComponents = styled.div`
  p {
    color: #000;
  }
`;

class ComponentName extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        {
          style: {
            padding: "16px 12px",
            border: "1px solid #c5d0dc"
          }
        },
        h(
          Form,
          null,
          h(
            Form.Item,
            {
              label: "\u5B66\u5458\u59D3\u540D\uFF1A",
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 3
              }
            },
            h(Input, {
              placeholder: "\u8FD8\u6CA1\u5403\u9178\u83DC\u9C7C",
              disabled: true,
              style: {
                cursor: "default"
              }
            })
          ),
          h(
            Form.Item,
            {
              label: "\u95EE\u9898\u5185\u5BB9\uFF1A",
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 14
              }
            },
            h(TextArea, {
              rows: 4,
              placeholder: "\u8BF7\u8F93\u5165\u6280\u672F\u5185\u5BB9"
            })
          ),
          h(
            "div",
            {
              style: {
                width: "50%",
                margin: "30px auto 0",
                textAlign: "CENTER"
              }
            },
            h(
              Button,
              {
                type: "primary",
                size: "large",
                style: {
                  backgroundColor: "#6fb3e0",
                  borderColor: "#6fb3e0"
                }
              },
              h(Icon, {
                type: "check"
              }),
              "\u786E\u5B9A"
            ),
            h(
              Button,
              {
                style: {
                  backgroundColor: "#abbac3",
                  borderColor: "#abbac3",
                  color: "#fff",
                  marginLeft: "100px"
                },
                size: "large"
              },
              h(Icon, {
                type: "undo"
              }),
              "\u8FD4\u56DE"
            )
          )
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
}

ComponentName.css = `p{color:#000}`;
export default ComponentName;
