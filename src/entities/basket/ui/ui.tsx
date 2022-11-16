import { useAction } from "@/shared/lib/redux-std"
import { MenuButton } from "@/shared/ui/buttons"

import { actions } from "../model"



interface IBasket {
	selectedColor: string
	selectedSize: number
	quantity: number
	price:number
	name: string
	image:string
	id:string
	totalPrice:number
}
export const BasketItem = ({selectedColor, selectedSize, quantity, price, name, image, id, totalPrice}:IBasket) => {
	const addQuantity = useAction(actions.addQuantity)
	const removeQuantity = useAction(actions.removeQuantity)
	const removeFromBasket = useAction(actions.removeFromBasket)
	return (
		<div className="flex h-[116px] items-center justify-between mb-5">
			<div className="inline-flex flex-col gap-2 mr-4">
				<MenuButton action={() => addQuantity(id)} label={'+'}/>
				<MenuButton action={() => removeQuantity(id)} label={'-'} disable={quantity == 1}/>
			</div>
				<div className="w-[90px] h-[90px] flex items-center mr-4">
					<img className="w-full h-auto" src={image} alt={name} />
				</div>
				<div className="flex flex-col gap-6 mr-8">
						<h2 className="text-xl font-medium">{name}</h2>
						<div className="flex gap-4">
							<h2 className="text-[#8d8d8d] text-lg">Quantity: <span className="text-black">{quantity}</span></h2>
							<h2 className="text-[#8d8d8d] text-lg">Size: <span className="text-black">{selectedSize} mm</span></h2>
							<h2 className="text-[#8d8d8d] text-lg flex items-center gap-2">Color: <div style={{backgroundColor: selectedColor}} className={`h-[15px] w-[15px] rounded-full mb-1`}></div> </h2>
						</div>
				</div>
					<span className="font-bold text-xl mr-2">${totalPrice? totalPrice : price}</span>
					<MenuButton action={() => removeFromBasket(id)} label={'x'}/>
		</div>
	)
}