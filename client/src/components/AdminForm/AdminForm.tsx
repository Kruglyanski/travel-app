import React from 'react'
import {Button, Form, Input} from 'antd'

export const AdminForm = () => {
    const [form] = Form.useForm()

    return (
        <>
            <Form
                form={form}
            >

                <Form.Item label="Country">
                    <Input placeholder="Country" />
                </Form.Item>
                <Form.Item label="Capital">
                    <Input placeholder="Capital" />
                </Form.Item>
                <Form.Item label="Description">
                    <Input placeholder="Description" />
                </Form.Item>
                <Form.Item label="Capital Coordinates">
                    <Input placeholder="Capital Coordinates" />
                </Form.Item>
                <Form.Item label="ImageUrl">
                    <Input placeholder="ImageUrl" />
                </Form.Item>
                <Form.Item label="VideoUrl">
                    <Input placeholder="VideoUrl" />
                </Form.Item>
                <Form.Item label="Currency">
                    <Input placeholder="Currency" />
                </Form.Item>
                <Form.Item label="ISOCdde">
                    <Input placeholder="ISOCdde" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>

            <Form
                form={form}
            >

                <Form.Item label="Country">
                    <Input placeholder="Country" />
                </Form.Item>
                <Form.Item label="Name">
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item label="Description">
                    <Input placeholder="Description" />
                </Form.Item>
                <Form.Item label="PhotoUrl">
                    <Input placeholder="PhotoUrl" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}

