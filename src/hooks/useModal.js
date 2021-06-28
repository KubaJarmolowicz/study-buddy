import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "components/organisms/Modal/Modal";

export const useModal = (initialState = false) => {
	const [isModalOpen, setModalState] = useState(initialState);

	const handleOpenModal = () => setModalState(true);
	const handleCloseModal = () => setModalState(false);

	return { Modal, isModalOpen, handleOpenModal, handleCloseModal };
};

useModal.propTypes = {};
