

import { Button, Card, Checkbox, Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/login.module.scss'

function Login() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <>
        <div
            className={styles.login_page_wrap}>
            <div
                className={styles.login_head_bg}
            ></div>
            <div className={styles.login_page}>
                <div className={`${styles.login_head_wrap} clearfix`}>
                    <Link href={'/'}>
                        <a className={styles.login_head_logo_link}>
                            <Image src="/images/icon.png" height={50} width={50} />
                        </a>
                    </Link>
                </div>
                <Card title="Sign in">
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    </>
}

export default Login;