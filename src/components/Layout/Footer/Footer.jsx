import { useDispatch } from "react-redux";
import MainButton from "../../MainButton/MainButton";
import { byID } from "../../../redux/operations/recipiesOperations";

export default function Footer() {
	const disp = useDispatch();
	return (
		<div>
			<MainButton
				onClick={() => disp(byID("639b6de9ff77d221f190c50f"))}
				title="by id"
			/>
		</div>
	);
}
