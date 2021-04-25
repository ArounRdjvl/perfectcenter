import React from "react"
import { Navigation } from "../ components/Navigation"
import {
    Button,
    ControlLabel,
    Form,
    FormControl,
    FormGroup,
    HelpBlock
} from "rsuite"

export default function contact() {
    const [email, setEmail] = React.useState<string>("")
    const [subject, setSubject] = React.useState<string>("")
    const [content, setContent] = React.useState<string>("")

    function validateForm() {
        return true // TODO validate form
    }

    function submitForm() {
        fetch("/api/sendMail", {
            method: "post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, subject, content })
        }).then((res) => {
            res.status === 200
                ? console.log("email sent")
                : console.error("error email")
        })
    }

    return (
        <div>
            <Navigation />
            <Form>
                <FormGroup>
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        name="email"
                        type="email"
                        value={email}
                        onChange={(input) => setEmail(input)}
                    />
                    <HelpBlock tooltip>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Subject</ControlLabel>
                    <FormControl
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={(input) => setSubject(input)}
                    />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl
                        rows={5}
                        name="textarea"
                        componentClass="textarea"
                        value={content}
                        onChange={(input) => setContent(input)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button
                        appearance="primary"
                        onClick={() => {
                            if (validateForm())
                                submitForm()
                        }}
                    >
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </div>
    )
}
