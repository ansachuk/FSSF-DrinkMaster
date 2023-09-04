import { Notify } from "notiflix";

const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
	state.isLoading = false;
	state.error = payload;

	Notify.failure(payload);
};

const handleFullfilled = state => {
	state.isLoading = false;
	state.error = null;
};

export { handlePending, handleRejected, handleFullfilled };
