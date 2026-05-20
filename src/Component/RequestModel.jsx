import React from 'react';
import {Button, Modal} from "@heroui/react";
import { Rocket } from 'lucide-react';
import { MdRequestPage } from 'react-icons/md';
const RequestModel = async({pet}) => {
    const res = await fetch(`http://localhost:8000/listing/delts/${pet._id}`)
    const datas = await res.json()
    console.log(datas)
    return (
        <div>
            <Modal>
      <Button className={'w-full rounded-sm bg-orange-500 text-white'} variant="secondary"><MdRequestPage></MdRequestPage> Requests</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading></Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              {
                datas.map(data=> <p key={data._id}>{data.name}</p>)
              }
            </Modal.Body>
            <Modal.Footer>
              <Button className="w-full" slot="close">
                Continue
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default RequestModel;