function ServerIcon({ image }) {
    return (
        <img
            src={image}
            alt=""
            className=" h-12 w-2 cursor-pointer rounded-full transition-all duration-100 ease-out hover:rounded-2xl"
            style={{
                height: '3rem', // Adjust the height as needed
                width: '3rem', // Set width to 'auto' for maintaining aspect ratio
                maxWidth: '100%', // Set maxWidth to limit the width
                cursor: 'pointer',
                borderRadius: '50%',
                transitionProperty: 'all',
                transitionDuration: '100ms',
                transitionTimingFunction: 'ease-out',
                '&:hover': {
                    borderRadius: '2rem',
                }
            }}
                />
    );
}

export default ServerIcon;