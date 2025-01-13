import React from "react";
import { ReactComponent as Person } from "../Icons/group_39dp_000000_FILL0_wght200_GRAD0_opsz40.svg";
import { ReactComponent as Google } from "../Icons/Group.svg";
import { ReactComponent as LinkedIn } from "../Icons/linkedin-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const SignIn = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate("/library");
	};
	return (
		<>
			<Header />
			<div className='page'>
				<div className='sign-in'>
					<div className='intro'>
						<div className='person-wrapper'>
							<Person />
						</div>
						<p className='sm-semibold'>Sign In</p>
						<p className='md-regular welcome'>
							Welcome back! Let’s get started with AI
						</p>
					</div>
					<div className='form'>
						<form onSubmit={handleSubmit}>
							<div className='item'>
								<label
									htmlFor='email'
									className='sm-medium label-color'
								>
									Email
								</label>
								<input
									type='text'
									name='email'
									id='email'
									placeholder='Enter your email'
									required
								/>
							</div>
							<div className='item'>
								<label
									htmlFor='password'
									className='sm-medium label-color'
								>
									Password
								</label>
								<input
									type='text'
									name='password'
									id='password'
									placeholder='Create a password'
									required
								/>
							</div>
							<div className='item'>
								<button
									className='primary-btn'
									type='submit'
								>
									Sign In
								</button>
							</div>
						</form>
						<div className='or'>
							<div></div>
							<p>OR</p>
							<div></div>
						</div>
						<div className='third-party-auth'>
							<button className='secondary-btn'>
								<Google /> Sign up with Google
							</button>
							<button className='secondary-btn'>
								<LinkedIn />
								Sign up with Linkedin
							</button>
						</div>
					</div>

					<div className='sign-up-link'>
						<p className='sm-regular'>Don’t have an account?</p>{" "}
						<a
							href='#'
							className='sm-semibold'
						>
							Sign up
						</a>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SignIn;
