import React, { useState }from 'react'
import { NawBar } from '../naw-bar'
import { routes } from '../routes'
import '../index.css'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }

export const ShopPage = props => {
    let [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false)
    }
    const redirect = () => {
      let path = routes.REVIEW
      props.history.push(path)
    }
    return(
      <>
        <NawBar></NawBar>
        <h1>Wecome to the shop</h1>
        <button onClick={openModal}>Purchase</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}>

            <p>There is no products now</p>
            <button onClick={redirect}>OK</button>
        </Modal>
      </>
    )
}
Modal.setAppElement('#root')

ShopPage.propTypes ={
  history: PropTypes.object.isRequired
}