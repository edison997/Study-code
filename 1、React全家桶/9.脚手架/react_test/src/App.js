import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import {WechatOutlined} from '@ant-design/icons'

const { RangePicker } = DatePicker;

export default class App extends Component {
        onChange = (date, dateString) =>{
        console.log(date, dateString);
      }

    render() {
        
        return (
            <div >
                <button>DowmLoad</button>
                 <Button type="link">Primary Button</Button>
                 <Button type="chost">Primary Button</Button>
                 <Button type="dashed">Primary Button</Button>

                 <WechatOutlined />
                 <DatePicker onChange={this.onChange} />
                 <RangePicker onChange={this.onChange} />
            </div>
        )
    }
}

