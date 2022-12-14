import { WritingSvg } from "./icon"

export const FileChooser = ({register, name}:any) => {
	return (
		<label htmlFor={name} className="w-[30px] h-[30px] bg-black rounded-full cursor-pointer flex items-center justify-center">
			<WritingSvg/>
			<input id={name}
			{...register(name)}
		className="hidden w-[30px] h-[30px]"
		type="file" />
		</label>
	)
}