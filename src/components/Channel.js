import { HashtagIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setChannelInfo } from "../features/channelSlice";

function Channel({ id, channelName }) {
  const dispatch = useDispatch();
  const history = useHistory();
  
    const setChannel = () => {
      dispatch(
        setChannelInfo({
          channelId: id,
          channelName: channelName,
        })
      );
      history.push(`/channels/${id}`);

    };

  return( <div className="channel_look   hover:bg-discord_channelHoverBg hover:text-whihte" onClick={setChannel}>
    <HashtagIcon className ="h-5 mr-2"  style={{height: '1.25rem',height: '1.25rem'}} /> {channelName}
  </div>
  );
}

export default Channel;


