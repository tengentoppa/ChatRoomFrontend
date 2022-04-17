import { Button, Card, Checkbox, Form, Input } from "antd";
import Image from "next/image";

function Login() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <>
        <div
            className="login_page_wrap"
            style={{
                background: "#e7ebf0",
                height: "100%",
            }}>
            <div
                className="login_head_bg"
                style={{
                    background: "#5682a3",
                    width: "100%",
                    height: "226px"
                }}
            ></div>
            <div className="login_page"
                style={{
                    margin: "-131px auto 40px",
                    maxWidth: 404
                }}>
                <div
                    className="login_head_wrap clearfix"
                    style={{
                        height: "75px",
                    }}
                >
                    <a className="login_head_logo_link">
                        <Image src="/images/icon.png" height={50} width={50} />
                    </a>
                </div>
                <Card
                    title="Sign in"
                >
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

        <style jsx>{`
        .login_head_wrap {
            height: 75px;
        }
        .login_head_logo_link {
            display: inline-block;
            line-height: 30px;
            padding: 23px 15px 22px;
        }
        .icon-tg-logo {
            width: 30px;
            height: 30px;
            display: inline-block;
            vertical-align: top;
            margin-right: 18px;
            background-image: url("images/icon.png");
            background-repeat: no-repeat;
            background-position: -5px -10px;
        }
        `}</style>
    </>
}

export default Login;