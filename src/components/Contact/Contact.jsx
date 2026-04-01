import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Particle from "../Particle";
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            emailjs
                .sendForm(
                    "service_niilndo",
                    "template_6z5idye",
                    form.current,
                    "VOBt6Akm1LhI5CZG-"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <div style={{ position: "relative", minHeight: "100vh", background: "#fdf8e1" }}>
            <Particle />
            <Container style={{ paddingTop: "120px", paddingBottom: "60px", position: "relative", zIndex: 1 }}>
                <Row>
                    <Col md={6} className="c-left">
                        <h1>Get in Touch</h1>
                        <h1 className="yellow">Contact me</h1>
                        <p style={{ color: "#5a4a00", marginTop: "1rem", fontSize: "1.1em" }}>
                            Feel free to reach out — I'll get back to you as soon as possible!
                        </p>
                    </Col>
                    <Col md={6} className="c-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <input
                                type="text"
                                name="from_name"
                                className="user"
                                placeholder="Name"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="reply_to"
                                className="user"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                className="user"
                                placeholder="Message"
                                onChange={handleChange}
                            />
                            <span className="not-done">
                                {notDone && "Please fill in all fields before sending."}
                            </span>
                            <Button type="submit" className="button" disabled={done}>
                                Send
                            </Button>
                            <span className="done">
                                {done && "Thanks for reaching out! I'll reply as soon as possible."}
                            </span>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;