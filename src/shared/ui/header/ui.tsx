import { ShopBag } from '@/shared/assets/bag'
import logo from '@/shared/assets/logo.png'
import { Link } from 'react-router-dom'
import { SignBtn } from '../buttons/SignIn'
import { SingUp } from '../buttons/SignUp/ui'
import { links } from './config'

export const Header = () => {
	return (
		<div className='py-8'>
			<div className='flex items-center container justify-between'>
				<div className='flex items-center'>
					<Link to={'/'}>
					<div className='w-[179px] h-[65px]'>
						<img src={logo} alt="Logo" className='w-full h-full' />
					</div>
				</Link>
				<nav>
					<ul className='flex items-center text-[#101010ba] font-medium'>
						{links.map(({link, title}) => {
							return (
								<li key={title} className='py-[10px] px-4'><Link to={link}>{title}</Link></li>
							)
						})}
					</ul>
				</nav>
				</div>
				
			<div className='flex items-center'>
				<input type="text" />
				<div className='w-6 mr-12'>
					<ShopBag/>
				</div>
				<SingUp/>
				<SignBtn title='Sign In' link='/signin'/>
			</div>
			</div>
			
		</div>
	)
}