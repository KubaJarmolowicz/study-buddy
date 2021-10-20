import React, { useState } from "react";
import PropTypes from "prop-types";

export const useModal = (initialState = false) => {
	const [isModalOpen, setModalState] = useState(initialState);

	const handleOpenModal = () => setModalState(true);
	const handleCloseModal = () => setModalState(false);

	return { isModalOpen, handleOpenModal, handleCloseModal };
};

useModal.propTypes = {};
