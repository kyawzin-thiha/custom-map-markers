'use client';

import {Modal, Button, Text, Input, Row, Checkbox, Textarea, FormElement, PressEvent} from '@nextui-org/react';
import {useState} from 'react';

type Props = {
    lat: number,
    lng: number,
    address: string,
    isModalOpen: boolean,
    toggleModal: () => void,
}

export const NewMarkerModal = ({lat, lng, address, isModalOpen, toggleModal}: Props) => {


    const [data, setData] = useState({
        name: '',
        description: '',
        lat: lat,
        lng: lng,
        address: address
    });

    const onChange = (e: React.ChangeEvent<FormElement>) => {
        setData(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e: PressEvent) => {
        console.log(data);
    };
    return (
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={isModalOpen}
            onClose={toggleModal}
        >
            <Modal.Header>
                <Text id="modal-title" size={18}>
                    Save your new Location here
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Input label="Name" placeholder="An awesome place" name="name" value={data.name} onChange={onChange}/>
                <Textarea
                    placeholder="A place with a lot of fun and memories"
                    minRows={3}
                    maxRows={5}
                    label="Description"
                    name="description"
                    value={data.description}
                    onChange={onChange}
                />
                <Input label="Address" name="address" value={data.address} readOnly/>
                <Row justify="space-between">
                    <Input label="Latitude" name="lat" value={data.lat} readOnly width="45%"/>
                    <Input label="Longitude" name="lng" value={data.lng} readOnly width="45%"/>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={toggleModal}>
                    Close
                </Button>
                <Button auto onPress={onSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};