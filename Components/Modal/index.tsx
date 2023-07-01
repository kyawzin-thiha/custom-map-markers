
"use client"

import {Modal, Button, Text, Input, Row, Checkbox, Textarea, FormElement} from '@nextui-org/react';
import {useState} from 'react';

type Props = {
    lat: number,
    lng: number,
}

export const NewMarkerModal = ({lat, lng} : Props) => {

    const [visible, setVisible] = useState(true);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const [data, setData] = useState({
        name: "",
        description: "",
        lat : lat,
        lng: lng,
        address: "Portsmouth"
    })

    const onChange = (e: React.ChangeEvent<FormElement>) => {
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    }
    return (
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Save your new Location here
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input label="Name" placeholder="An awesome place" name="name" value={data.name} onChange={onChange} />
                <Textarea
                    placeholder="A place with a lot of fun and memories"
                    minRows={3}
                    maxRows={5}
                    label="Description"
                    name="description"
                    value={data.description}
                    onChange={onChange}
                />
                <Input label="Address" name="address" value={data.address} readOnly />
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={closeHandler}>
                    Close
                </Button>
                <Button auto onPress={closeHandler}>
                    Sign in
                </Button>
            </Modal.Footer>
        </Modal>
    )
}