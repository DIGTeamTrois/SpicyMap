import {
    Button, Container,
    FormControl, Input, VStack
} from '@yamada-ui/react'

import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

// const actionMethod = async (data : any) => {
//     console.log("data", data);
//     await fetch('http://localhost:8080/login/password', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: data
//     });
// }


export default function LoginView() {
    const {
        register,
        handleSubmit,
        getValues
        // formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const actionMethod = async () => {

        const response = await fetch('/login/password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(getValues())
        });
        // console.log("onSubmit res : ", response);

        if (response.ok) {
            const response2 = await response.json();
            console.log('server response json: ', response2);
            navigate('/');
        } else {
            const response2 = await response.json();
            console.log('server response json: ', response2);
            navigate('/login');
        }
    };

    return (
        <div>
            <Container centerContent w="400px">
                <VStack>
                    <form onSubmit={handleSubmit(actionMethod)}>
                        <FormControl
                            isRequired
                            label="username"
                            // isInvalid
                            // errorMessage="usernameは必須です"
                        >
                            <Input type="text" placeholder="enter your username" {...register("username")} />
                        </FormControl>
                        <FormControl
                            isRequired
                            label="password"
                            // isInvalid
                            // errorMessage="passwordは必須です"
                        >
                            <Input type="password" placeholder="enter your password" {...register("password")}/>
                        </FormControl>
                        <Button type="submit" colorScheme="primary">ログイン</Button>
                    </form>

                    {/*<form action="http://localhost:8080/login/password" method="post">*/}
                    {/*    <div>*/}
                    {/*        <label>ユーザーID：</label>*/}
                    {/*        <input type="text" name="username"/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <label>パスワード：</label>*/}
                    {/*        <input type="password" name="password"/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <input type="submit" value="ログイン"/>*/}
                    {/*    </div>*/}
                    {/*</form>*/}

                    {/*<form action="http://localhost:8080/login/password" method="post">*/}
                    {/*    <FormControl*/}
                    {/*        isRequired*/}
                    {/*        label="username"*/}
                    {/*        // isInvalid*/}
                    {/*        // errorMessage="usernameは必須です"*/}
                    {/*    >*/}
                    {/*        <Input type="text" placeholder="enter your username" name="username" />*/}
                    {/*    </FormControl>*/}
                    {/*    <FormControl*/}
                    {/*        isRequired*/}
                    {/*        label="password"*/}
                    {/*        // isInvalid*/}
                    {/*        // errorMessage="passwordは必須です"*/}
                    {/*    >*/}
                    {/*        <Input type="password" placeholder="enter your password" name="password"/>*/}
                    {/*    </FormControl>*/}
                    {/*    <Button type="submit" colorScheme="primary">ログイン</Button>*/}
                    {/*</form>*/}

                </VStack>
            </Container>

        </div>
    );
}