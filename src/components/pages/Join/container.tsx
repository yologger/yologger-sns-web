import { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import Join from "./Join"
import * as umsApi from 'api/ums'

const Container = () => {

    const histroy = useHistory()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const data = await umsApi.join({ email: "smith@gmaim.com", name: "email", "nickname": "email", password: "123!23dqwA@4" }, "dummy_token")
        // console.log(data)
        histroy.push('/')
    }

    const onCancel = () => {
        console.log('onCancel')
    }

    return <Join
        email={email}
        name={name}
        nickname={nickname}
        password={password}
        onEmailChange={onEmailChange}
        onNameChange={onNameChange}
        onNicknameChange={onNicknameChange}
        onPasswordChange={onPasswordChange}
        onSubmit={onSubmit}
        onCancel={onCancel}
    />
}

export default Container