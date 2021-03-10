import React from 'react'
import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'
import {setMe} from '../../redux/authReducer'
import './FileUploader.css'

const props = {
    name: 'image',
    action: '/api/auth/upload',
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    },
}

export const FileUploader = () => {
   const dispatch = useDispatch()
    const userId = useSelector((state: RootStateType) => state.auth.userId)
    const uploadHandler = () => {
        dispatch(setMe(userId))
    }
    return (

        <Upload {...props} data={{userId: userId}} onChange={uploadHandler}>
            <Button icon={<UploadOutlined />} >Upload Photo</Button>

        </Upload>

    )
}