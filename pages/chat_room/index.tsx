import { Button, Input, List, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useEffect } from "react";
import styles from '../../styles/chat-room.module.scss'

function ChatRoom() {
    const ws = useRef<WebSocket>(null);
    const [message, setMessage] = React.useState('');
    const [messages, setMessages] = React.useState<string[]>([]);
    useEffect(() => {
        const roomName = 'test';
        const nickName = 'ohYeah';
        ws.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/?nickname=${nickName}`);
        ws.current.onmessage = (msg) => {
            setMessages(prev => [...prev, msg.data]);
        };
    }, []);

    return <>
        <div className={styles.head_split}>
            <Link href={'/'}>
                <a className={styles.login_head_logo_link}>
                    <Image src="/images/icon.png" height={50} width={50} />
                </a>
            </Link>
        </div>
        <div className={styles.chat_split}>
            <List
                footer={
                    <Input.Group compact>
                        <Input onChange={(e) => { setMessage(e.target.value); }} value={message} style={{ width: 'calc(100% - 76px)' }} />
                        <Button type="primary" onClick={() => { ws.current.send(message); setMessage(''); }}>Submit</Button>
                    </Input.Group>
                }
                bordered
                dataSource={messages}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>)}
            />
        </div>
    </>
}

export default ChatRoom;