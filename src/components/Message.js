import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { selectChannelId } from '../features/channelSlice';
import { auth ,db} from '../firebase';
import { TrashIcon } from '@heroicons/react/solid';

function Message({ id, message, timestamp, name, email, photoURL }) {
    const channelId = useSelector(selectChannelId);
    const [user] = useAuthState(auth);
  
    return (
        <div className="message_main">
            <img
                src={photoURL}
                alt=""
                className="message_photo hover:shadow-2xl"
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4 style={{
                    display: 'flex',
                    alignItems: 'center',
                    '--tw-space-x-reverse': 0,
                    marginRight: 'calc(0.5rem * var(--tw-space-x-reverse))',
                    marginLeft: 'calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))',
                    fontWeight: 500,
                }}>

                    <span className="message_name ">
                        {name}
                    </span>
                    <span style={{
                        '--tw-text-opacity': 1,
                        color: 'rgb(114 118 125 / var(--tw-text-opacity))',
                        fontSize: '0.75rem', // or '12px'
                        lineHeight: '1rem'
                    }}>
                        {moment(timestamp?.toDate().getTime()).format("lll")}
                    </span>
                </h4>
                <p style={{
                    fontSize: '0.9rem', // or '14px'
                    lineHeight: '1.25rem', // or '20px'
                    '--tw-text-opacity': 1,
                    color: 'rgb(220 221 222 / var(--tw-text-opacity))',
                    marginTop: '-0.5rem'
                }}>{message}</p>
            </div>
            {user?.email === email && (
                <div
                    className="delete_message "
                    onClick={() =>
                        db
                            .collection("channels")
                            .doc(channelId)
                            .collection("messages")
                            .doc(id)
                            .delete()
                    }
                >
                    <TrashIcon className=" trash_icon   " />
                </div>
            )}
        </div>
    );
}

export default Message;
