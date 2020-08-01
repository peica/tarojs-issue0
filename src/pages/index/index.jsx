import React, { Component } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidShow() {
    console.log("componentDidShow");
  }

  componentDidHide() {
    console.log("componentDidHide");
  }

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <AtButton type="primary">I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton
          type="primary"
          circle={true}
          onClick={() => {
            Taro.navigateTo({ url: "/pages/test/index" });
          }}
        >
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type="secondary" circle={true}>
          来
        </AtButton>
      </View>
    );
  }
}
