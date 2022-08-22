import * as React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"


const AuthContainer = styled.div`
    background: #191c24;
`

const AuthCard = styled.div`
    color: #fff;
`
export const Auth = () => {

    return (<div>Hello auth</div>
        // <Form onSubmit={() => logIn()}>
        //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //         <Form.Label>Email или Логин</Form.Label>
        //         <Form.Control type="text" required placeholder="name@example.com" />
        //     </Form.Group>
        //     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        //         <Form.Label>Пароль</Form.Label>
        //         <Form.Control type="password" required placeholder="" />
        //     </Form.Group>
        //     <div className="d-flex justify-content-end">
        //         <Button type="submit" className="ml-auto">Войти</Button>
        //     </div>
        // </Form>
    )
}