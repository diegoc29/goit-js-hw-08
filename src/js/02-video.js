import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle'; 

constplayerIframe = document.getElementById('vimeo-player'); 
const player = new vimeoPlayer(playerIframe); 

const LOCAL_STORE_KEY = 'videoplayer-current-time'; 

const saveCurrentTime = throttle(currentTime => {
    localStorage.setItem(LOCAL_STORE_KEY, currentTime);
}, 1000); 

const loandAndSetCurrentTime = () => { 
    const savedTime = localStorage.getItem(LOCAL_STORE_KEY);
    if (savedTime !== null) {
        player.setCurrentTime(parseFloat(savedTime))
        .catch(error => {
            console.error(error);
        });
    }

    player.on ('timeupdate', data => {
        saveCurrentTime(data.seconds);
    });
};

loandAndSetCurrentTime(); 