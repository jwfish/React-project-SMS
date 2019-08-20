import React, {
    Component
} from 'react'
import { Button } from 'antd';

export default class Index extends Component {
    render() {
        return (
            <div>
                <div style={{
                    textAlign: "CENTER", borderBottom: "1px dotted #e2e2e2",overflow:'hidden'
                }}>
                    <Button type="primary" style={{
                        background: '#428bca', borderColor: '#428bca', float: 'right',
                        marginRight: '23px',
                        width: '100px',
                        height: '30px',marginBottom:'5px'
                    }}>修改</Button>
                </div>


            </div>
        )
    }

};
