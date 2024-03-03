import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ServerIcon from './ServerIcon';
import { ChevronDoubleDownIcon, PlusIcon, ChevronDownIcon, MicrophoneIcon, PhoneIcon, CogIcon, VideoCameraIcon } from '@heroicons/react/outline';
import Channel from "../components/Channel";
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';
function Home() {
    const [user] = useAuthState(auth);
    const [channels] = useCollection(db.collection("channels"));
    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");

        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            });
        }
    };
    return (
        <>
            {!user && <Redirect to="/" />}
            <div style={{ display: 'flex', height: '100vh' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', backgroundColor: '#202225', padding: '0.75rem', minWidth: 'max-content' }}>
                    <div className="server-default hover:bg-discord_blue">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.dOjKGlSYXQP9UYd36Fhp5AHaFh& pid=Api&P=0&h=180" alt="" style={{ height: '1.9rem' }} />
                    </div>
                    <hr className="border-gray-700 w-8" style={{
                        borderWidth: '1px',
                        width: '2rem', /* 32px */
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }} />
                    <ServerIcon image="https://tse4.mm.bing.net/th?id=OIP.CHurifVL7G2CIaziNQmn9gAAAA&pid=Api&P=0&h=180" />
                    <ServerIcon image="https://tse1.mm.bing.net/th?id=OIP.O6XkyembbTqxnfA3f6JiqgHaHl&pid=Api&P=0&h=180" />
                    <ServerIcon image="https://tse3.explicit.bing.net/th?id=OIP.HNiRxbOH7z2a4TFBZtwnwgHaGI&pid=Api&P=0&h=180" />
                    <ServerIcon image="https://tse2.mm.bing.net/th?id=OIP.jBH2TH0b0l47fT9nPrBSyAHaGJ&pid=Api&P=0&h=180" />
                    <div className="server-default hover:divide-discord_green group">
                        <PlusIcon
                            className="text-discord_green h-7 group-hover:text-white"
                        />
                    </div>
                </div>
                <div style={{ backgroundColor: '#2f3136', display: 'flex', flexDirection: 'column', minWidth: 'min-content' }}>
                    <h2 className=" server_look    cursor-pointer" style={{
                        borderBottom: '1px solid #4f545c'
                    }} >
                        Amigos Server...<ChevronDownIcon style={{ height: '1.25rem', marginLeft: '0.5rem' }} />
                    </h2>
                    <div className="text-discord_channel flex-grow overflow-y-scroll scrollbar-hide" style={{ color: '#8e9297', flexGrow: 1, overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none', scrollbarColor: '#2f3136 #202225' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '2px', marginBottom: '2px' }}>
                            <ChevronDownIcon style={{ height: '0.75rem', marginLeft: '0.5rem' }} />
                            <h4 style={{ fontWeight: '600' }}>Channels</h4>
                            <PlusIcon
                                style={{ height: '1.5rem', marginLeft: 'auto', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = ''}
                                onClick={handleAddChannel}
                            />
                        </div>
                        <div className=" space-y-2 px-2 " style={{
                            display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '0.5rem',
                            paddingRight: '0.5rem', marginBottom: '1rem'
                        }}>
                            {channels?.docs.map((doc) => (
                                <Channel
                                    key={doc.id}
                                    id={doc.id}
                                    channelName={doc.data().channelName}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-x-8" style={{
                        backgroundColor: '#292b2f',
                        padding: '0.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '8px',
                    }}>
                        <div className="space-x-1" style={{
                            display: 'flex',
                            alignItems: 'center',
                            '--tw-space-x-reverse': 0,
                            marginRight: 'calc(0.25rem * var(--tw-space-x-reverse))',
                            marginLeft: 'calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))',
                        }}>
                            <img
                                src={user?.photoURL}
                                alt=""
                                style={{
                                    height: '2.5rem', /* 40px */
                                    borderRadius: '9999px',
                                }}
                                onClick={() => auth.signOut()}
                            />
                            <h4 style={{ color: 'white', fontSize: '0.75rem', fontWeight: '500' }}>
                                {user?.displayName}{" "}
                                <span style={{ color: '#b9bbbe', display: 'block' }}>
                                    #{user?.uid.substring(0, 4)}
                                </span>
                            </h4>
                        </div>
                         <div style={{ color: 'rgba(163, 163, 163, 1)', display: 'flex', alignItems: 'center' }}>
                            <div className=" microphone">
                                <MicrophoneIcon className=" icon" style={{ height: '1.25rem ', color: 'white' }} />
                            </div>
                            <div className=" microphone">
                            <PhoneIcon className=" icon" style={{ height: '1.25rem ', color: 'white' }} />
                            </div>
                            <div className=" microphone">
                            <CogIcon className=" icon" style={{ height: '1.25rem ', color: 'white' }} />
                            </div>
                            <div className="microphone">
                                <VideoCameraIcon className=" icon" style={{ height: '1.25rem ', color: 'white' }}/>
                            </div>
                        </div>
                    </div>
                </div>
                    <div style={{ backgroundColor: '#36393f', flexGrow: 1 }}>
                        <Chat />
                    </div>
            </div>

        </>
    );

}

export default Home;

