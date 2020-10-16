import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import NewListerForm from './AddListerForm'

function NewListerModal(props) {
  return (
    <Modal className='addmodal'
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        Add List
      </Modal.Header>

      <Modal.Body>
        <NewListerForm hide={props.onHide} user={props.user}/>
      </Modal.Body>
    </Modal>
  );
}

export default function NewLister({ refresh, user }) {
  const [modalShow, setModalShow] = React.useState(false);

  if(user === '') {
    return (
    <div>
      Please Enter Username
    </div>
    )
  }
  return (
    <>
      <Button variant="outline-primary" 
        onClick={() => {
        setModalShow(true)
      }}>
        Add a New List
      </Button>

      <NewListerModal
        show={modalShow}
        user={user}
        onHide={() => {
          setModalShow(false)
          refresh()
        }}
      />
    </>
  );
}