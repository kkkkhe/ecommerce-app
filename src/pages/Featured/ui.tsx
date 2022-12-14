import { useEffect } from 'react'

import { Card } from '@/entities/card'
import { ProductType } from '@/shared/lib/types'
import { useGetFeatureProducts } from '@/shared/lib/useGetFeatureProducts'
import { HeroLayout, Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"

// eslint-disable-next-line import/no-internal-modules
import featuredGuy from './assets/featuredGuy.webp'

export const FeaturedPage = () => {
	const {featured, getFeatured} = useGetFeatureProducts()
	useEffect(() => {
		if(!featured.length) getFeatured()
	}, [])
	return (
		<Layout header={<Header/>}>
			<div className="container pb-28 h-full">
			<HeroLayout image={featuredGuy}>
					<div className="text-[48px] font-light mb-5">Featured Products</div>
			</HeroLayout>
				<div className="px-10 mt-28">
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							featured?.map(({name, image, subtitle, id}:ProductType) => {
								return (
									<Card key={id} name={name} image={image} id={id} subtitle={subtitle}/>
								)
							})
						}
					</div>
				</div>
			</div>
		</Layout>
	)
}