import { Button, Input, List } from "antd";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/audio-chat.module.scss'
import { useEffect } from "react";

function AudioChat() {

    useEffect(() => {
        const constraints = {
            audio: true,
            video: false
        };

        const audio = document.querySelector('audio');
        navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

        function handleSuccess(stream) {
            const audioTracks = stream.getAudioTracks();
            console.log('Got stream with constraints:', constraints);
            console.log('Using audio device: ' + audioTracks[0].label);
            stream.oninactive = function () {
                console.log('Stream ended');
            };
            audio.srcObject = stream;
        }

        function handleError(error) {
            const errorMessage = 'navigator.MediaDevices.getUserMedia error: ' + error.message + ' ' + error.name;
            document.getElementById('errorMsg').innerText = errorMessage;
            console.log(errorMessage);
        }
    }, []);


    return <>
        <div className={styles.head_split}>
            <Link href={'/'}>
                <a className={styles.login_head_logo_link}>
                    <Image src="/images/icon.png" height={50} width={50} />
                </a>
            </Link>
        </div>
        <div className={styles.chat_split}>
            <audio id="gum-local" controls autoPlay></audio>
        </div>
    </>
}

export default AudioChat;