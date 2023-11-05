import profile from '../../assets/img/profile.png'
const Header = () => {
    return (
        <div>
            <div className='flex items-center justify-around text-3xl py-5'>
                <h1><span className='text-[#6047EC]'>Knowledge</span>-Cafe</h1>
                <img src={profile} alt="" />
            </div><hr />
        </div>
    );
};

export default Header;