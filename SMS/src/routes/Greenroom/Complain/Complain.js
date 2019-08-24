import React, { Component } from 'react'
import { Input } from 'antd';
import { Button, Icon } from 'antd';
const { TextArea } = Input;



export default class Complain extends Component {
    onPressEnter=()=>{
        // 按下回车键事件
    console.log(1);
    }


    
    //点击返回，回到上个页面
    fanhui() {
        this.props.history.go(-1)
        console.log(1);
    }

    render() {
        return (
            <div style={{padding:'16px 12px',border:'1px solid #c5d0dc'}}>
                <div style={{ color: 'red', width: '10%', float: 'left', textAlign: 'right', marginRight: '10px', minWidth: "70px" }}>投诉内容：</div>
                <TextArea placeholder="本投诉是匿名投诉，不会暴露您的信息" style={{ maxWidth: '85%' }} autosize={{ minRows: 10, maxRows: 30 }} onPressEnter={this.onPressEnter}></TextArea>
                <div style={{ width: '50%', margin: "30px auto 0", textAlign: "CENTER" }}>

                    <Button type="primary" size="large" style={{backgroundColor:"#6fb3e0",borderColor: "#6fb3e0"}}>
                        <Icon type="check" />
                        确定
                    </Button>
                    <Button style={{ backgroundColor: "#abbac3", borderColor: "#abbac3", color: "#fff", marginLeft: "100px" }} size="large" onClick={(event) => this.fanhui()}>
                        <Icon type="undo" />
                        返回
                    </Button>



                </div>
            </div >
        )
    }
}