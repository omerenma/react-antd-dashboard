import React, { Component } from 'react'
import {Table, Tag, Space} from 'antd'
import reqwest from 'reqwest'


    const columns = [
        {
            title:'Name',
            dataIndex:'name',
            sorter:true,
            render:name => `${name.first} ${name.last}`,
            width:'20p%'
        },
        {
            title:'Gender',
            dataIndex:'gender',
            filters: [
                { text: 'Male', value: 'male' },
                { text: 'Female', value: 'female' },
              ],
            width:'20%'
        },
        {
            title:'Email',
            dataIndex:'email'
        }
    
    ];

    const getRandomuserParams = (params) => {
        return {
            results: params.pagination.pageSize,
            page: params.pagination.current,
            ...params,
        }
    }


export default class Tables extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            pagination: {
                current:1,
                pageSize:10
            },
            loading:false
        }

    }
    componentDidMount() {
        const {pagination} = this.state
        this.fetch({pagination})
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
            sortField:sorter.field,
            sortOrder:sorter.order,
            pagination,
            ...filters
        })
    }

    fetch = (params = {}) => {
        this.setState({ loading: true });
        reqwest({
          url: 'https://randomuser.me/api',
          method: 'get',
          type: 'json',
          data: getRandomuserParams(params),
        }).then(data => {
          console.log(data);
          this.setState({
            loading: false,
            data: data.results,
            pagination: {
              ...params.pagination,
              total: 200,
              // 200 is mock data, you should read it from server
              // total: data.totalCount,
            },
          });
        });
      };
    render() {
        const {data, pagination, loading} = this.state;
        console.log(data, 'jiijnipni')

        return (
            <div>
                <Table 
                    columns={columns} 
                    dataSource={!data ? console.log('no data') :data} 
                    rowKey={record => record.login.uuid}
                    pagination={pagination}
                    loading={loading}
                    onChange={this.handleTableChange}
                    
                    
                    />
            </div>
        )
    }
}
