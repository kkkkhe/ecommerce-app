import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { viewerModel } from "@/entities/viewer";
import { Auth, GitHubSignIn, GoogleSignIn } from "@/features/auth"
import { useAppSelector } from "@/shared/lib/redux-std";
import { useAuth } from "@/shared/lib/useAuth";
import { SignBtn } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layout"
import { Modal } from "@/shared/ui/modal"
import { Header } from "@/widgets/header"
export const SignIn = () => {
const navigate = useNavigate()
const auth = getAuth();
const profile = useAppSelector(viewerModel.selectors.profile)
	useEffect(() => {
		if(useAuth(profile)) navigate('/')
	}, [profile])
	return (
		<Layout header={<Header/>}>
			<div className="h-full w-full flex justify-center items-center">
				<Modal 
				title={'Sign in to Salinaka'} 
				form={<Auth.SignIn.AuthSignInForm/>}
				SignButton={<SignBtn title="Sign Up" link="/signup"/>}
				text={`Don't have an account?`}
				>
					<div className="w-[60%] flex flex-col gap-3">
						<GitHubSignIn.GitHubAuth/>
						<GoogleSignIn.GoogleAuth/>
					</div>
				</Modal>
			</div>
		</Layout>
	)
}

export default SignIn