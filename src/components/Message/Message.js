import React from 'react';
import { message } from 'antd';

export const MessageContexts = React.createContext()

const Message = ({ children }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const messagesuccess = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };
    const messageerror = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    const messagewarning = () => {
        messageApi.open({
            type: 'warning',
            content: 'This is a warning message',
        });
    };
    const data = { messagesuccess, messageerror, messagewarning }
    return (
        <>
            {contextHolder}
            <MessageContexts.Provider value={data}>
                {children}
            </MessageContexts.Provider>
        </>
    );
};
export default Message;