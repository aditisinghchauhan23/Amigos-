import { BellIcon, ChatIcon, HashtagIcon, InboxIcon, QuestionMarkCircleIcon, SearchIcon, UsersIcon } from '@heroicons/react/solid'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from '../features/channelSlice';
import { auth, db } from '../firebase';
import { useRef } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { EmojiHappyIcon, GiftIcon, PlusCircleIcon } from '@heroicons/react/outline';
import firebase from 'firebase';
import Message from './Message';

function Chat() {
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [user] = useAuthState(auth);
    const inputRef = useRef("");
    const chatRef = useRef(null);
    const [messages] = useCollection(
        channelId &&
        db
            .collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp", "asc")
    );

    const scrollToBottom = () => {
        chatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const sendMessage = (e) => {
        e.preventDefault();

        if (inputRef.current.value !== "") {
            db.collection("channels").doc(channelId).collection("messages").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: inputRef.current.value,
                name: user?.displayName,
                photoURL: user?.photoURL,
                email: user?.email,
            });
        }
        inputRef.current.value = "";
        scrollToBottom();
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <header className="flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem',  // Adjust as needed
                borderBottom: '1px solid #2d2f33',  // Use the appropriate color
                padding: '1rem 2rem',  // Adjust as needed
                marginTop: '-1px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <HashtagIcon style={{
                        height: '1.5rem',
                        color: '#72767d',
                    }} />
                    <h4 style={{ color: 'white', fontWeight: 600 }}>{channelName}</h4>
                </div>
                <div className="flex space-x-3" style={{
                    display: 'flex',
                    '--tw-space-x-reverse': 0,
                    marginRight: 'calc(0.75rem * var(--tw-space-x-reverse))',
                    marginLeft: 'calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))',
                }}
                >
                    <div className="land_part1" >
                        <button style={{ height: '1.79rem', marginRight: "2.5rem" }} > SUBTITLE</button>
                    </div>
                    <BellIcon className="icon" />
                    <ChatIcon className="icon" />
                    <UsersIcon className="icon" />
                    <div style={{
                        display: 'flex',
                        '--tw-bg-opacity': 1,
                        backgroundColor: 'rgba(32, 34, 37, var(--tw-bg-opacity))',
                        fontSize: '0.75rem',
                        lineHeight: '1rem',
                        padding: '0.25rem',
                        borderRadius: '0.375rem',
                    }}>

                        <input
                            type="text"
                            placeholder="Search"
                            style={{
                                backgroundColor: '#202225',
                                outline: 'none',
                                outlineOffset: '2px',
                                '--tw-text-opacity': '1',
                                color: 'rgb(255 255 255 / var(--tw-text-opacity))',
                                padding: '0.25rem',
                                placeholder: '#72767d',
                                marginLeft: '0.25rem'
                            }} />
                        <SearchIcon

                            style={{
                                height: '1.375rem',
                                '--tw-text-opacity': 1,
                                color: 'rgba(114, 118, 125, var(--tw-text-opacity))',
                                alignItem: 'center',
                                marginRight: '0.25rem',
                            }}
                        />
                    </div>
                    <InboxIcon className="icon" />
                    <QuestionMarkCircleIcon className="icon" />
                </div>
            </header>
            <main style={{
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                WebkitScrollbar: { display: 'none', backgroundColor: 'transparent' },
                flexGlow: '1',
                overflowY: 'scroll'
            }}>
                {messages?.docs.map((doc) => {
                    const { message, timestamp, name, photoURL, email } = doc.data();

                    return (
                        <Message
                            key={doc.id}
                            id={doc.id}
                            message={message}
                            timestamp={timestamp}
                            name={name}
                            email={email}
                            photoURL={photoURL}
                        />
                    );
                })}
                <div ref={chatRef} className="pb-16" />
            </main>
            <div className=" main_div " >
                <PlusCircleIcon className='icon ' style={{ marginRight: 'auto' }} />
                <form style={{ flexGrow: '1' }}>
                    <input
                        type="text"
                        disabled={!channelId}
                        placeholder={
                            channelId ? `Message #${channelName}` : "Select a channel"
                        }
                        className="writing_chat  "
                        ref={inputRef}
                    />
                    <button hidden type="submit" onClick={sendMessage}>
                        Send
                    </button>

                </form>
                <GiftIcon className="icon " style={{ marginRight: '0.5rem' }} />
                <EmojiHappyIcon className="icon" />
            </div>
        </div>
    );
}

export default Chat;
