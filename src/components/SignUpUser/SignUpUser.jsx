import { useForm } from 'react-hook-form';

function SignUpUser() {
    const {
        signUp,
        handleSubmit,
        formstate: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(data);
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="SignUpUser">
            <label className='SignUpUser__text'>First Name</label>
            <input 
                type='text'
                className='SignUpUser__input'
                {...signUp('fname', { required: true })}
            />
            {errors.fname && (
                <p className='SignUpUser__error'>First name is required</p>
            )}

            <label className='SignUpUser__text'>Last Name</label>
            <input 
                type='text'
                className='SignUpUser__input'
                {...signUp('lname', { required: true })}
            />
            {errors.lname && (
                <p className='SignUpUser__error'>Last name is required</p>
            )}

            <label className='SignUpUser__text'>Username</label>
            <input 
                type='text'
                className='SignUpUser__input'
                {...signUp('uname', { required: true })}
            />
            {errors.uname && (
                <p className='SignUpUser__error'>Username is required</p>
            )}
            
            <label className='SignUpUser__text'>Email</label>
            <input 
                type='email'
                className='SignUpUser__input'
                {...signUp('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
                <p className='SignUpUser__error'>Email is required and must be valid</p>
            )}
            
            <label className='SignUpUser__text'>Password</label>
            <input 
                type='password'
                className='SignUpUser__input'
                {...signUp('pass', { required: true })}
            />
            {errors.pass && (
                <p className='SignUpUser__error'>Password is required</p>
            )}

            <button className='SignUpForm__button' type='submit'>
                Submit
            </button>
        </form>
    );
}

export default SignUpUser;