import React, { Component } from 'react'
import { Upload, message, Button, Icon } from 'antd';


export default class Itemupload extends Component {

    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
    render() {
        return (
            <div>
                <div style={{
                    textAlign: "CENTER", borderBottom: "1px dotted #e2e2e2"
                }}>
                    <h3 style={{
                        fontSize: '22px',
                        marginBottom: '10px',
                    }}>学员项目上传</h3>
                </div>

                <div style={{ marginTop: '20px', alignContent: 'center', lineHeight: '32px', padding: '16px 12px', border: '1px solid #c5d0dc ' }}>
                    <div style={{ display: 'flex' }}>
                        <span style={{ margin: '0 10px 0 50px', color: 'red' }}>项目文件：</span>

                        <div style={{ width: '300px' }}>
                            <Upload >
                                <Button>
                                    {/* <Icon type="upload" />  */}
                                    选择文件
                            </Button>
                            </Upload>
                        </div>

                        <span style={{ marginLeft: '30px', color: 'red', fontWeight: '700' }}>注：请上传格式为【zip,rar】的压缩包,上传大小不得超过10M！</span>
                    </div>

                    <div style={{textAlign:'center',margin:'40px 0 20px'}}>
                        <Button type="primary" size="large" style={{ backgroundColor: "#6fb3e0", borderColor: "#6fb3e0" }}>
                            <Icon type="check" />
                            确定
                        </Button>
                        <Button style={{ backgroundColor: "#abbac3", borderColor: "#abbac3", color: "#fff", marginLeft: "100px" }} size="large">
                            <Icon type="undo" />
                            返回
                    </Button>
                    </div>


                </div>


            </div>
        )
    }
}